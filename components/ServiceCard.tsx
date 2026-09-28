'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { buildServiceQueryValue } from '@/lib/contact';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  details: string;
}

export default function ServiceCard({ icon, title, description, details }: ServiceCardProps) {
  const [open, setOpen] = useState(false);
  const serviceQuery = buildServiceQueryValue(title);

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 220, damping: 16 }}
      className={cn(
        'group flex min-h-[360px] flex-col justify-between gap-6 rounded-[1.5rem] border border-[var(--line)] bg-[var(--bg-panel)] p-6 shadow-[var(--shadow-soft)] transition-all duration-300',
        'hover:border-teal/40 hover:shadow-[0_16px_38px_rgba(16,35,63,0.08)]'
      )}
    >
      <div className="space-y-6">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[12px] bg-[var(--teal-soft)] p-4">
          <div className="h-12 w-12 text-[var(--teal)]">{icon}</div>
        </div>
        <div className="space-y-3 text-left">
          <h3 className="font-heading text-[15px] uppercase font-semibold tracking-[0.08em] text-[var(--navy)]">{title}</h3>
          <p className="font-body text-[14px] leading-[1.7] text-[var(--text-muted)]">{description}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col gap-3 pt-2">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 font-body text-[13px] uppercase tracking-[0.05em] font-extrabold text-[var(--teal)] transition-colors hover:text-[var(--teal-hover)]"
            aria-expanded={open}
          >
            <span>{open ? 'SHOW LESS' : 'SHOW MORE'}</span>
            <span aria-hidden="true">→</span>
          </button>

          <Link
            href={`/contact?service=${serviceQuery}`}
            className="inline-flex items-center justify-center rounded-full bg-[var(--navy)] px-4 py-3 text-center font-body text-[12px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[var(--teal)]"
          >
            GET THIS SERVICE
          </Link>
        </div>

        {open ? <p className="font-body text-sm leading-6 text-[var(--text-muted)]">{details}</p> : null}
      </div>
    </motion.article>
  );
}
