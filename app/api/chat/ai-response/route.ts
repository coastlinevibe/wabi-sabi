import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { generateOpenAIResponse } from '@/lib/openai-knowledge-base';

// Forward chat messages to Wabi-Sabi dashboard
async function forwardToWabiSabiDashboard({
  message,
  conversation_id,
  sender_id,
  type,
  business_name
}: {
  message: string;
  conversation_id: string;
  sender_id: string;
  type: 'user' | 'ai';
  business_name?: string;
}) {
  try {
    // Use dedicated chat sheet URL if available, fallback to main sheet
    const WEBAPP_URL = process.env.CHAT_SHEETS_WEBAPP_URL || process.env.GOOGLE_SHEETS_WEBAPP_URL;
    if (!WEBAPP_URL) {
      console.warn('Chat sheets URL not configured for dashboard forwarding');
      return;
    }

    // Create payload for dashboard
    const payload = {
      timestamp: new Date().toISOString(),
      conversation_id,
      sender_id,
      message_type: type,
      message_text: message,
      source: 'wabi-sabi-chat',
      business_slug: business_name || conversation_id.split('-')[0], // Extract business name
      chat_session: `chat-${conversation_id}`,
      user_agent: 'Wabi-Sabi Chat System'
    };

    // Send to Google Sheets (your existing dashboard system)
    const response = await fetch(WEBAPP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error('Failed to forward to dashboard:', response.status, response.statusText);
    } else {
      console.log(`Message forwarded to dashboard: ${type} message from ${sender_id}`);
    }
  } catch (error) {
    console.error('Error forwarding to dashboard:', error);
    // Don't throw - we don't want dashboard errors to break the chat
  }
}

export async function POST(request: Request) {
  try {
    const { message, conversation_id, sender_id, business_name, conversation_history } = await request.json();

    // Generate AI response using OpenAI with knowledge base and conversation history
    const aiResponse = await generateOpenAIResponse(message, conversation_history || []);

    console.log('AI response object:', aiResponse);

    // Insert AI response into database
    const { error } = await supabase
      .from('messages')
      .insert([{
        conversation_id,
        sender_id: 'ai-system',
        text: aiResponse.response,
        type: 'ai'
      }]);

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to save AI response' },
        { status: 500 }
      );
    }

    // Also send AI response to dashboard for tracking
    await forwardToWabiSabiDashboard({
      message: aiResponse.response,
      conversation_id,
      sender_id: 'ai-system',
      type: 'ai',
      business_name
    });

    return NextResponse.json({ 
      success: true, 
      reply: aiResponse.response,
      prompts: aiResponse.prompts
    });
  } catch (error) {
    console.error('AI response error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
