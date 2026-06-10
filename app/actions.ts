'use server';

export type WaitlistResult = { ok: boolean; error?: string };

export async function joinWaitlist(
  email: string,
  spaces: string[] = [],
  phone?: string,
): Promise<WaitlistResult> {
  const key = process.env.LOOPS_API_KEY;
  if (!key) {
    console.error('LOOPS_API_KEY is not configured');
    return { ok: false, error: 'Server configuration error.' };
  }

  const res = await fetch('https://app.loops.so/api/v1/contacts/create', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      source: 'grouv-waitlist',
      userGroup: 'waitlist',
      subscribed: true,
      ...(spaces.length > 0 && { selectedSpaces: spaces.join(', ') }),
      ...(phone && { phone }),
    }),
  });

  if (res.status === 409) {
    // Contact already exists — patch spaces/phone if provided
    if (spaces.length > 0 || phone) {
      await fetch('https://app.loops.so/api/v1/contacts/update', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${key}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          ...(spaces.length > 0 && { selectedSpaces: spaces.join(', ') }),
          ...(phone && { phone }),
        }),
      }).catch(() => null);
    }
    return { ok: true };
  }

  if (!res.ok) {
    const data = await res.json().catch(() => ({})) as { message?: string };
    return { ok: false, error: data.message ?? 'Something went wrong. Please try again.' };
  }

  // Fire-and-forget welcome email if a transactional ID is configured in Loops
  const tid = process.env.LOOPS_TRANSACTIONAL_ID;
  if (tid) {
    fetch('https://app.loops.so/api/v1/transactional', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ transactionalId: tid, email }),
    }).catch(() => null);
  }

  return { ok: true };
}
