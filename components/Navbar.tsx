'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { services } from '@/lib/services';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Pricing', href: '/about#pricing' },
  { label: 'Careers', href: '/about#careers' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <header className={cn('border-b border-[var(--line)] transition duration-300', navScrolled ? 'bg-white/90 shadow-sm backdrop-blur' : 'bg-white/90') }>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3 text-[var(--navy)]">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="PrimeCare RCM logo" width={60} height={60} className="object-contain" />
          </div>
          <div>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-[var(--navy)]">PrimeCare</p>
            <p className="font-heading text-sm font-semibold leading-none text-[var(--navy)]">RCM Solutions</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn('font-body text-sm transition hover:text-[var(--teal)]', pathname === item.href ? 'text-[var(--teal)]' : 'text-[var(--navy)]')}
            >
              {item.label}
            </Link>
          ))}

          <div className="relative group">
            <Link
              href="/services"
              className={cn(
                'font-body text-sm transition hover:text-[var(--teal)]',
                pathname?.startsWith('/services') ? 'text-[var(--teal)]' : 'text-[var(--navy)]'
              )}
            >
              Our Services
            </Link>
            <div className="invisible absolute left-0 top-full z-40 mt-4 hidden min-w-[340px] overflow-hidden rounded-3xl border border-[var(--line)] bg-white p-5 shadow-[var(--shadow-soft)] transition duration-300 group-hover:block group-hover:visible">
              <div className="grid gap-2 sm:grid-cols-2">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services#${service.slug}`}
                    className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-sm text-[var(--navy)] transition hover:bg-[var(--teal-soft)] hover:text-[var(--teal)]"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href="tel:+923024133179" className="font-body inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[var(--navy)]">
            <Phone className="h-4 w-4 text-[var(--navy)]" />
            +92-302-4133179
          </a>
          <button type="button" onClick={() => setOpen((prev) => !prev)} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] text-[var(--navy)] transition hover:bg-[var(--teal-soft)] md:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <button type="button" onClick={() => setOpen((prev) => !prev)} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] text-[var(--navy)] transition hover:bg-[var(--teal-soft)] md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={open ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden border-t border-[var(--line)] bg-white lg:hidden"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:px-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="font-body text-base text-[var(--navy)] transition hover:text-[var(--teal)]" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <div className="border-t border-[var(--line)] pt-4">
            <p className="font-body text-xs uppercase tracking-[0.35em] text-[var(--navy)]">Services</p>
            <div className="mt-3 grid gap-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services#${service.slug}`}
                  className="font-body text-base text-[var(--navy)] transition hover:text-[var(--teal)]"
                  onClick={() => setOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-3 border-t border-[var(--line)] pt-4">
            <a href="tel:+923024133179" className="font-body text-sm text-[var(--navy)] hover:text-[var(--teal)]">+92-302-4133179</a>
          </div>
        </div>
      </motion.div>
        </header>
    </div>
  );
}
