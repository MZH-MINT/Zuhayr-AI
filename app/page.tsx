'use client';

import { useState, useRef, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MessageBubble from './components/MessageBubble';
import TypingIndicator from './components/TypingIndicator';
import ChatInput from './components/ChatInput';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleNewChat = () => {
    setMessages([]);
    setInputMessage('');
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date(),
    };

    // Add user message to chat
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('https://introductory-arnold-south-pam.trycloudflare.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'user',
              content: userMessage.content,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const aiContent = data.choices[0].message.content;

      const aiMessage: Message = {
        role: 'assistant',
        content: aiContent,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error while processing your request. Please try again.',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden animated-gradient">
      {/* Sidebar */}
      <Sidebar 
        onNewChat={handleNewChat}
        isMobileOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <div className="glass border-b border-white/10 backdrop-blur-xl sticky top-0 z-30">
          <div className="flex items-center justify-between p-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-base lg:text-lg font-semibold text-white">Chat with AI</h2>
                <p className="text-xs text-gray-400 hidden sm:block">Ask me anything</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Status indicator */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-xs text-gray-300">Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto custom-scrollbar px-4 py-6"
        >
          <div className="max-w-4xl mx-auto">
            {messages.length === 0 ? (
              // Welcome Screen
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center px-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/50 mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Welcome to Zuhayr AI
                </h1>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl">
                  Your intelligent AI assistant is here to help. Ask questions, get insights, or just have a conversation.
                </p>
                
                {/* Example prompts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
                  {[
                    { icon: '💡', text: 'Explain quantum computing', prompt: 'Explain quantum computing in simple terms' },
                    { icon: '🎨', text: 'Creative writing tips', prompt: 'Give me tips for creative writing' },
                    { icon: '💻', text: 'Code a function', prompt: 'Write a Python function to sort a list' },
                    { icon: '🌍', text: 'Learn about history', prompt: 'Tell me about ancient civilizations' },
                  ].map((example, index) => (
                    <button
                      key={index}
                      onClick={() => setInputMessage(example.prompt)}
                      className="p-4 rounded-xl glass border border-white/10 hover:border-white/30 transition-all duration-200 text-left group hover:scale-105"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{example.icon}</span>
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                          {example.text}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              // Messages
              <>
                {messages.map((message, index) => (
                  <MessageBubble key={index} message={message} />
                ))}
                {isLoading && <TypingIndicator />}
              </>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Chat Input */}
        <ChatInput
          message={inputMessage}
          setMessage={setInputMessage}
          onSend={sendMessage}
          disabled={isLoading}
        />
      </div>
    </div>
  );
}

            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
