'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/lib/services';

export default function ServicesPage() {
  return (
    <main className="bg-[var(--bg-soft)] px-6 pb-24 pt-24 sm:px-8 lg:pt-28">
      <section className="mx-auto max-w-7xl text-center">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-teal">OUR SERVICES</p>
        <h1 className="mt-4 font-heading text-3xl font-semibold leading-tight text-[var(--navy)] sm:text-4xl">Complete Revenue Cycle Management Solutions</h1>
        <p className="mt-4 font-body text-sm leading-7 text-[var(--text-muted)]">From credentialing to payment posting — we handle every step of your billing workflow.</p>

        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
