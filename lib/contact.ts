export const CONTACT_EMAIL = 'primecarercm.contact@gmail.com';
export const CONTACT_PHONE = '+92-302-4133179';

export const serviceOptions = [
  'Credentialing',
  'Patient Scheduling',
  'Prior Authorization / Eligibility Verification',
  'Coding',
  'Charge Entry / Scrubbing',
  'Payment Posting',
  'Denial Management',
  'AR Follow Up',
  'Patient Calling',
  'Quality Assurance',
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

  const exactMatch = serviceOptions.find(
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
