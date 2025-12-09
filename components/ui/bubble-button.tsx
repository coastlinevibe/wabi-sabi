'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface BubbleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bgColor?: string;
}

export function BubbleButton({
  children,
  className,
  bgColor = '#ff6600',
  ...props
}: BubbleButtonProps) {
  return (
    <button
      className={cn(
        'bubble-button relative px-6 py-2 rounded-md border-none text-white cursor-pointer transition-all duration-200 ease-out hover:scale-105 active:scale-95',
        className,
      )}
      style={
        {
          '--bubble-color': bgColor,
          backgroundColor: bgColor,
        } as React.CSSProperties & { '--bubble-color': string }
      }
      {...props}
    >
      {children}
    </button>
  );
}
