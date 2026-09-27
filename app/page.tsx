'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Activity, ArrowRightCircle, BarChart3, CalendarCheck, ClipboardList, HeartHandshake, ShieldCheck, Sparkles, TrendingUp, Wallet, Zap, Users } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import SectionHeading from '@/components/SectionHeading';
import StatsBar from '@/components/StatsBar';
import ProcessFlow from '@/components/ProcessFlow';
import { services } from '@/lib/services';

const specialties = [
  { title: 'Family Practice', icon: Users, description: 'Comprehensive billing for primary care visits, preventive services, and chronic disease management.' },
  { title: 'Internal Medicine', icon: ShieldCheck, description: 'Accurate coding and claims for complex internal medicine procedures and evaluations.' },
  { title: 'Orthopedics', icon: CalendarCheck, description: 'Precise coding for surgical and non-surgical orthopedic procedures and follow-ups.' },
  { title: 'Emergency Room', icon: Zap, description: 'Fast-turnaround billing for freestanding ERs and micro-hospitals, 24/7.' },
  { title: 'Cardiology', icon: BarChart3, description: 'Expert coding for cardiac procedures, diagnostics, and interventional cardiology.' },
];

const benefits = [
  { title: 'Experienced Billing Professionals', description: 'Dedicated coders and billers with deep U.S. medical knowledge.' },
  { title: 'HIPAA-Compliant Processes', description: 'Secure workflows with encrypted data and audit-ready controls.' },
  { title: 'Faster Payments', description: 'Reduced claim cycle times through optimized submission and follow-up.' },
  { title: 'Reduced Claim Rejections', description: 'Clean, compliant claims backed by proactive denial prevention.' },
  { title: 'Cost-Effective Solutions', description: 'Flexible support packages designed for small to mid-size practices.' },
  { title: 'Transparent Reporting', description: 'Daily dashboards, KPI tracking, and clear revenue visibility.' },
];

const processSteps = [
  'Patient Registration',
  'Insurance Verification',
  'Medical Coding',
  'Claim Submission',
  'Payment Posting',
  'AR Follow-up',
  'Denial Management',
  'Final Reimbursement',
];

export default function HomePage() {
  return (
    <main className="bg-[var(--bg-soft)]">
      <section id="top" className="relative min-h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center">
          <div
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1920&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="absolute inset-0"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(16,35,63,0.82) 38%, rgba(16,35,63,0.35) 100%)' }} />
        </div>

        <div className="relative z-10 flex min-h-screen items-center">
          <div className="container mx-auto px-6 sm:px-8">
            <div className="max-w-3xl" style={{ marginLeft: '10%' }}>
              <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-body text-sm uppercase text-teal">
                PRECISION. PERFORMANCE. PEACE OF MIND.
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="mt-4 font-heading text-[64px] font-bold leading-tight text-white">
                Expert Medical Billing
                <br />
                &amp; RCM Solutions
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }} className="mt-6 max-w-xl font-body text-[18px] leading-7 text-slate-300">
                Helping US clinics and physicians get paid faster with HIPAA-compliant, accurate billing — trusted by practices nationwide.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-8 flex gap-4">
                <a href="tel:+923024133179" className="inline-flex items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white">
                  Call Now
                </a>
                <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-semibold text-white">
                  Our Services
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-6 flex gap-6 text-sm text-slate-200">
                <span>✅ HIPAA Compliant</span>
                <span>✅ 24/7 Support</span>
                <span>✅ US-Based Specialists</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      <section id="services" className="bg-[var(--bg-soft)] px-6 py-16 text-center sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-teal">OUR SERVICES</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-[var(--navy)] sm:text-4xl">Complete Revenue Cycle Management Solutions</h2>
          <p className="mt-4 font-body text-sm leading-7 text-[var(--text-muted)]">From credentialing to payment posting — we handle every step of your billing workflow.</p>
          <div className="mx-auto mt-4 h-1 w-24 rounded bg-teal" />
        </div>

        <div className="mx-auto mt-10 max-w-7xl">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="specialties" className="bg-[var(--bg-soft)] px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-teal">Specialties</p>
            <h2 className="mt-3 font-heading text-2xl font-semibold text-[var(--navy)]">Care & Expertise by Specialty</h2>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {specialties.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.07 }} className="rounded-[1.5rem] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(16,35,63,0.08)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--teal-soft)] text-[var(--teal)]">
                    <item.icon className="h-6 w-6 text-[var(--teal)]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-[var(--navy)]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{item.description ?? 'Focused coding, billing, and claims work for your specialty.'}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:px-8">
        <SectionHeading title="Why Choose Us" description="Six reasons practices trust PrimeCare for US medical billing." />
        <div className="grid gap-6 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="glass-panel p-8">
              <h3 className="text-xl font-semibold text-[var(--navy)]">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[var(--text-muted)]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8">
        <SectionHeading title="Revenue Cycle Process" description="An 8-step flow that keeps claims moving and revenue growing." />
        <ProcessFlow steps={processSteps} />
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--bg-soft-strong)] px-6 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading title="Compliance & Security" description="HIPAA-grade controls and US billing compliance built into every engagement." />
            <ul className="space-y-4 text-[var(--text-muted)]">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[var(--teal-soft)] text-[var(--teal)]">✓</span>
                <span>Encrypted servers, secure user access, and protected PHI handling.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[var(--teal-soft)] text-[var(--teal)]">✓</span>
                <span>Regular quality reviews, denial audits, and compliance reporting.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[var(--teal-soft)] text-[var(--teal)]">✓</span>
                <span>US billing regulation alignment, payer requirements, and HIPAA safeguards.</span>
              </li>
            </ul>
          </div>
          <div className="glass-panel p-8">
            <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--bg-soft-strong)] p-7">
              <div className="flex items-center gap-4">
                <ShieldCheck className="h-6 w-6 text-[var(--teal)]" />
                <span className="text-sm uppercase tracking-[0.35em] text-[var(--teal)]">Secure data</span>
              </div>
              <p className="mt-4 text-lg font-semibold text-[var(--navy)]">Protected systems and controlled access for every client account.</p>
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">We ensure security and compliance are enforced from intake to reimbursement.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:px-8">
        <SectionHeading title="How to Get Started" description="A four-step onboarding plan for fast, reliable practice support." />
        <div className="grid gap-6 lg:grid-cols-4">
          {[
            { title: 'Free Practice Evaluation', description: 'Review your current workflow, claims, and revenue opportunities.' },
            { title: 'Billing Setup & Data Access', description: 'Connect your EHR, eligibility, and payer portals securely.' },
            { title: 'Go-Live & Claim Submission', description: 'Begin claims filing and payment posting with tight quality checks.' },
            { title: 'Continuous Monitoring & Support', description: 'Ongoing revenue performance and dedicated account support.' },
          ].map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="glass-panel p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--teal)]">Step {index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold text-[var(--navy)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-8">
        <div className="glass-panel-strong flex flex-col items-center justify-between gap-6 rounded-[2rem] border-[var(--line)] bg-[var(--bg-panel)] p-12 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--teal)]">Ready to Increase Your Revenue?</p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--navy)] sm:text-4xl">Partner with a trusted medical billing team.</h2>
          </div>
          <a href="tel:+923024133179" className="button-teal">
            Call Now
          </a>
        </div>
      </section>
    </main>
  );
}
