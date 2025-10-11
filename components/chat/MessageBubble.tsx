import React, { useState } from "react";
import { Copy, ThumbsUp, ThumbsDown } from "lucide-react";

// Simple markdown parser for chat messages
function parseMarkdown(text: string): React.ReactNode[] {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];

  lines.forEach((line, index) => {
    // Handle bullet points
    if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      elements.push(
        <div key={index} className="flex ml-4">
          <span className="text-amber-600 font-bold mr-2">•</span>
          <span className="text-slate-800">{parseInlineMarkdown(line.trim().substring(2))}</span>
        </div>
      );
    }
    // Handle numbered lists
    else if (/^\d+\.\s/.test(line.trim())) {
      const match = line.trim().match(/^(\d+)\.\s(.*)$/);
      if (match) {
        elements.push(
          <div key={index} className="flex ml-4">
            <span className="text-amber-600 font-bold mr-2">{match[1]}.</span>
            <span className="text-slate-800">{parseInlineMarkdown(match[2])}</span>
          </div>
        );
      }
    }
    // Handle empty lines
    else if (line.trim() === '') {
      elements.push(<br key={index} />);
    }
    // Handle regular paragraphs
    else {
      elements.push(
        <p key={index} className="mb-2 last:mb-0 text-slate-800">
          {parseInlineMarkdown(line)}
        </p>
      );
    }
  });

  return elements;
}

