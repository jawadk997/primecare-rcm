import { Mail, Phone, MapPin } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

export default function ContactPage() {
  return (
    <main className="bg-navy px-6 pb-24 pt-24 sm:px-8 lg:pt-28">
      <section className="mx-auto max-w-7xl">
        <SectionHeading title="Contact" description="Get in touch with PrimeCare RCM Solutions for a free practice evaluation." />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr]">
          <div className="glass-panel-strong rounded-[2rem] border-teal/20 bg-navy/90 p-10 shadow-xl">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-300">
                  <span>Name</span>
                  <input type="text" name="name" placeholder="Your full name" className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20" />
                </label>
                <label className="space-y-2 text-sm text-slate-300">
                  <span>Email</span>
                  <input type="email" name="email" placeholder="info@example.com" className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20" />
                </label>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-300">
                  <span>Phone</span>
                  <input type="tel" name="phone" placeholder="+92-302-4133179" className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20" />
                </label>
                <label className="space-y-2 text-sm text-slate-300">
                  <span>Practice Type</span>
                  <select name="practiceType" className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20">
                    <option>Family Practice</option>
                    <option>Internal Medicine</option>
                    <option>Cardiology</option>
                    <option>Orthopedics</option>
                    <option>Emergency Room</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Message</span>
                <textarea name="message" rows={6} placeholder="Tell us about your practice or billing challenges" className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20" />
              </label>
              <button type="submit" className="button-teal w-full">
                Submit Inquiry
              </button>
            </form>
          </div>

          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-xl backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-teal/10 text-teal">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-teal/90">Phone</p>
                <p className="mt-2 text-base font-semibold text-white">+92-302-4133179</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-teal/10 text-teal">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-teal/90">Email</p>
                <p className="mt-2 text-base font-semibold text-white">info@PrimeCareRMCSolutions.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-teal/10 text-teal">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-teal/90">Location</p>
                <p className="mt-2 text-base font-semibold text-white">Pakistan-based team serving US medical billing clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
