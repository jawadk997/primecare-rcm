import type { ReactNode } from 'react';
import { normalizeServiceValue, serviceOptions } from './contact';

export interface ServiceDefinition {
  title: string;
  description: string;
  details: string;
  slug: string;
  icon: ReactNode;
}

const iconProps = {
  width: 64,
  height: 64,
  fill: 'none' as const,
  stroke: 'currentColor' as const,
  strokeWidth: '1.5' as const,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export const services: ServiceDefinition[] = [
  {
    title: 'CREDENTIALING',
    slug: 'credentialing',
    description:
      'Credentialing is a complex and delicate process handled by our experienced professional credentialing specialists to ensure pre-requisites for a seamless workflow are met timely.',
    details:
      'Our credentialing specialists manage payer enrollment, provider documentation, and revalidation to avoid disruptions and secure uninterrupted reimbursement eligibility.',
    icon: (
      <svg viewBox="0 0 64 64" {...iconProps}>
        <rect x="14" y="20" width="36" height="28" rx="4" />
        <path d="M18 20v-6h28v6" />
        <path d="M26 30h12" />
        <path d="M32 26v12" />
        <path d="M44 28l6 6-6 6" />
        <path d="M48 34h-4" />
      </svg>
    ),
  },
  {
    title: 'PATIENT SCHEDULING',
    slug: 'patient-scheduling',
    description:
      'Efficient patient scheduling keeps visits organized, reduces no-shows, and supports smoother front-end revenue operations for healthcare practices.',
    details:
      'We support appointment coordination, provider calendars, intake checklists, and follow-up planning to keep patient flow consistent and clinic operations efficient.',
    icon: (
      <svg viewBox="0 0 64 64" {...iconProps}>
        <rect x="14" y="16" width="36" height="34" rx="4" />
        <path d="M22 12v8" />
        <path d="M42 12v8" />
        <path d="M14 26h36" />
        <path d="M22 34h6" />
        <path d="M32 34h8" />
        <path d="M22 42h14" />
      </svg>
    ),
  },
  {
    title: 'PRIOR AUTHORIZATION / ELIGIBILITY VERIFICATION',
    slug: 'prior-authorization-eligibility-verification',
    description:
      'We review coverage, verify patient eligibility, and manage prior authorization requests to reduce delays and improve claim approval rates before treatment.',
    details:
      'Our team confirms payer requirements, obtains necessary approvals, and checks service eligibility to help practices avoid avoidable denials and revenue disruption.',
    icon: (
      <svg viewBox="0 0 64 64" {...iconProps}>
        <rect x="16" y="18" width="32" height="28" rx="4" />
        <path d="M24 32h16" />
        <path d="M32 24v16" />
        <path d="M18 12h28" />
        <path d="M18 52h28" />
      </svg>
    ),
  },
  {
    title: 'CODING',
    slug: 'coding',
    description:
      'Our Certified Professional Coders (CPC) with updated knowledge and latest trends in the industry ensures accurate and compliant coding practices are adopted by setting Industry Benchmark Standards.',
    details:
      'We maintain strict coding reviews, payer-specific rules, and clinical documentation alignment to maximize claim accuracy and minimize denials.',
    icon: (
      <svg viewBox="0 0 64 64" {...iconProps}>
        <rect x="16" y="14" width="24" height="36" rx="4" />
        <path d="M24 18h16" />
        <path d="M24 26h16" />
        <path d="M24 34h16" />
        <path d="M44 42l6 6" />
        <path d="M46 48l6-6" />
        <path d="M18 18h-4v-4h4v4z" />
        <path d="M18 24h-4v-4h4v4z" />
      </svg>
    ),
  },
  {
    title: 'CHARGE ENTRY / SCRUBBING',
    slug: 'charge-entry-scrubbing',
    description:
      'Charge Entry is an essential and crucial part of the whole billing process. If it is not being carried out meticulously the whole cycle may get disturbed and sometimes will likely have to start again. Our claims submission team reviews each claim for accuracy before it is sent to the payors.',
    details:
      'Our charge entry and claims submission team validates every code, unit, modifier, and demographic detail so claims move forward quickly while protecting your practice from delayed or rejected submissions.',
    icon: (
      <svg viewBox="0 0 64 64" {...iconProps}>
        <path d="M18 12h28v40H18z" />
        <path d="M18 22h28" />
        <path d="M26 32h16" />
        <path d="M26 38h10" />
        <path d="M28 48l8-8l8 4" />
        <circle cx="46" cy="46" r="9" />
        <path d="M50 44l-8 8" />
      </svg>
    ),
  },
  {
    title: 'PAYMENT POSTING',
    slug: 'payment-posting',
    description:
      "A dedicated team ensures all paper checks, ERAs and EFTs are reviewed daily and posted timely to give the day-to-day status of the cash inflow to our client’s so they know what's going on in their practice.",
    details:
      'We post payments accurately, reconcile cash receipts, and validate payer remittances so you get clear daily visibility on revenue inflow.',
    icon: (
      <svg viewBox="0 0 64 64" {...iconProps}>
        <path d="M18 40h10v10H18z" />
        <path d="M32 30h10v20H32z" />
        <path d="M46 24h10v26H46z" />
        <circle cx="46" cy="20" r="10" />
        <path d="M42 20h8" />
        <path d="M46 16v8" />
      </svg>
    ),
  },
  {
    title: 'DENIAL MANAGEMENT',
    slug: 'denial-management',
    description:
      'We identify denial trends, resolve claim issues, and manage appeals to recover revenue and prevent repeat denials.',
    details:
      'Our specialists review remittance advice, classify denial reasons, prepare appeals, and share payer insights to improve upstream workflows.',
    icon: (
      <svg viewBox="0 0 64 64" {...iconProps}>
        <path d="M18 14h28a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4z" />
        <path d="M24 24h16" />
        <path d="M24 32h10" />
        <path d="M24 40h8" />
        <path d="M42 38l8 8" />
        <path d="M50 38l-8 8" />
      </svg>
    ),
  },
  {
    title: 'AR FOLLOW UP',
    slug: 'ar-follow-up',
    description:
      'We have a dedicated team of experienced and well-versed account receivable specialists rigorously following up on all the submitted claims with the Payors to get timely adjudication status.',
    details:
      'Our AR specialists track payment status, request updates from payors, and escalate aged claims to secure faster adjudication and revenue recovery.',
    icon: (
      <svg viewBox="0 0 64 64" {...iconProps}>
        <path d="M18 32c0-7.732 6.268-14 14-14s14 6.268 14 14-6.268 14-14 14-14-6.268-14-14z" />
        <path d="M32 24v8l5 3" />
        <path d="M18 44l-4 8 12-4" />
        <path d="M46 16l10 10" />
        <path d="M46 26l10-10" />
      </svg>
    ),
  },
  {
    title: 'PATIENT CALLING',
    slug: 'patient-calling',
    description:
      'Our patient calling support improves follow-up communication, resolves billing questions, and helps drive timely collections after services are delivered.',
    details:
      'We handle patient outreach, statement follow-up, payment reminders, and account support to reduce backlog and improve patient engagement.',
    icon: (
      <svg viewBox="0 0 64 64" {...iconProps}>
        <path d="M24 18a8 8 0 0 1 16 0v28a8 8 0 0 1-16 0V18z" />
        <path d="M20 28h24" />
        <path d="M32 12v40" />
        <path d="M28 48h8" />
        <path d="M18 54h28" />
      </svg>
    ),
  },
  {
    title: 'QUALITY ASSURANCE',
    slug: 'quality-assurance',
    description:
      "Our dedicated analytics and reporting team analyzes the trends and ensures the implementation of a pre-defined reporting and transparency matrix depicting the real-time status of our clients' practice.",
    details:
      'We perform audit-ready trend analysis, identify improvement opportunities, and maintain compliance records for consistent reporting and revenue integrity.',
    icon: (
      <svg viewBox="0 0 64 64" {...iconProps}>
        <path d="M18 44h12v8H18z" />
        <path d="M34 34h12v18H34z" />
        <path d="M50 24h10v28H50z" />
        <path d="M18 34l8-12 8 6 8-10 8 16" />
      </svg>
    ),
  },

];

const serviceOrder = new Map(serviceOptions.map((option, index) => [normalizeServiceValue(option), index]));

services.sort((first, second) => {
  const firstOrder = serviceOrder.get(normalizeServiceValue(first.title)) ?? Number.MAX_SAFE_INTEGER;
  const secondOrder = serviceOrder.get(normalizeServiceValue(second.title)) ?? Number.MAX_SAFE_INTEGER;
  return firstOrder - secondOrder;
});
