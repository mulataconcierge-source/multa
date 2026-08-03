/**
 * Homepage inquiry form — delivery configuration.
 *
 * The form posts plain JSON to our own serverless function at /api/inquiry
 * (see api/inquiry.js), which emails the inquiry on via Resend. No third-party
 * form service and no per-form submission cap — only the email provider's own
 * allowance applies.
 *
 * ── SETUP ─────────────────────────────────────────────────────────────────
 *  1. Sign up at https://resend.com and create an API key
 *  2. In Vercel → Settings → Environment Variables add:
 *        RESEND_API_KEY = re_xxxxxxxxxxxx
 *        MAIL_TO        = the inbox that should receive inquiries
 *  3. Redeploy.
 *
 * The destination inbox is an env var, not a constant, because this repository
 * is public and a committed address would be scraped for spam.
 *
 * Optional, once your sending domain is verified in Resend (DNS at Hostinger):
 *        MAIL_FROM = Mulata Concierge <hello@your-domain>
 *
 * ── LOCAL DEVELOPMENT ─────────────────────────────────────────────────────
 * `ng serve` does not run serverless functions, so /api/inquiry returns 404
 * locally and the form falls back to WhatsApp. To exercise the real endpoint
 * on your machine run `vercel dev` instead.
 */

/** Endpoint that receives the inquiry. Relative, so it works on any domain. */
export const INQUIRY_ENDPOINT = '/api/inquiry';

/** Margui's WhatsApp number, digits only, including country code. */
export const WHATSAPP_NUMBER = '573013132423';

export interface InquiryPayload {
  fullName: string;
  email: string;
  phone: string;
  description: string;
  /** Honeypot — must stay empty. Bots fill it, humans never see it. */
  botcheck?: string;
}

/** Builds the wa.me link used as the fallback delivery channel. */
export function buildWhatsAppFallback(v: InquiryPayload): string {
  const msg =
    `Hi Margui! I'd like to plan a trip.\n\n` +
    `Name: ${v.fullName}\n` +
    `Email: ${v.email}\n` +
    (v.phone ? `Phone: ${v.phone}\n` : '') +
    `\nAbout the trip:\n${v.description}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
