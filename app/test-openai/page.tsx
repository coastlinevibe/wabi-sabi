'use client';

import { useState } from 'react';
import MessageBubble from '@/components/chat/MessageBubble';
import PromptButtons from '@/components/chat/PromptButtons';

export default function TestOpenAI() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const testAPI = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/chat/ai-response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: message || 'What services does Wabi-Sabi offer?',
          conversation_id: 'test-session',
          sender_id: 'test-user',
          business_name: 'wabi-sabi-business'
        }),
      });

      const data = await res.json();
      setResponse(data.reply || 'No response');
    } catch (error) {
      setResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Test OpenAI API & Markdown Rendering</h1>

      <div className="mb-8">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter test message (e.g., What services does Wabi-Sabi offer?)"
          className="border p-2 w-full mb-4"
        />
        <button
          onClick={testAPI}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? 'Testing...' : 'Test API'}
        </button>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Chat Preview:</h2>

        {/* User message */}
        <MessageBubble
          text={message || "What services does Wabi-Sabi offer?"}
          sender="user"
        />

        {/* AI response */}
        {response && (
          <MessageBubble
            text={response}
            sender="ai"
          />
        )}

        {/* Sample formatted messages */}
        <div className="mt-8 p-4 bg-gray-100 rounded">
          <h3 className="font-semibold mb-2">Sample Formatted Messages (with colors, prompts & interactive buttons):</h3>
          <p className="text-sm text-gray-600 mb-4">
            Hover over the AI message below to see the interactive buttons. 
            Test the copy button (turns green when successful), and try liking/disliking (buttons disable after feedback).
          </p>
          <MessageBubble
            text="**Wabi-Sabi Services Overview:**

We offer three levels:
- **Foundation** (R50k+): Basic automation and client database
- **Growth** (R100k+): CRM systems and customer portals
- **Scale** (R250k+): Multi-department workflows

*Contact us at +27 71 432 9190 or wabisabiclick2025@gmail.com for a free discovery call!*"
            sender="ai"
          />
          <PromptButtons
            prompts={[
              "Tell me about pricing details",
              "What's included in Foundation level?",
              "Can I see client testimonials?",
              "How do I get started?"
            ]}
            onPromptClick={(prompt: string) => alert(`Clicked: ${prompt}`)}
          />
        </div>
      </div>
    </div>
  );
}