// Parse inline markdown (bold, italic, code)
function parseInlineMarkdown(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let currentIndex = 0;
  let key = 0;

  // Define patterns with their priorities (more specific patterns first)
  const patterns = [
    // Phone numbers
    { regex: /(\+27\s?\d{2}\s?\d{3}\s?\d{4})/g, render: (phone: string) => <span key={key++} className="text-amber-600 font-semibold">{phone}</span> },
    // Email addresses
    { regex: /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g, render: (email: string) => <span key={key++} className="text-amber-600 font-semibold">{email}</span> },
    // Prices
    { regex: /(R\d+(?:,\d{3})*(?:\.\d{2})?(?:k\+?)?)/g, render: (price: string) => <span key={key++} className="text-green-700 font-bold">{price}</span> },
    // Code blocks
    { regex: /`([^`]+)`/g, render: (code: string) => <code key={key++} className="bg-slate-300 text-slate-800 px-1 py-0.5 rounded text-xs font-mono">{code}</code> },
    // Bold text (double asterisk)
    { regex: /\*\*([^*\n]+?)\*\*/g, render: (bold: string) => <strong key={key++} className="font-bold text-slate-900">{bold}</strong> },
    // Bold text (double underscore)
    { regex: /__([^_\n]+?)__/g, render: (bold: string) => <strong key={key++} className="font-bold text-slate-900">{bold}</strong> },
    // Italic text (single asterisk)
    { regex: /\*([^*\n]+?)\*/g, render: (italic: string) => <em key={key++} className="italic text-slate-700">{italic}</em> },
    // Italic text (single underscore)
    { regex: /_([^_\n]+?)_/g, render: (italic: string) => <em key={key++} className="italic text-slate-700">{italic}</em> },
  ];

  // Find all matches with their positions
  const allMatches: Array<{ index: number, length: number, replacement: React.ReactNode }> = [];

  patterns.forEach(({ regex, render }) => {
    let match;
    // Reset regex lastIndex for each pattern
    regex.lastIndex = 0;
    while ((match = regex.exec(text)) !== null) {
      const matchIndex = match.index;
      const matchLength = match[0].length;
      const captureGroup = match[1] || match[0]; // Use first capture group or full match

      allMatches.push({
        index: matchIndex,
        length: matchLength,
        replacement: render(captureGroup)
      });
    }
  });

  // Sort matches by position
  allMatches.sort((a, b) => a.index - b.index);

  // Remove overlapping matches (keep the first one)
  const filteredMatches: typeof allMatches = [];
  let lastEnd = -1;

  for (const match of allMatches) {
    if (match.index >= lastEnd) {
      filteredMatches.push(match);
      lastEnd = match.index + match.length;
    }
  }

  // Build the result
  filteredMatches.forEach(({ index, length, replacement }) => {
    // Add text before this match
    if (index > currentIndex) {
      const beforeText = text.slice(currentIndex, index);
      if (beforeText) {
        parts.push(beforeText);
      }
    }
    // Add the replacement
    parts.push(replacement);
    currentIndex = index + length;
  });

  // Add remaining text
  if (currentIndex < text.length) {
    const remainingText = text.slice(currentIndex);
    if (remainingText) {
      parts.push(remainingText);
    }
  }

  return parts.length > 0 ? parts : [text];
}

export default function MessageBubble({
  text,
  sender,
}: {
  text: string;
  sender: "user" | "ai";
}) {
  const isUser = sender === "user";
  const [isHovered, setIsHovered] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState<'like' | 'dislike' | null>(null);

  const handleCopy = async () => {
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        textArea.style.top = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          const successful = document.execCommand('copy');
          if (!successful) {
            throw new Error('Fallback copy failed');
          }
        } finally {
          document.body.removeChild(textArea);
        }
      }

      // Show success feedback
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);

    } catch (err) {
      console.error('Failed to copy text:', err);
      // Could add error feedback here if needed
      alert('Failed to copy text. Please try again.');
    }
  };

  const handleLike = () => {
    if (feedbackGiven) return; // Already gave feedback
    
    setFeedbackGiven('like');
    // TODO: Send like to database
    console.log('Liked message:', text.substring(0, 50) + '...');
  };

  const handleDislike = () => {
    if (feedbackGiven) return; // Already gave feedback
    
    setFeedbackGiven('dislike');
    // TODO: Send dislike to database
    console.log('Disliked message:', text.substring(0, 50) + '...');
  };

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3 px-2 relative group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-3 py-2 text-xs sm:text-sm shadow-md transition-all duration-200 relative ${
          isUser
            ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-br-md shadow-amber-500/25"
            : "bg-slate-50 text-slate-900 rounded-bl-md border border-slate-200 shadow-slate-200/50"
        }`}
      >
        <div className="leading-relaxed">
          {parseMarkdown(text)}
        </div>

        {/* Interactive buttons for AI messages */}
        {!isUser && (
          <div className={`absolute -bottom-2 right-2 flex items-center space-x-2 transition-all duration-200 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
            {/* Copy button */}
            <button
              onClick={handleCopy}
              disabled={copySuccess}
              className={`relative z-10 p-1.5 rounded-full transition-all duration-200 shadow-sm ${
                copySuccess
                  ? 'bg-green-500 text-white scale-110'
                  : 'bg-slate-200 hover:bg-slate-300 text-slate-600 hover:text-slate-800 hover:scale-110'
              }`}
              title={copySuccess ? "Copied!" : "Copy message"}
            >
              <Copy className={`w-3 h-3 transition-transform duration-200 ${copySuccess ? 'scale-110' : ''}`} />
            </button>

            {/* Like button */}
            <button
              onClick={handleLike}
              disabled={!!feedbackGiven}
              className={`relative z-10 p-1.5 rounded-full transition-all duration-200 shadow-sm ${
                feedbackGiven === 'like'
                  ? 'bg-green-500 text-white scale-110'
                  : feedbackGiven === 'dislike'
                  ? 'bg-slate-300 text-slate-400 cursor-not-allowed opacity-50'
                  : 'bg-slate-200 hover:bg-green-500 text-slate-600 hover:text-white hover:scale-110'
              }`}
              title={feedbackGiven === 'like' ? "Liked!" : feedbackGiven ? "Feedback given" : "Like message"}
            >
              <ThumbsUp className={`w-3 h-3 transition-transform duration-200 ${
                feedbackGiven === 'like' ? 'scale-110' : ''
              }`} />
            </button>

            {/* Dislike button */}
            <button
              onClick={handleDislike}
              disabled={!!feedbackGiven}
              className={`relative z-10 p-1.5 rounded-full transition-all duration-200 shadow-sm ${
                feedbackGiven === 'dislike'
                  ? 'bg-red-500 text-white scale-110'
                  : feedbackGiven === 'like'
                  ? 'bg-slate-300 text-slate-400 cursor-not-allowed opacity-50'
                  : 'bg-slate-200 hover:bg-red-500 text-slate-600 hover:text-white hover:scale-110'
              }`}
              title={feedbackGiven === 'dislike' ? "Disliked" : feedbackGiven ? "Feedback given" : "Dislike message"}
            >
              <ThumbsDown className={`w-3 h-3 transition-transform duration-200 ${
                feedbackGiven === 'dislike' ? 'scale-110' : ''
              }`} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
