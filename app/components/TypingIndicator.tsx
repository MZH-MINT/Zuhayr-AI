'use client';

import React from 'react';

export default function TypingIndicator() {
  return (
    <div className="fade-in flex justify-start mb-6">
      <div className="flex gap-3 max-w-[85%] sm:max-w-[75%]">
        {/* Avatar */}
        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center glass border border-white/10">
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        {/* Typing Animation */}
        <div className="rounded-2xl px-4 py-3 glass border border-white/10 shadow-lg shadow-black/20">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-gray-400 typing-dot"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400 typing-dot"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400 typing-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
