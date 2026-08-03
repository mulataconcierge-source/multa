/**
 * POST /api/inquiry — receives the homepage trip-inquiry form and emails it to
 * Margui. Runs as a Vercel serverless function (Node runtime, CommonJS).
 *
 * Requires TWO environment variables in Vercel → Settings → Environment Variables:
 *
 *   RESEND_API_KEY = re_xxxxxxxxxxxxxxxx     (from https://resend.com)
 *   MAIL_TO        = the inbox that receives inquiries
 *
 * MAIL_TO is deliberately NOT hardcoded: this repository is public, and an
 * address committed here would be harvested by spam scrapers.
 *
 * No domain setup is needed to start — Resend can send from its shared
 * onboarding address to your own account inbox, which is exactly this case.
 * Once the domain is verified you can also set:
 *
 *   MAIL_FROM = Mulata Concierge <hello@your-domain>
 */

const MAIL_TO = process.env.MAIL_TO;
const MAIL_FROM = process.env.MAIL_FROM || 'Mulata Website <onboarding@resend.dev>';

const esc = (s) =>
  String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

function buildEmail(v) {
  const row = (label, value) =>
    `<tr>
       <td style="padding:10px 16px;background:#FAF8F4;font:600 12px/1.4 Helvetica,Arial,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#7A5F1C;white-space:nowrap;vertical-align:top">${esc(label)}</td>
       <td style="padding:10px 16px;font:400 15px/1.6 Helvetica,Arial,sans-serif;color:#111">${esc(value) || '—'}</td>
     </tr>`;

  return `<!doctype html><html><body style="margin:0;padding:24px;background:#F0EDE8">
    <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #E5E0D8;border-radius:6px;overflow:hidden">
      <tr><td style="padding:24px 20px;background:#0A0A0A">
        <div style="font:600 20px/1.2 Georgia,serif;color:#FAF8F4">New trip inquiry</div>
        <div style="font:400 13px/1.5 Helvetica,Arial,sans-serif;color:#C9A84C;margin-top:6px">via mulataconcierge.com.co</div>
      </td></tr>
      <tr><td style="padding:8px 4px">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
          ${row('Name', v.fullName)}
          ${row('Email', v.email)}
          ${row('Phone', v.phone)}
          ${row('Trip', v.description)}
        </table>
      </td></tr>
      <tr><td style="padding:16px 20px;border-top:1px solid #E5E0D8;font:400 12px/1.6 Helvetica,Arial,sans-serif;color:#5A5A5A">
        Reply directly to this email to answer ${esc(v.fullName)}.
      </td></tr>
    </table>
  </body></html>`;
}

/** Exported for local testing; keeps the HTTP shell thin. */
function validate(body) {
  const v = {
    fullName: String(body.fullName || '').trim(),
    email: String(body.email || '').trim(),
    phone: String(body.phone || '').trim(),
    description: String(body.description || '').trim(),
    botcheck: body.botcheck
  };
  if (v.botcheck) return { spam: true, value: v };
  if (!v.fullName || !v.email || !v.description) {
    return { error: 'Please fill in your name, email and trip details.', value: v };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) {
    return { error: 'That email address does not look valid.', value: v };
  }
  if (v.fullName.length > 120 || v.email.length > 160 || v.description.length > 4000) {
    return { error: 'That submission is too long.', value: v };
  }
  return { value: v };
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
  if (!body || typeof body !== 'object') body = {};

  const { spam, error, value } = validate(body);

  // Honeypot tripped — pretend everything is fine, send nothing.
  if (spam) return res.status(200).json({ success: true });
  if (error) return res.status(400).json({ success: false, message: error });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || !MAIL_TO) {
    console.error('[inquiry] Missing env config:',
      !apiKey ? 'RESEND_API_KEY' : '', !MAIL_TO ? 'MAIL_TO' : '');
    return res.status(500).json({ success: false, message: 'Email is not configured yet.' });
  }

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: MAIL_FROM,
        to: [MAIL_TO],
        reply_to: value.email,
        subject: `New trip inquiry — ${value.fullName}`,
        html: buildEmail(value)
      })
    });

    if (!r.ok) {
      const detail = await r.text();
      console.error('[inquiry] Resend rejected the send:', r.status, detail);
      return res.status(502).json({ success: false, message: 'Could not send right now.' });
    }

    return res.status(200).json({ success: true });
  } catch (e) {
    console.error('[inquiry] Unexpected failure:', e);
    return res.status(500).json({ success: false, message: 'Could not send right now.' });
  }
};

module.exports.validate = validate;
module.exports.buildEmail = buildEmail;
