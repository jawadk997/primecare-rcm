import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';
import { CONTACT_EMAIL, contactServiceOptions, normalizeServiceValue } from '@/lib/contact';

const resendApiKey = process.env.RESEND_API_KEY;
const gmailUser = process.env.GMAIL_USER || CONTACT_EMAIL;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
const fromEmail = process.env.RESEND_FROM_EMAIL || process.env.GMAIL_USER || CONTACT_EMAIL;
const destinationEmail = process.env.CONTACT_EMAIL || CONTACT_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;
const gmailTransport = gmailUser && gmailAppPassword
  ? nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    })
  : null;

function sanitizeString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = sanitizeString(body.name);
    const businessName = sanitizeString(body.businessName);
    const email = sanitizeString(body.email).toLowerCase();
    const phone = sanitizeString(body.phone);
    const service = sanitizeString(body.service);
    const message = sanitizeString(body.message);

    if (!name || !businessName || !email || !service || !message) {
      return NextResponse.json(
        { message: 'Please complete all required fields.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const normalizedService = normalizeServiceValue(service);
    const isKnownService = contactServiceOptions.some(
      (option) => normalizeServiceValue(option) === normalizedService
    );

    if (!isKnownService) {
      return NextResponse.json(
        { message: 'Please select a valid service.' },
        { status: 400 }
      );
    }

    const inquiryHtml = `
      <div style="font-family: Arial, sans-serif; color: #10233f; line-height: 1.6;">
        <h2 style="margin-bottom: 18px;">New Service Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Practice / Business:</strong> ${businessName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service Interested In:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      </div>
    `;

    const customerHtml = `
      <div style="font-family: Arial, sans-serif; color: #10233f; line-height: 1.7;">
        <p>Thank you for contacting PrimeCare RCM Solutions.</p>
        <p>We've received your inquiry regarding <strong>${service}</strong>.</p>
        <p>Our team will review your request and get back to you as soon as possible.</p>
        <p>Best regards,<br />PrimeCare RCM Solutions</p>
      </div>
    `;

    if (gmailTransport && gmailAppPassword) {
      await gmailTransport.sendMail({
        from: `PrimeCare RCM Solutions <${gmailUser}>`,
        to: destinationEmail,
        replyTo: email,
        subject: `New Service Inquiry - ${service}`,
        html: inquiryHtml,
        text: `${name} (${email})\n\nPractice: ${businessName}\nPhone: ${phone || 'Not provided'}\nService: ${service}\n\nMessage:\n${message}`,
      });

      await gmailTransport.sendMail({
        from: `PrimeCare RCM Solutions <${gmailUser}>`,
        to: email,
        subject: 'Thank You for Contacting PrimeCare RCM Solutions',
        html: customerHtml,
        text: `Thank you for contacting PrimeCare RCM Solutions. We have received your inquiry about ${service}. Our team will review it and get back to you shortly.`,
      });

      return NextResponse.json(
        {
          success: true,
          message: "Thank you for contacting PrimeCare RCM Solutions. We've received your inquiry and our team will get back to you shortly.",
        },
        { status: 200 }
      );
    }

    if (!resend || !fromEmail || !destinationEmail) {
      return NextResponse.json(
        { message: 'Email service is not configured for this environment.' },
        { status: 500 }
      );
    }

    const emailResult = await resend.emails.send({
      from: fromEmail,
      to: [destinationEmail],
      replyTo: email,
      subject: `New Service Inquiry - ${service}`,
      html: inquiryHtml,
    });

    const confirmationResult = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: 'Thank You for Contacting PrimeCare RCM Solutions',
      html: customerHtml,
    });

    if (emailResult.error || confirmationResult.error) {
      const message = emailResult.error?.message || confirmationResult.error?.message || 'Unable to send email message.';
      return NextResponse.json({ message }, { status: 500 });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting PrimeCare RCM Solutions. We've received your inquiry and our team will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Something went wrong while submitting your request.';
    return NextResponse.json({ message }, { status: 500 });
  }
}
