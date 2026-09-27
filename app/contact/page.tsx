import { Phone, MapPin } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

export default function ContactPage() {
  return (
    <main className="bg-[var(--bg-soft)] px-6 pb-24 pt-24 sm:px-8 lg:pt-28">
      <section className="mx-auto max-w-7xl">
        <SectionHeading title="Contact" description="Get in touch with PrimeCare RCM Solutions for a free practice evaluation." />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr]">
          <div className="glass-panel-strong rounded-[2rem] border-[var(--line)] bg-[var(--bg-panel)] p-10 shadow-[var(--shadow-soft)]">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-[var(--text-muted)]">
                  <span>Name</span>
                  <input type="text" name="name" placeholder="Your full name" className="w-full rounded-3xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-3 text-[var(--navy)] outline-none transition focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20" />
                </label>
                <label className="space-y-2 text-sm text-[var(--text-muted)]">
                  <span>Email</span>
                  <input type="email" name="email" placeholder="info@example.com" className="w-full rounded-3xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-3 text-[var(--navy)] outline-none transition focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20" />
                </label>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-[var(--text-muted)]">
                  <span>Phone</span>
                  <input type="tel" name="phone" placeholder="+92-302-4133179" className="w-full rounded-3xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-3 text-[var(--navy)] outline-none transition focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20" />
                </label>
                <label className="space-y-2 text-sm text-[var(--text-muted)]">
                  <span>Practice Type</span>
                  <select name="practiceType" className="w-full rounded-3xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-3 text-[var(--navy)] outline-none transition focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20">
                    <option>Family Practice</option>
                    <option>Internal Medicine</option>
                    <option>Cardiology</option>
                    <option>Orthopedics</option>
                    <option>Emergency Room</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>
              <label className="space-y-2 text-sm text-[var(--text-muted)]">
                <span>Message</span>
                <textarea name="message" rows={6} placeholder="Tell us about your practice or billing challenges" className="w-full rounded-3xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-3 text-[var(--navy)] outline-none transition focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/20" />
              </label>
              <button type="submit" className="button-teal w-full">
                Submit Inquiry
              </button>
            </form>
          </div>

          <div className="space-y-6 rounded-[2rem] border border-[var(--line)] bg-[var(--bg-panel)] p-10 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[var(--teal-soft)] text-[var(--teal)]">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--teal)]">Phone</p>
                <p className="mt-2 text-base font-semibold text-[var(--navy)]">+92-302-4133179</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[var(--teal-soft)] text-[var(--teal)]">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--teal)]">Location</p>
                <p className="mt-2 text-base font-semibold text-[var(--navy)]">Pakistan-based team serving US medical billing clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
