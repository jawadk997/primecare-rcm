'use client';

import { motion } from 'framer-motion';
import { Briefcase, Globe2, HeartHandshake, ShieldCheck, Sparkles, Users } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';

const values = [
  { title: 'Mission', description: 'Deliver reliable, HIPAA-compliant revenue cycle support to US medical practices with offshore efficiency.', icon: Globe2 },
  { title: 'Vision', description: 'Be the preferred long-term revenue partner for U.S. providers by focusing on trust, quality, and growth.', icon: Sparkles },
  { title: 'Approach', description: 'Blend advanced billing technology with trained professionals to improve cash flow and reduce administrative burden.', icon: Briefcase },
];

const team = [
  { name: 'M. Afnan', role: 'Founder & Head of Strategy' },
  { name: 'Asim Peerzada', role: 'Operations Director' },
  { name: 'Muhammad Usman', role: 'General Manager RCM' },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[var(--bg-soft)] px-6 pb-24 pt-24 sm:px-8 lg:pt-28">
      <section className="mx-auto max-w-7xl">
        <SectionHeading title="Who We Are" description="A US-focused medical billing partner serving practices with secure, high-performance revenue cycle management." />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6 rounded-[2rem] border border-[var(--line)] bg-[var(--bg-panel)] p-10 shadow-[var(--shadow-soft)]">
            <p className="text-lg leading-8 text-[var(--text-muted)]">
              PrimeCare RCM Solutions combines offshore cost-efficiency with deep knowledge of U.S. payer rules. We help physicians and clinics focus on patient care while our expert billing teams drive faster payments and lower denials.
            </p>
            <p className="text-lg leading-8 text-[var(--text-muted)]">
              Our Pakistan-based staff work to U.S. time zones and standards, providing HIPAA-safe systems, claim scrubbing, denial management, and transparent analytics for every practice we support.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="glass-panel space-y-6 p-10">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--teal)]">Leadership</p>
            <div className="space-y-4">
              {team.map((member) => (
                <div key={member.name} className="rounded-3xl border border-[var(--line)] bg-[var(--bg-soft-strong)] p-5">
                  <p className="font-semibold text-[var(--navy)]">{member.name}</p>
                  <p className="text-sm text-[var(--text-muted)]">{member.role}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-0 pb-16 pt-16 sm:px-0">
        <SectionHeading title="Our Values" description="Principles that guide every claims workflow and customer relationship." />
        <div className="grid gap-6 lg:grid-cols-3">
          {values.map((value, index) => (
            <motion.div key={value.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="glass-panel p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[var(--teal-soft)] text-[var(--teal)]">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[var(--navy)]">{value.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[var(--text-muted)]">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-0 pt-16 sm:px-0">
        <div className="glass-panel-strong rounded-[2rem] border border-[var(--line)] bg-[var(--bg-panel)] p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--teal)]">Pricing</p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--navy)]">Flexible, transparent support for growing practices.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-[var(--line)] bg-[var(--bg-soft)] p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--teal)]">Starter</p>
              <p className="mt-4 text-3xl font-semibold text-[var(--navy)]">Custom</p>
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">Ideal for smaller clinics that need dependable billing support without extra overhead.</p>
            </div>
            <div className="rounded-3xl border border-[var(--line)] bg-[var(--bg-soft)] p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--teal)]">Growth</p>
              <p className="mt-4 text-3xl font-semibold text-[var(--navy)]">Custom</p>
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">Designed for providers scaling volume, complexity, and claim management across multiple workflows.</p>
            </div>
            <div className="rounded-3xl border border-[var(--line)] bg-[var(--bg-soft)] p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--teal)]">Enterprise</p>
              <p className="mt-4 text-3xl font-semibold text-[var(--navy)]">Custom</p>
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">Comprehensive support for larger teams requiring operational oversight, analytics, and process optimization.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="careers" className="mx-auto max-w-7xl px-0 pt-16 sm:px-0">
        <div className="glass-panel rounded-[2rem] border border-[var(--line)] bg-[var(--bg-panel)] p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--teal)]">Careers</p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--navy)]">Join a team built for accuracy, accountability, and growth.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
            We are always looking for driven professionals in medical billing, coding, denial management, and revenue operations who want to make a meaningful impact for US healthcare practices.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="rounded-full border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-2 text-sm text-[var(--navy)]">Medical Coding</span>
            <span className="rounded-full border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-2 text-sm text-[var(--navy)]">AR Follow-Up</span>
            <span className="rounded-full border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-2 text-sm text-[var(--navy)]">Denial Management</span>
            <span className="rounded-full border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-2 text-sm text-[var(--navy)]">Operations</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-0 pt-16 sm:px-0">
        <div className="glass-panel-strong flex flex-col gap-8 rounded-[2rem] border-[var(--line)] bg-[var(--bg-panel)] p-10 text-center lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--teal)]">Presented by</p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--navy)]">PrimeCare RCM Solutions is presented by M. Afnan.</h2>
          </div>
          <Link href="/contact" className="button-teal">
            Call Now
          </Link>
        </div>
      </section>
    </main>
  );
}
