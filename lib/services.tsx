import type { ReactNode } from 'react';

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
    title: 'CHARGE ENTRY',
    slug: 'charge-entry',
    description:
      'Charge Entry is an essential and crucial part of the whole billing process. If it is not being carried out meticulously the whole cycle may get disturbed and sometimes will likely have to start again.',
    details:
      'Our charge entry team validates every code, unit, and modifier so claims move forward quickly while protecting your practice from delayed or rejected submissions.',
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
    title: 'CLAIMS SUBMISSION',
    slug: 'claims-submission',
    description:
      'A dedicated team of expert professionals examines each claim for demographic, coding, submission errors prior to submission ensuring valid and accurate data is submitted to the Payors.',
    details:
      'We run claims through strict pre-submission checks, fix inconsistencies, and maintain payer compliance to reduce rejections from the start.',
    icon: (
      <svg viewBox="0 0 64 64" {...iconProps}>
        <path d="M18 18h28v28H18z" />
        <path d="M26 26h12" />
        <path d="M26 34h12" />
        <path d="M26 42h8" />
        <path d="M22 22l8 8" />
        <path d="M22 30l8-8" />
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
    title: 'DENIAL MANAGEMENT',
    slug: 'denial-management',
    description:
      'Our team has implemented an exhaustive and systematic approach for all underpaid, partially paid and the denied claims resulting in most of the claims being adjudicated timely with handsome reimbursements.',
    details:
      'We analyze provider denials, determine appeal strategies, and resubmit claims quickly to recover underpaid and denied amounts with maximum efficiency.',
    icon: (
      <svg viewBox="0 0 64 64" {...iconProps}>
        <rect x="16" y="16" width="32" height="32" rx="4" />
        <path d="M24 24l16 16" />
        <path d="M40 24L24 40" />
        <path d="M18 10h28" />
        <path d="M18 54h28" />
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
    title: 'PATIENT BILLING',
    slug: 'patient-billing',
    description:
      'We equip our client’s healthcare facilities with a designated patient advocate and customer service representatives that remain in contact with the patients after the delivery of the care.',
    details:
      'Our patient billing team supports statements, payment plans, and patient communication to improve collections without harming patient satisfaction.',
    icon: (
      <svg viewBox="0 0 64 64" {...iconProps}>
        <path d="M32 12c-8.284 0-15 6.716-15 15a15 15 0 0 0 30 0c0-8.284-6.716-15-15-15z" />
        <path d="M34 24h-4" />
        <path d="M32 22v8" />
        <path d="M28 42a10 10 0 0 1 8 0" />
        <path d="M20 46c0 6.627 5.373 12 12 12s12-5.373 12-12" />
      </svg>
    ),
  },
  {
    title: 'QA & AUDITS',
    slug: 'qa-audits',
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
  {
    title: 'ICU',
    slug: 'icu',
    description:
      'We have the track record with the best possible approach and solutions for any Intensive Care Units (ICU) and Critical Care Units to deliver revenue outcomes they may have never expected.',
    details:
      'Our ICU solutions combine tight clinical documentation review, specialized billing policies, and rapid escalation to capture critical care revenue accurately.',
    icon: (
      <svg viewBox="0 0 64 64" {...iconProps}>
        <circle cx="22" cy="22" r="6" />
        <circle cx="42" cy="22" r="6" />
        <circle cx="32" cy="42" r="6" />
        <path d="M22 28l10 8 10-8" />
        <path d="M32 14v8" />
        <path d="M32 46v8" />
      </svg>
    ),
  },
];
