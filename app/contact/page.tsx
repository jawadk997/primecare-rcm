import { Phone } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

export default function ContactPage() {
  return (
    <main className="bg-[var(--bg-soft)] px-6 pb-24 pt-24 sm:px-8 lg:pt-28">
      <section className="mx-auto max-w-5xl">
        <SectionHeading title="Contact" description="Call us directly to discuss your practice and billing needs." />

        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--bg-panel)] p-8 shadow-[var(--shadow-soft)] sm:p-10">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-center sm:text-left">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--teal-soft)] text-[var(--teal)]">
              <Phone className="h-7 w-7" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--teal)]">Phone</p>
              <a href="tel:+923024133179" className="mt-2 block text-2xl font-semibold text-[var(--navy)] transition hover:text-[var(--teal)] sm:text-3xl">
                +92-302-4133179
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
