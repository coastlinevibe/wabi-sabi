import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Basic validation
    const required = ['name', 'email', 'message']
    const missing = required.filter((k) => !body?.[k] || String(body[k]).trim() === '')
    if (missing.length) {
      return NextResponse.json({ error: `Missing required fields: ${missing.join(', ')}` }, { status: 400 })
    }

    const WEBAPP_URL = process.env.GOOGLE_SHEETS_WEBAPP_URL
    if (!WEBAPP_URL) {
      return NextResponse.json({ error: 'Server misconfigured: GOOGLE_SHEETS_WEBAPP_URL not set' }, { status: 500 })
    }

    // Forward to Google Apps Script Web App
    // Normalize phone to digits only for numeric-only columns in Sheets
    let normalizedPhone = ''
    if (body.phone !== undefined && body.phone !== null) {
      const raw = String(body.phone)
      let digits = raw.replace(/\D/g, '') // remove all non-digits
      if (digits.startsWith('0')) {
        // Convert leading 0 to South African country code 27
        digits = '27' + digits.slice(1)
      }
      normalizedPhone = digits
    }

    const payload = {
      timestamp: new Date().toISOString(),
      name: body.name,
      email: body.email,
      company: body.company || '',
      phone: normalizedPhone,
      projectType: body.projectType || '',
      budget: body.budget || '',
      timeline: body.timeline || '',
      message: body.message,
      source: 'wabi-sabi/contact',
      userAgent: request.headers.get('user-agent') || '',
    }

    const res = await fetch(WEBAPP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const text = await res.text().catch(() => '')
      return NextResponse.json({ error: `Sheets gateway error: ${res.status} ${text}` }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Unexpected error' }, { status: 500 })
  }
}
