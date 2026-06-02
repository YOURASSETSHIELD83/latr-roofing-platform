export default async function handler(req, res) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, address, service, message } = req.body;

  if (!name || !phone || !address) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  const emailBody = `
NEW ROOF INSPECTION REQUEST - lookatthatroof.com
================================================

Name:     ${name}
Phone:    ${phone}
Email:    ${email || 'Not provided'}
Address:  ${address}
Service:  ${service || 'Not specified'}

Notes:
${message || 'None'}

================================================
Sent from lookatthatroof.com contact form
  `.trim();

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'LATR Roofing <onboarding@resend.dev>',
        to: ['iculooking24.7@gmail.com'],
        subject: `New Lead: ${name} - ${service || 'Roof Inspection'} Request`,
        text: emailBody,
        reply_to: email || 'noreply@lookatthatroof.com',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend error:', data);
      return res.status(500).json({ error: 'Failed to send email', details: data });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
