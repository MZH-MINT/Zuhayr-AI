'use client';

import React, { KeyboardEvent, useRef, useEffect } from 'react';

interface ChatInputProps {
  message: string;
  setMessage: (message: string) => void;
  onSend: () => void;
  disabled: boolean;
}

export default function ChatInput({ message, setMessage, onSend, disabled }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 200) + 'px';
    }
  }, [message]);

  // Focus on mount
  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // Enter sends message, Shift+Enter creates new line
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (message.trim() && !disabled) {
        onSend();
      }
    }
  };

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSend();
    }
  };

  return (
    <div className="sticky bottom-0 left-0 right-0 border-t border-white/10 glass backdrop-blur-xl">
      <div className="max-w-4xl mx-auto p-4">
        <div className="relative flex items-end gap-3">
          {/* Textarea */}
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={disabled}
              placeholder={disabled ? "AI is thinking..." : "Type your message... (Shift+Enter for new line)"}
              rows={1}
              className="w-full px-4 py-3 pr-12 rounded-2xl glass border border-white/20 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-400 resize-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed custom-scrollbar"
              style={{ maxHeight: '200px' }}
            />
            
            {/* Character count (optional) */}
            {message.length > 0 && (
              <div className="absolute bottom-2 right-2 text-xs text-gray-500">
                {message.length}
              </div>
            )}
          </div>

          {/* Send Button */}
          <button
            onClick={handleSend}
            disabled={!message.trim() || disabled}
            className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 disabled:shadow-none flex items-center justify-center group"
            title="Send message"
          >
            {disabled ? (
              <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            ) : (
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Helper text */}
        <div className="text-xs text-gray-500 mt-2 text-center">
          Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/20">Enter</kbd> to send, <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/20">Shift+Enter</kbd> for new line
        </div>
      </div>
    </div>
  );
}
