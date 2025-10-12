"use client";
import ChatWindow from "@/components/chat/ChatWindow";

export default function WabiSabiBusinessChatPage() {
  const suggestedQuestions = [
    "Hidden value?",
    "Pricing?",
    "Book discovery?",
    "Automate operations?",
    "Training programs?"
  ];

  const handleSuggestedQuestion = (question: string) => {
    const input = document.querySelector('input[placeholder*="Type your message"]') as HTMLInputElement;
    if (input) {
      // Use the native setter to ensure React detects the change
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
      if (nativeInputValueSetter) {
        nativeInputValueSetter.call(input, question);
      } else {
        input.value = question;
      }

      input.focus();

      // Trigger events in the correct order
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));

      // Force React to re-render
      const forceUpdate = () => {
        input.dispatchEvent(new Event('input', { bubbles: true }));
      };
      setTimeout(forceUpdate, 0);
      setTimeout(forceUpdate, 10);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-3 sm:p-6">
      {/* Header */}
      <div className="text-center mb-4 sm:mb-6 max-w-sm sm:max-w-md">
        <div className="mb-3">
          <span className="inline-flex items-center justify-center rounded-lg border border-amber-400/45 bg-gradient-to-r from-amber-600/18 via-amber-500/10 to-amber-400/4 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 shadow-sm backdrop-blur-sm">
            Wabi-Sabi Business AI
          </span>
        </div>

        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 font-sora">
          Chat with{" "}
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Wabi-Sabi AI
          </span>
        </h1>

        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          Comprehensive AI assistant with deep knowledge of our services, components, and business solutions.
          <br />
          <span className="text-amber-400 font-medium">Revealing hidden value through conversation.</span>
        </p>
      </div>

      {/* Chat Window */}
      <div className="w-full max-w-lg sm:max-w-2xl lg:max-w-5xl">
        <ChatWindow businessId="wabi-sabi-business" />
      </div>

      {/* Separator */}
      <div className="w-full max-w-lg sm:max-w-2xl lg:max-w-5xl mt-6 mb-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-600/30 to-transparent"></div>
      </div>

      {/* Suggested Questions */}
      <div className="max-w-lg sm:max-w-2xl lg:max-w-5xl">
        <div className="flex flex-wrap gap-2 justify-center">
          {suggestedQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleSuggestedQuestion(question)}
              className="button text-xs"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 sm:mt-6 text-center">
        <p className="text-xs text-slate-400">
          Powered by{" "}
          <a
            href="/"
            className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
          >
            Wabi-Sabi
          </a>{" "}
          • AI Knowledge Base • Revealing hidden income flows
        </p>
      </div>

      {/* Pre-fill message script - only if no URL param */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', () => {
              const urlParams = new URLSearchParams(window.location.search);
              const hasMsgParam = urlParams.has('msg');
              if (!hasMsgParam) {
                setTimeout(() => {
                  const input = document.querySelector('input[placeholder*="Type your message"]');
                  if (input && !input.value.trim()) {
                    input.value = "Tell me about your services";
                    input.focus();
                    const event = new Event('input', { bubbles: true });
                    input.dispatchEvent(event);
                  }
                }, 500);
              }
            });
          `,
        }}
      />
    </div>
  );
}
