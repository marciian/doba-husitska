// Server-side proxy for Brevo newsletter signup with double opt-in.
exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ message: 'Method not allowed' }) };
  }

  let email;
  try {
    ({ email } = JSON.parse(event.body || '{}'));
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ message: 'Invalid request body' }) };
  }

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return { statusCode: 400, body: JSON.stringify({ message: 'Zadej platný e-mail.' }) };
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ message: 'Server not configured.' }) };
  }

  try {
    const r = await fetch('https://api.brevo.com/v3/contacts/doubleOptinConfirmation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey
      },
      body: JSON.stringify({
        email: email,
        includeListIds: [3],
        templateId: 1,
        redirectionUrl: 'https://hussitae.cz/potvrzen.html'
      })
    });

    // 204 = úspěch (no content)
    if (r.status === 204 || r.ok) {
      return { statusCode: 200, body: JSON.stringify({ ok: true }) };
    }

    const data = await r.json().catch(() => ({}));
    return { statusCode: r.status, body: JSON.stringify({ message: data.message || 'Brevo error' }) };
  } catch (e) {
    return { statusCode: 502, body: JSON.stringify({ message: 'Upstream error' }) };
  }
};
