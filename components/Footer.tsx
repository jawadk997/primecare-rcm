import Image from 'next/image';
import Link from 'next/link';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--navy)] py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl space-y-6">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="PrimeCare RCM logo" width={50} height={50} className="rounded-2xl bg-white/5 p-2" />
            <div>
              <p className="font-body text-sm uppercase tracking-[0.35em] text-[var(--teal)]">PrimeCare RCM Solutions</p>
              <p className="font-heading text-base font-semibold text-white">US Medical Billing & RCM</p>
            </div>
          </div>
          <p className="font-body text-slate-300">
            US-focused medical billing and revenue cycle management services delivered with HIPAA-compliant workflows, transparent reporting,
            and global billing expertise.
          </p>
          <div className="space-y-2 text-sm text-slate-300">
            <p className="font-body">Phone: <a href="tel:+923024133179" className="text-[var(--teal)]">+92-302-4133179</a></p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="font-body text-sm text-slate-300 transition hover:text-[var(--teal)]">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-400 font-body">
        © {new Date().getFullYear()} PrimeCare RCM Solutions. All rights reserved.
      </div>
    </footer>
  );
}
