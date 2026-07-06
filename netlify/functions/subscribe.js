// Server-side proxy for Brevo newsletter signup.
// Keeps the Brevo API key out of client-side code; configure BREVO_API_KEY
// as an environment variable in the Netlify site settings.

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
    const r = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey
      },
      body: JSON.stringify({ email: email, listIds: [3], updateEnabled: true })
    });

    if (r.ok || r.status === 201 || r.status === 204) {
      return { statusCode: 200, body: JSON.stringify({ ok: true }) };
    }

    const data = await r.json().catch(() => ({}));
    return { statusCode: r.status, body: JSON.stringify({ message: data.message || 'Brevo error' }) };
  } catch (e) {
    return { statusCode: 502, body: JSON.stringify({ message: 'Upstream error' }) };
  }
};
