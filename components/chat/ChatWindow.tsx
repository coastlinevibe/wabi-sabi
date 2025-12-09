"use client";
import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { Message } from '@/lib/supabase';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import { Loader2 } from 'lucide-react';

export default function ChatWindow({
  businessId,
}: {
  businessId: string;
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");
  const [initialMessage, setInitialMessage] = useState<string>("");
  const [welcomeSent, setWelcomeSent] = useState<boolean>(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Get initial message from URL
    const urlParams = new URLSearchParams(window.location.search);
    const prefillMsg = urlParams.get('msg');
    if (prefillMsg) {
      setInitialMessage(decodeURIComponent(prefillMsg));
    }
  }, []);

  useEffect(() => {
    // Generate unique session ID for this chat session
    const generateSessionId = () => {
      const timestamp = Date.now();
      const random = Math.random().toString(36).substring(2, 15);
      return `${businessId}-${timestamp}-${random}`;
    };

    const currentSessionId = generateSessionId();
    setSessionId(currentSessionId);

    // Start with empty messages for new session (privacy)
    setMessages([]);
    setWelcomeSent(false); // Reset welcome flag for new session
    setIsLoading(false);

    // Send initial AI welcome message after a brief delay
    setTimeout(() => {
      sendInitialWelcomeMessage(currentSessionId);
    }, 1000);

    // Note: We don't load old messages for privacy - each session is fresh

    // Subscribe to new messages for this session only
    const channel = supabase
      .channel(`chat:${currentSessionId}`)
      .on(
        "postgres_changes",
        { 
          event: "INSERT", 
          schema: "public", 
          table: "messages",
          filter: `conversation_id=eq.${currentSessionId}`
        },
        (payload) => {
          const newMessage = payload.new as Message;
          
          // Only add messages from this session that aren't already in local state
          if (newMessage.conversation_id === currentSessionId) {
            setMessages(prev => {
              // Check if message already exists (avoid duplicates)
              const exists = prev.some(msg => 
                msg.conversation_id === newMessage.conversation_id && 
                msg.text === newMessage.text && 
                msg.sender_id === newMessage.sender_id &&
                msg.type === newMessage.type
              );
              
              if (!exists) {
                return [...prev, newMessage];
              }
              return prev;
            });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [businessId]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  // Send initial welcome message from AI
  const sendInitialWelcomeMessage = async (sessionId: string) => {
    if (welcomeSent) return; // Prevent duplicates
    
    const welcomeMessage = `Hi! 👋 I help businesses discover hidden income flows - those overlooked opportunities quietly adding to your bottom line.

What brings you here today? 🌿`;

    try {
      // Add welcome message to local state immediately
      const aiWelcomeMessage = {
        id: `welcome-${Date.now()}`,
        conversation_id: sessionId,
        sender_id: 'ai-system',
        text: welcomeMessage,
        type: 'ai' as const,
        created_at: new Date().toISOString()
      };
      setMessages(prev => [...prev, aiWelcomeMessage]);
      setWelcomeSent(true); // Mark as sent to prevent duplicates

      // Insert welcome message into database
      await supabase
        .from("messages")
        .insert([{
          conversation_id: sessionId,
          sender_id: "ai-system",
          text: welcomeMessage,
          type: "ai"
        }]);

    } catch (error) {
      console.error("Error sending welcome message:", error);
    }
  };

  const handleSend = async (text: string) => {
    if (!sessionId) return; // Wait for session to be initialized

    setIsSending(true);
    try {
      // Generate a guest user ID if no user is logged in
      const { data: { user } } = await supabase.auth.getUser();
      const senderId = user?.id || `guest-${Date.now()}`;

      // Add user message to local state immediately
      const userMessage = {
        id: `temp-${Date.now()}`,
        conversation_id: sessionId,
        sender_id: senderId,
        text: text,
        type: 'user' as const,
        created_at: new Date().toISOString()
      };
      setMessages(prev => [...prev, userMessage]);

      // Insert user message with session ID
      const { error: messageError } = await supabase
        .from("messages")
        .insert([{
          conversation_id: sessionId, // Use session ID instead of businessId
          sender_id: senderId,
          text: text,
          type: "user"
        }]);

      if (messageError) throw messageError;

      // Call AI function with conversation history for better context
      try {
        const response = await fetch("/api/chat/ai-response", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: text,
            conversation_id: sessionId, // Use session ID
            sender_id: senderId,
            business_name: businessId, // Pass business name for dashboard
            conversation_history: messages // Include full conversation history for AI context
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to get AI response");
        }

        const result = await response.json();

        // Add AI response to local state immediately
        if (result.reply) {
          const aiMessage = {
            id: `ai-${Date.now()}`,
            conversation_id: sessionId,
            sender_id: 'ai-system',
            text: result.reply,
            type: 'ai' as const,
            created_at: new Date().toISOString()
          };
          setMessages(prev => [...prev, aiMessage]);

        }

      } catch (aiError) {
        console.error("AI response error:", aiError);
        
        // Add fallback message to local state immediately
        const fallbackMessage = {
          id: `fallback-${Date.now()}`,
          conversation_id: sessionId,
          sender_id: 'ai-system',
          text: "Thanks for your message! We'll get back to you soon. In the meantime, feel free to browse our services or call us directly at +27 71 432 9190.",
          type: 'ai' as const,
          created_at: new Date().toISOString()
        };
        setMessages(prev => [...prev, fallbackMessage]);
        
        
        // Still insert into database for persistence
        await supabase
          .from("messages")
          .insert([{
            conversation_id: sessionId,
            sender_id: "ai-system",
            text: "Thanks for your message! We'll get back to you soon. In the meantime, feel free to browse our services or call us directly at +27 71 432 9190.",
            type: "ai"
          }]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSending(false);
    }
  };


  if (isLoading) {
    return (
      <div className="flex flex-col h-[75vh] bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200/50">
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center space-x-2 text-slate-500">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Loading chat...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[60vh] sm:h-[65vh] lg:h-[70vh] bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden border border-slate-200/50">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-200/50">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs sm:text-sm font-medium text-slate-700">
            Wabi-Sabi Support • Online
          </span>
        </div>
      </div>

      {/* Messages Area */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto px-2 py-4 bg-white"
      >
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-3 sm:px-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl">🌿</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Welcome to Wabi-Sabi Chat
            </h3>
            <p className="text-slate-700 text-xs sm:text-sm max-w-xs sm:max-w-sm">
              Ask us anything about revealing hidden income flows in your business. We're here to help!
            </p>
          </div>
        ) : (
          messages.map((msg, i) => (
            <div key={i}>
              <MessageBubble text={msg.text} sender={msg.type} />
                </div>
          ))
        )}
        
        {isSending && (
          <div className="flex justify-start mb-4 px-2">
            <div className="bg-slate-100 rounded-2xl rounded-bl-md px-4 py-3 border border-slate-200/50">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Message Input */}
      <MessageInput onSend={handleSend} initialMessage={initialMessage} />
    </div>
  );
}
