import ChatWindow from "@/components/chat/ChatWindow";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Chat with Wabi-Sabi Business | Wabi-Sabi`,
    description: `AI-powered chat with comprehensive knowledge about Wabi-Sabi services, components, and business solutions. Get detailed information about our investment levels, components, and approach.`,
  };
}

export default function WabiSabiBusinessChatPage() {
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
      <div className="w-full max-w-sm sm:max-w-lg lg:max-w-2xl">
        <ChatWindow businessId="wabi-sabi-business" />
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

      {/* Pre-fill message script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', () => {
              setTimeout(() => {
                const input = document.querySelector('input[placeholder*="Type your message"]');
                if (input) {
                  input.value = "Tell me about your services";
                  input.focus();
                }
              }, 500);
            });
          `,
        }}
      />
    </div>
  );
}
