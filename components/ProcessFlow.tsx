'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CircleDot } from 'lucide-react';

interface ProcessFlowProps {
  steps: string[];
}

export default function ProcessFlow({ steps }: ProcessFlowProps) {
  return (
    <div className="overflow-x-auto py-6">
      <div className="min-w-max rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-teal/10">
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
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-teal/30 bg-teal/10 text-teal">
                  <CircleDot className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-sm uppercase tracking-[0.3em] text-slate-400">Step {index + 1}</span>
                  <p className="mt-2 text-sm font-semibold text-white">{step}</p>
                </div>
              </motion.div>
              {index !== steps.length - 1 ? <ArrowRight className="h-6 w-6 text-teal/70" /> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
