'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  details: string;
}

export default function ServiceCard({ icon, title, description, details }: ServiceCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 220, damping: 16 }}
      className={cn(
        'group flex min-h-[360px] flex-col justify-between gap-6 rounded-[16px] border border-white/10 bg-[#0F2236] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-transform duration-300',
        'hover:border-teal/50 hover:shadow-[0_16px_60px_rgba(13,148,136,0.18)]'
      )}
    >
      <div className="space-y-6">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[12px] bg-teal/10 p-4">
          <div className="h-12 w-12 text-teal">{icon}</div>
        </div>
        <div className="space-y-3 text-left">
          <h3 className="font-heading text-[15px] uppercase font-semibold tracking-[0.08em] text-white">{title}</h3>
          <p className="font-body text-[14px] leading-[1.7] text-slate-300">{description}</p>
        </div>
      </div>

      <div className="space-y-4">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="mt-4 inline-block font-body text-[13px] uppercase tracking-[0.05em] font-extrabold text-teal transition-colors hover:text-teal/80"
          aria-expanded={open}
        >
          {open ? 'SHOW LESS' : 'SHOW MORE'}
        </button>
        {open ? <p className="font-body text-sm leading-6 text-slate-300">{details}</p> : null}
      </div>
    </motion.article>
  );
}
