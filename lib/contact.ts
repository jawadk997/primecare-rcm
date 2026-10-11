export const CONTACT_EMAIL = 'primecarercm.contact@gmail.com';
export const CONTACT_PHONE = '+92-302-4133179';

export const contactServiceOptions = [
  'Credentialing',
  'Patient Scheduling',
  'Coding',
  'Prior Authorization / Eligibility Verification',
  'Charge Entry',
  'Patient Calling',
  'AR Follow Up',
  'Payment Posting',
  'QA',
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
