'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { CONTACT_EMAIL, CONTACT_PHONE, contactServiceOptions, resolveServiceOption } from '@/lib/contact';

const initialForm = {
  name: '',
  businessName: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

const emptyErrors = {
  name: '',
  businessName: '',
  email: '',
  service: '',
  message: '',
};

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState(emptyErrors);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const selectedServiceFromQuery = useMemo(
    () => resolveServiceOption(searchParams.get('service')) ?? '',
    [searchParams]
  );

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      service: selectedServiceFromQuery || prev.service || '',
    }));
  }, [selectedServiceFromQuery]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    if (status !== 'idle') {
      setStatus('idle');
      setResponseMessage('');
    }
  };

  const validateForm = () => {
    const nextErrors = { ...emptyErrors };

    if (!formData.name.trim()) {
      nextErrors.name = 'Full name is required.';
    }

    if (!formData.businessName.trim()) {
      nextErrors.businessName = 'Practice / business name is required.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.service.trim()) {
      nextErrors.service = 'Please select the service you are interested in.';
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Message is required.';
    }

    setErrors(nextErrors);
    return !Object.values(nextErrors).some(Boolean);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      setStatus('error');
      setResponseMessage('Please fix the highlighted fields and try again.');
      return;
    }

    setStatus('loading');
    setResponseMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          businessName: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setResponseMessage(
        data.message || "Thank you for contacting PrimeCare RCM Solutions. We've received your inquiry and our team will get back to you shortly."
      );
      setFormData({
        ...initialForm,
        service: selectedServiceFromQuery || '',
      });
    } catch (error) {
      setStatus('error');
      setResponseMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  const buttonLabel = status === 'loading' ? 'Sending...' : status === 'success' ? 'Request Sent' : status === 'error' ? 'Something went wrong. Please try again.' : 'Send Request';

  return (
    <main className="bg-[var(--bg-soft)] px-6 py-20 sm:px-8 lg:py-24">
      <section className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-[var(--teal)]">Contact Us</p>
          <h1 className="mt-4 font-heading text-3xl font-semibold text-[var(--navy)] sm:text-5xl">Let&apos;s Talk About Your RCM Needs</h1>
          <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-7 text-[var(--text-muted)]">
            Whether you&apos;re looking for complete revenue cycle management or support with a specific service, our team is ready to help.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.3fr]">
          <aside className="rounded-[1.75rem] border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-soft)]">
            <h2 className="font-heading text-2xl font-semibold text-[var(--navy)]">Get in Touch</h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4 rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--teal-soft)] text-[var(--teal)]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">Email</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 block font-body text-base text-[var(--navy)] hover:text-[var(--teal)]">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--teal-soft)] text-[var(--teal)]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">Phone</p>
                  <a href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, '')}`} className="mt-1 block font-body text-base text-[var(--navy)] hover:text-[var(--teal)]">
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] p-4">
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">Working Hours</p>
                <p className="mt-2 font-body text-base text-[var(--navy)]">Monday to Friday</p>
                <p className="font-body text-sm text-[var(--text-muted)]">We usually respond within one business day.</p>
              </div>
            </div>
          </aside>

          <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block font-body text-sm font-medium text-[var(--navy)]">
                    Full Name <span className="text-[var(--teal)]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-3 text-[var(--navy)] outline-none transition focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal-soft)]"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name ? <p id="name-error" className="mt-2 text-sm text-red-600">{errors.name}</p> : null}
                </div>

                <div>
                  <label htmlFor="businessName" className="mb-2 block font-body text-sm font-medium text-[var(--navy)]">
                    Practice / Business Name <span className="text-[var(--teal)]">*</span>
                  </label>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-3 text-[var(--navy)] outline-none transition focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal-soft)]"
                    aria-invalid={!!errors.businessName}
                    aria-describedby={errors.businessName ? 'businessName-error' : undefined}
                  />
                  {errors.businessName ? <p id="businessName-error" className="mt-2 text-sm text-red-600">{errors.businessName}</p> : null}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block font-body text-sm font-medium text-[var(--navy)]">
                    Email <span className="text-[var(--teal)]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    inputMode="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-3 text-[var(--navy)] outline-none transition focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal-soft)]"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email ? <p id="email-error" className="mt-2 text-sm text-red-600">{errors.email}</p> : null}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block font-body text-sm font-medium text-[var(--navy)]">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-3 text-[var(--navy)] outline-none transition focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal-soft)]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block font-body text-sm font-medium text-[var(--navy)]">
                  Service Interested In <span className="text-[var(--teal)]">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-3 text-[var(--navy)] outline-none transition focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal-soft)]"
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? 'service-error' : undefined}
                >
                  <option value="">Select a service</option>
                  {contactServiceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.service ? <p id="service-error" className="mt-2 text-sm text-red-600">{errors.service}</p> : null}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-body text-sm font-medium text-[var(--navy)]">
                  Message <span className="text-[var(--teal)]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-3 text-[var(--navy)] outline-none transition focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal-soft)]"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message ? <p id="message-error" className="mt-2 text-sm text-red-600">{errors.message}</p> : null}
              </div>

              {status === 'success' || status === 'error' ? (
                <div
                  role={status === 'success' ? 'status' : 'alert'}
                  className={status === 'success' ? 'rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700' : 'rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700'}
                >
                  {responseMessage}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--teal)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--teal-hover)] disabled:cursor-not-allowed disabled:opacity-80"
              >
                {buttonLabel}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<main className="bg-[var(--bg-soft)] px-6 py-20 text-center text-[var(--navy)]">Loading...</main>}>
      <ContactFormContent />
    </Suspense>
  );
}
