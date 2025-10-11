import ChatWindow from "@/components/chat/ChatWindow";
import { Metadata } from "next";

interface ChatPageProps {
  params: { businessSlug: string };
  searchParams?: { msg?: string };
}

export async function generateMetadata({ params }: ChatPageProps): Promise<Metadata> {
  const businessName = params.businessSlug.replace(/-/g, " ");
  
  return {
    title: `Chat with ${businessName} | Wabi-Sabi`,
    description: `Fast, friendly, and private chat with ${businessName}. No app store, no Meta - just direct communication.`,
  };
}

export default async function ChatPage({ params, searchParams }: ChatPageProps) {
  const { businessSlug } = params;
  const prefillMsg = searchParams?.msg || "";
  const businessName = businessSlug.replace(/-/g, " ");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-3 sm:p-6">
      {/* Header */}
      <div className="text-center mb-4 sm:mb-6 max-w-sm sm:max-w-md">
        <div className="mb-3">
          <span className="inline-flex items-center justify-center rounded-lg border border-amber-400/45 bg-gradient-to-r from-amber-600/18 via-amber-500/10 to-amber-400/4 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 shadow-sm backdrop-blur-sm">
            Wabi-Sabi Chat
          </span>
        </div>
        
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 font-sora">
          Chat with{" "}
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            {businessName}
          </span>
        </h1>
        
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          Fast, friendly, and private — no app store, no Meta.<br />
          <span className="text-amber-400 font-medium">Direct communication, wabi-sabi style.</span>
        </p>
      </div>

      {/* Chat Window */}
      <div className="w-full max-w-sm sm:max-w-lg lg:max-w-2xl">
        <ChatWindow businessId={businessSlug} />
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
          • Revealing hidden income flows
        </p>
      </div>

      {/* Pre-fill message script */}
      {prefillMsg && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', () => {
                setTimeout(() => {
                  const input = document.querySelector('input[placeholder*="Type your message"]');
                  if (input) {
                    input.value = decodeURIComponent("${encodeURIComponent(prefillMsg)}");
                    input.focus();
                  }
                }, 500);
              });
            `,
          }}
        />
      )}
    </div>
  );
}
