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
        <div className="flex items-center gap-4">
          {steps.map((step, index) => (
            <div key={step} className="flex min-w-[200px] items-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--teal-soft)] text-[var(--teal)]">
                  <CircleDot className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">Step {index + 1}</span>
                  <p className="mt-2 text-sm font-semibold text-[var(--navy)]">{step}</p>
                </div>
              </motion.div>
              {index !== steps.length - 1 ? <ArrowRight className="h-6 w-6 text-[var(--teal)]" /> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
