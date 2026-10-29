import { timingSafeEqual } from 'crypto';
import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

import { CATALOG_TAGS } from '@lib/data/cookies';

// Called by the backend's catalog-changed subscriber after an admin edit.
// Only the shared catalog-* tags are accepted: per-visitor tags (carts,
// customers, orders) must never be purgeable from outside that visitor's
// session.
const ALLOWED_TAGS = CATALOG_TAGS.map((tag) => `catalog-${tag}`);

const secretMatches = (provided: string | null, expected: string) => {
  if (!provided) return false;
  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
};

export const POST = async (req: NextRequest) => {
  const secret = process.env.REVALIDATE_SECRET;

  if (!secret || !secretMatches(req.headers.get('x-revalidate-secret'), secret)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const requested: unknown[] = Array.isArray(body?.tags) ? body.tags : ALLOWED_TAGS;
  const tags = requested.filter(
    (tag): tag is string => typeof tag === 'string' && ALLOWED_TAGS.includes(tag)
  );

  tags.forEach((tag) => revalidateTag(tag));

  return NextResponse.json({ revalidated: tags });
};
