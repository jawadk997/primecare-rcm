'use client';

import { motion } from 'framer-motion';
import { BarChart3, Lock, Rocket, ShieldCheck, Sparkles, Users } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const propsData = [
  { title: 'Trusted Experts', description: 'Experienced billing professionals with U.S. payer edge.', icon: Users },
  { title: 'Secure Operations', description: 'HIPAA-grade security and audit-ready processes.', icon: Lock },
  { title: 'Rapid Revenue', description: 'Faster payments through optimized claims workflows.', icon: Rocket },
  { title: 'Fewer Rejections', description: 'Claims scrubbed and validated before submission.', icon: ShieldCheck },
  { title: 'Clear Reporting', description: 'Transparent metrics that make revenue visible and simple.', icon: BarChart3 },
  { title: 'Practice Growth', description: 'Reduced overhead and better cash flow for your team.', icon: Sparkles },
];

const detailStats = [
  { label: '98% Clean Claim Rate', value: '98%' },
  { label: '24/7 Support Availability', value: '24/7' },
  { label: '30+ US Payers Supported', value: '+30' },
  { label: '14-Day Implementation', value: '14d' },
];

export default function WhyChooseUsPage() {
  return (
    <main className="bg-[var(--bg-soft)] px-6 pb-24 pt-24 sm:px-8 lg:pt-28">
      <section className="mx-auto max-w-7xl">
        <SectionHeading title="Value Propositions" description="Why practices choose PrimeCare for medical billing and revenue cycle success." />
        <div className="grid gap-6 lg:grid-cols-3">
          {propsData.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.06 }} className="glass-panel p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[var(--teal-soft)] text-[var(--teal)]">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[var(--navy)]">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[var(--text-muted)]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-0 pt-16 sm:px-0">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel-strong rounded-[2rem] border-[var(--line)] bg-[var(--bg-panel)] p-10">
            <h2 className="text-3xl font-semibold text-[var(--navy)]">Built for practices that demand reliability, compliance, and improved collections.</h2>
            <p className="mt-5 text-sm leading-7 text-[var(--text-muted)]">We focus on measurable outcomes and service transparency, so your practice can reduce administrative burden while improving revenue performance in the US market.</p>
          </div>
          <div className="grid gap-4">
            {detailStats.map((item, index) => (
              <motion.div key={item.label} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.06 }} className="glass-panel p-8">
                <p className="text-4xl font-semibold text-[var(--navy)]">{item.value}</p>
                <p className="mt-3 text-sm text-[var(--text-muted)]">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
