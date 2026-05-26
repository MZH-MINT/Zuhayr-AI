# Zuhayr AI 🤖

A modern AI chatbot web app powered by:

* Next.js
* Tailwind CSS
* llama.cpp
* Mistral 7B
* Cloudflare Tunnel
* RTX 4050 Local Inference

---

## Features

* ✨ Modern responsive chatbot UI
* 🖥️ Local AI inference using llama.cpp
* ⚡ GPU acceleration with CUDA
* 🌐 Public AI API using Cloudflare Tunnel
* 🔌 OpenAI-compatible backend API
* 🚀 Fast local responses
* 💰 Free hosting frontend with Vercel
* 🔒 Privacy-focused self-hosted AI

---

## Tech Stack

**Frontend:**

* Next.js 16
* React 19
* Tailwind CSS 4
* TypeScript
* React Markdown

**Backend:**

* llama.cpp
* Mistral 7B GGUF
* CUDA
* Cloudflare Tunnel

---

## Requirements

* Windows 11
* NVIDIA GPU (RTX recommended)
* CUDA Toolkit installed
* Node.js 20+
* Git
* llama.cpp compiled with CUDA

---

## Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/MZH-MINT/Zuhayr-AI.git
cd Zuhayr-AI
```

---

### 2. Install Frontend Dependencies

```bash
npm install
```

---

### 3. Start Frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:3000
```

---

## AI Backend Setup

### 1. Build llama.cpp with CUDA

```bash
cmake -B build -DGGML_CUDA=ON
cmake --build build --config Release
```

---

### 2. Download Model

Recommended model:

```text
Mistral-7B-Instruct-v0.3-Q4_K_M.gguf
```

Place model inside:

```text
D:\Model AI\
```

---

### 3. Start llama.cpp Server

```powershell
.\build\bin\Release\llama-server.exe -m "D:\Model AI\Mistral-7B-Instruct-v0.3-Q4_K_M.gguf" -ngl 999 --host 0.0.0.0
```

Server runs on:

```text
http://localhost:8080
```

---

## Public Access with Cloudflare Tunnel

### 1. Download cloudflared

https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/

---

### 2. Start Tunnel

```powershell
.\cloudflared.exe tunnel --url http://localhost:8080
```

Example public URL:

```text
https://your-url.trycloudflare.com
```

---

## API Endpoint

```text
POST /v1/chat/completions
```

Example request:

```json
{
  "messages": [
    {
      "role": "user",
      "content": "Hello"
    }
  ]
}
```

---

## Vercel Deployment

### Install Vercel CLI

```bash
npm install -g vercel
```

---

### Deploy

```bash
vercel
```

---

## Important Notes

* Keep llama-server running
* Keep cloudflared running
* Laptop must remain powered on for inference
* RTX 4050 performs AI inference locally

---

## Future Improvements

* Chat history
* Authentication
* Persistent conversations
* Streaming responses
* Voice AI
* Custom domains
* User accounts
* Mobile app

---

## Project Structure

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

---

## License

MIT License

---

**Built with ❤️ using Next.js and modern web technologies**
