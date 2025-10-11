import React from 'react';

interface PromptButtonsProps {
  prompts: string[];
  onPromptClick: (prompt: string) => void;
  disabled?: boolean;
}

export default function PromptButtons({ prompts, onPromptClick, disabled = false }: PromptButtonsProps) {
  if (!prompts || prompts.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-3 px-2">
      {prompts.slice(0, 4).map((prompt, index) => (
        <button
          key={index}
          onClick={() => onPromptClick(prompt)}
          disabled={disabled}
          className="bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed max-w-xs truncate"
          title={prompt}
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}
