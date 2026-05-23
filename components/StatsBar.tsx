'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

const stats: StatItem[] = [
  { label: 'First-Pass Claim Rate', value: 95, suffix: '%' },
  { label: 'Compliance Accuracy', value: 99, suffix: '%' },
  { label: 'Revenue Increase', value: 30, suffix: '%' },
  { label: 'Less Admin Time', value: 75, suffix: '%' },
];

function AnimatedStat({ value, label, suffix }: StatItem) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-150px' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 20, stiffness: 180 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      setCount(Math.round(latest));
    });
  }, [springValue]);

  return (
    <div ref={ref} className="glass-panel flex min-w-[180px] flex-1 flex-col gap-3 p-6 text-center">
      <p className="text-4xl font-semibold text-white">
        {count}
        <span className="text-teal">{suffix}</span>
      </p>
      <p className="text-sm leading-6 text-slate-300">{label}</p>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="mx-auto my-16 max-w-7xl px-6 sm:px-8">
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((item) => (
          <AnimatedStat key={item.label} {...item} />
        ))}
      </div>
    </section>
  );
}
