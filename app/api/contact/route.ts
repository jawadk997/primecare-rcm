import type { NextRequest } from 'next/server';
import { handleContactSubmission } from '@/backend/contact';

export async function POST(request: NextRequest) {
  return handleContactSubmission(request);
}
