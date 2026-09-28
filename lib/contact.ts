export const CONTACT_EMAIL = 'primecarercm81@gmail.com';
export const CONTACT_PHONE = '+92-302-4133179';

export const contactServiceOptions = [
  'Credentialing',
  'Coding',
  'Charge Entry',
  'Claims Submission',
  'AR Follow Up',
  'Denial Management',
  'Payment Posting',
  'Patient Billing',
  'QA & Audits',
];

export function normalizeServiceValue(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function resolveServiceOption(value: string | null): string | null {
  if (!value) {
    return null;
  }

  const normalized = normalizeServiceValue(value);

  if (!normalized) {
    return null;
  }

  const exactMatch = contactServiceOptions.find(
    (option) => normalizeServiceValue(option) === normalized
  );

  if (exactMatch) {
    return exactMatch;
  }

  return null;
}

export function buildServiceQueryValue(value: string) {
  const resolved = resolveServiceOption(value) ?? value.trim();
  return encodeURIComponent(resolved);
}
