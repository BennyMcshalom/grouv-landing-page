export async function appendWaitlistRow(row: {
  email: string;
  phone?: string;
  spaces?: string[];
}) {
  const url = process.env.GOOGLE_SCRIPT_URL;
  const secret = process.env.GOOGLE_SCRIPT_SECRET;

  if (!url || !secret) {
    console.error('Google Sheets is not configured (missing GOOGLE_SCRIPT_URL / GOOGLE_SCRIPT_SECRET)');
    return;
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret,
      email: row.email,
      phone: row.phone ?? '',
      spaces: (row.spaces ?? []).join(', '),
    }),
  });

  if (!res.ok) {
    throw new Error(`Google Sheets script responded with ${res.status}`);
  }

  const data = await res.json().catch(() => null) as { ok?: boolean; error?: string } | null;
  if (data && data.ok === false) {
    throw new Error(data.error ?? 'Google Sheets script reported failure');
  }
}
