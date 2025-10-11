# Wabi-Sabi Chat System Setup Guide

## 🌿 What's Been Implemented

Your custom chat system is now ready to replace WhatsApp! Here's what we've built:

### ✅ Components Created
- **ChatWindow**: Main chat interface with real-time messaging
- **MessageBubble**: Wabi-sabi styled message bubbles (amber/orange for users, slate for AI)
- **MessageInput**: Clean input field with send button
- **ChatFloat**: Updated floating button (replaces WhatsAppFloat)

### ✅ Features
- **Real-time messaging** via Supabase Realtime
- **AI responses** with wabi-sabi personality
- **Shareable chat links** (`/chat/[businessSlug]`)
- **Pre-filled messages** via URL parameters
- **Guest user support** (no login required)
- **Responsive design** with wabi-sabi styling

## 🚀 Setup Steps

### 1. Configure Supabase
1. Go to your Supabase dashboard: `https://supabase.com/dashboard/project/kylyhgzmjbtytpcpxpwl`
2. Navigate to **Settings > API** and copy:
   - **URL**: `https://kylyhgzmjbtytpcpxpwl.supabase.co` (already set)
   - **anon/public key** → Add to your `.env.local`
   - **service_role key** → Add to your `.env.local`

### 2. Create Database Tables
In your Supabase **SQL Editor**, run the schema from `supabase/schema.sql`:

```sql
-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Conversations table
CREATE TABLE IF NOT EXISTS conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Messages table
CREATE TABLE IF NOT EXISTS messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  conversation_id TEXT NOT NULL,
  sender_id TEXT NOT NULL,
  text TEXT NOT NULL,
  type TEXT CHECK (type IN ('user', 'ai')) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Policies (allow public access for now)
CREATE POLICY "Public can read conversations" ON conversations FOR SELECT USING (true);
CREATE POLICY "Public can insert conversations" ON conversations FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can read messages" ON messages FOR SELECT USING (true);
CREATE POLICY "Public can insert messages" ON messages FOR INSERT WITH CHECK (true);
```

### 3. Update Environment Variables
Copy `.env.local.example` to `.env.local` and fill in your Supabase keys:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL="https://kylyhgzmjbtytpcpxpwl.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-actual-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-actual-service-role-key"

# Optional: OpenAI for advanced AI responses
OPENAI_API_KEY="your-openai-key"
```

## 🔗 Chat URLs

### Standard Chat
- `https://yoursite.com/chat/wabi-sabi-business`

### Pre-filled Messages
- `https://yoursite.com/chat/wabi-sabi-business?msg=Hi! I need help with hidden income flows`

### Business-Specific Chats
- `https://yoursite.com/chat/dentist-practice`
- `https://yoursite.com/chat/restaurant-owner`
- `https://yoursite.com/chat/law-firm`

## 🎨 Wabi-Sabi Design Features

- **Organic gradients**: Amber to orange for user messages
- **Soft shadows**: Subtle depth without harshness
- **Natural spacing**: Generous padding and margins
- **Earthy colors**: Slate backgrounds, warm accents
- **Gentle animations**: Smooth transitions, no jarring effects

## 🤖 AI Personality

The AI responds with wabi-sabi principles:
- **Gentle confidence** - never pushy or hyped
- **Clear, human language** - like talking across a table
- **Focus on hidden income flows** - the core value proposition
- **Honest framing** - what needs to be heard, not just flattery

## 🔄 What Changed

### Replaced WhatsApp Integration
- ❌ `WhatsAppFloat` → ✅ `ChatFloat`
- ❌ External WhatsApp links → ✅ Internal chat routes
- ❌ Meta dependency → ✅ Self-hosted solution

### Updated Files
- `components/WhatsAppFloat.tsx` → Now `ChatFloat`
- `app/contact/page.tsx` → Updated chat link
- `app/layout.tsx` → Uses new ChatFloat component

## 🚀 Next Steps (Optional)

1. **Enhanced AI**: Integrate OpenAI for smarter responses
2. **Business Dashboard**: Admin panel to view/respond to chats
3. **File Uploads**: Allow image sharing via Supabase Storage
4. **Push Notifications**: Real-time alerts for new messages
5. **Analytics**: Track chat engagement and conversion

## 🌿 The Wabi-Sabi Way

Your chat system now embodies wabi-sabi principles:
- **Simple over complex** - Clean interface, clear purpose
- **Natural over artificial** - Organic shapes, earth tones
- **Purposeful over flashy** - Every element serves the conversation
- **Calm over chaotic** - Peaceful, focused experience

Ready to reveal hidden income flows through meaningful conversations! 🌿
