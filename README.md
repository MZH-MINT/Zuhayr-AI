# Zuhayr AI - Modern AI Chatbot

A beautiful, modern AI chatbot web application built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## ✨ Features

### Design
- 🌙 **Dark futuristic UI** inspired by ChatGPT and Perplexity
- 💎 **Glassmorphism design** with backdrop blur effects
- 🎨 **Animated gradient background** for visual appeal
- 📱 **Fully responsive** - works perfectly on mobile, tablet, and desktop
- ✨ **Smooth animations** and transitions throughout
- 🎯 **Clean, modern interface** with rounded corners and elegant shadows

### Functionality
- 💬 **Real-time chat** with AI assistant
- ⌨️ **Smart input handling**:
  - `Enter` to send messages
  - `Shift+Enter` for new lines
  - Auto-resizing textarea
- 📝 **Markdown rendering** for AI responses
- 💻 **Syntax highlighting** for code blocks
- 📋 **Copy message** functionality
- ⏰ **Message timestamps**
- 🔄 **Typing indicators** while AI responds
- 🚫 **Input disabled** during API requests
- 📜 **Auto-scroll** to latest messages
- 🆕 **New chat** functionality

### UI Components
- **Sidebar** with logo, app title, and new chat button
- **Message bubbles** for user and AI with distinct styling
- **Chat input** with send button icon
- **Loading animations** and spinners
- **Welcome screen** with example prompts
- **Status indicators**

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Markdown**: react-markdown with remark-gfm
- **Code Highlighting**: react-syntax-highlighter

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design Features

### Color Scheme
- Dark background with animated gradient
- Blue-purple gradient accents
- Glassmorphism effects with transparency
- Subtle borders and shadows

### Animations
- Fade-in animations for messages
- Typing indicator with pulsing dots
- Smooth transitions on hover states
- Gradient animation on background
- Auto-resizing textarea

### Responsive Design
- Mobile-first approach
- Collapsible sidebar on mobile
- Optimized layouts for all screen sizes
- Touch-friendly interface

## 🔌 API Integration

The app connects to an AI API endpoint:
```
https://introductory-arnold-south-pam.trycloudflare.com/v1/chat/completions
```

### Request Format
```json
{
  "messages": [
    {
      "role": "user",
      "content": "Your message here"
    }
  ]
}
```

### Response Parsing
```javascript
const aiContent = data.choices[0].message.content;
```

## 📁 Project Structure

```
ai-chat-ui/
├── app/
│   ├── components/
│   │   ├── Sidebar.tsx          # Sidebar with logo and new chat
│   │   ├── MessageBubble.tsx    # Message display with markdown
│   │   ├── TypingIndicator.tsx  # Loading animation
│   │   └── ChatInput.tsx        # Input field with send button
│   ├── globals.css              # Custom styles and animations
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main chat page
├── package.json
└── README.md
```

## 🎯 Key Components

### Sidebar
- App logo with gradient
- "Zuhayr AI" branding
- New chat button
- Chat history placeholder
- Responsive mobile menu

### MessageBubble
- User and AI message differentiation
- Markdown rendering support
- Code block syntax highlighting
- Copy message functionality
- Timestamp display

### ChatInput
- Auto-resizing textarea
- Keyboard shortcuts
- Disabled state during loading
- Character count
- Send button with icons

### TypingIndicator
- Animated dots
- Glassmorphism styling
- AI avatar

## 🌟 Production Quality

- ✅ Clean, maintainable code
- ✅ TypeScript for type safety
- ✅ Reusable component structure
- ✅ Proper state management
- ✅ Error handling
- ✅ Responsive design
- ✅ Accessibility considerations
- ✅ Performance optimized

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using Next.js and modern web technologies
