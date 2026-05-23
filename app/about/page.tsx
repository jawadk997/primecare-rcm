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
  { name: 'Sara Khan', role: 'Operations Director' },
  { name: 'Bilal Ahmed', role: 'Senior Coding Manager' },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-navy px-6 pb-24 pt-24 sm:px-8 lg:pt-28">
      <section className="mx-auto max-w-7xl">
        <SectionHeading title="Who We Are" description="A US-focused medical billing partner serving practices with secure, high-performance revenue cycle management." />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-xl backdrop-blur-xl">
            <p className="text-lg leading-8 text-slate-300">
              PrimeCare RCM Solutions combines offshore cost-efficiency with deep knowledge of U.S. payer rules. We help physicians and clinics focus on patient care while our expert billing teams drive faster payments and lower denials.
            </p>
            <p className="text-lg leading-8 text-slate-300">
              Our Pakistan-based staff work to U.S. time zones and standards, providing HIPAA-safe systems, claim scrubbing, denial management, and transparent analytics for every practice we support.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="glass-panel space-y-6 p-10">
            <p className="text-sm uppercase tracking-[0.35em] text-teal/90">Leadership</p>
            <div className="space-y-4">
              {team.map((member) => (
                <div key={member.name} className="rounded-3xl border border-white/10 bg-navy/80 p-5">
                  <p className="font-semibold text-white">{member.name}</p>
                  <p className="text-sm text-slate-400">{member.role}</p>
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
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-teal/10 text-teal">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{value.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-0 pt-16 sm:px-0">
        <div className="glass-panel-strong flex flex-col gap-8 rounded-[2rem] border-teal/20 p-10 text-center lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-teal/90">Presented by</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">PrimeCare RCM Solutions is presented by M. Afnan.</h2>
          </div>
          <Link href="/contact" className="button-teal">
            Talk With Our Team
          </Link>
        </div>
      </section>
    </main>
  );
}
