'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CircleDot } from 'lucide-react';

interface ProcessFlowProps {
  steps: string[];
}

export default function ProcessFlow({ steps }: ProcessFlowProps) {
  return (
    <div className="overflow-x-auto py-6">
      <div className="min-w-max rounded-[1.75rem] border border-[var(--line)] bg-[var(--bg-panel)] p-6 shadow-[var(--shadow-soft)]">
        <div className="flex items-center gap-5">
          {steps.map((step, index) => (
            <div key={`${step}-${index}`} className="flex min-w-[220px] items-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--teal)] bg-[var(--teal-soft)] text-[var(--teal)] shadow-[0_0_0_3px_rgba(19,168,158,0.12)]">
                  <CircleDot className="h-5 w-5 fill-current" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]">Step {index + 1}</span>
                  <p className="mt-2 text-base font-semibold text-[var(--navy)]">{step}</p>
                </div>
              </motion.div>

              {index !== steps.length - 1 ? (
                <ArrowRight className="h-6 w-6 shrink-0 text-[var(--teal)]" strokeWidth={2.3} />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
