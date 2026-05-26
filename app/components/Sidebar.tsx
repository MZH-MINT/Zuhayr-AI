'use client';

import React from 'react';

interface SidebarProps {
  onNewChat: () => void;
  isMobileOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ onNewChat, isMobileOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 lg:w-72 h-screen
        glass border-r border-white/10
        flex flex-col
        transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3 mb-6">
            {/* Logo */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Zuhayr AI</h1>
              <p className="text-xs text-gray-400">Your AI Assistant</p>
            </div>
          </div>
          
          {/* New Chat Button */}
          <button
            onClick={() => {
              onNewChat();
              onClose();
            }}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 flex items-center justify-center gap-2 group"
          >
            <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Chat
          </button>
        </div>
        
        {/* Chat History (placeholder for now) */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
          <div className="space-y-2">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
              Today
            </div>
            <div className="p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer text-sm text-gray-300">
              <p className="truncate">Current conversation</p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-white/10">
          <div className="text-xs text-gray-500 text-center">
            Powered by AI • v1.0
          </div>
        </div>
      </div>
    </>
  );
}
