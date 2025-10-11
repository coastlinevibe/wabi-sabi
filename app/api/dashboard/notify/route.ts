import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { 
      conversation_id, 
      sender_id, 
      message, 
      type, 
      business_name,
      user_email 
    } = await request.json();

    const WEBAPP_URL = process.env.GOOGLE_SHEETS_WEBAPP_URL;
    if (!WEBAPP_URL) {
      return NextResponse.json(
        { error: 'Dashboard not configured' },
        { status: 500 }
      );
    }

    // Enhanced payload for Wabi-Sabi dashboard
    const payload = {
      timestamp: new Date().toISOString(),
      type: 'chat_message',
      conversation_id,
      sender_id,
      message_type: type,
      message_text: message,
      business_name: business_name || conversation_id.replace(/-/g, ' '),
      user_email: user_email || 'anonymous',
      source: 'wabi-sabi-chat',
      chat_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://wabi-sabi.click'}/chat/${conversation_id}`,
      priority: type === 'user' ? 'high' : 'normal',
      status: 'new',
      tags: ['chat', 'wabi-sabi', type === 'user' ? 'customer-message' : 'ai-response']
    };

    // Send to dashboard
    const response = await fetch(WEBAPP_URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'User-Agent': 'Wabi-Sabi Chat System v1.0'
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Dashboard API error: ${response.status}`);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Notification sent to dashboard' 
    });

  } catch (error) {
    console.error('Dashboard notification error:', error);
    return NextResponse.json(
      { error: 'Failed to notify dashboard' },
      { status: 500 }
    );
  }
}
