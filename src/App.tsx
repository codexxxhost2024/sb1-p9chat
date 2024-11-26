import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Message } from './components/Message';
import { ChatInput } from './components/ChatInput';
import { sendMessage } from './services/api';

interface Message {
  id: string;
  content: string;
  type: 'user' | 'assistant';
  thinking?: boolean;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [apiKey] = useState('3066136e648dcd681bc7e18824ef95c4b77945e3eb07548c935dac913094db44');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      type: 'user'
    };

    const thinkingMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: 'Thinking...',
      type: 'assistant',
      thinking: true
    };

    setMessages(prev => [...prev, userMessage, thinkingMessage]);
    setInput('');

    try {
      const data = await sendMessage(input, apiKey);
      
      setMessages(prev => [
        ...prev.slice(0, -1),
        {
          id: Date.now().toString(),
          content: data.choices[0].message.content,
          type: 'assistant'
        }
      ]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [
        ...prev.slice(0, -1),
        {
          id: Date.now().toString(),
          content: 'Sorry, there was an error processing your request.',
          type: 'assistant'
        }
      ]);
    }
  };

  return (
    <div className="flex h-screen bg-[#1E1F23] text-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-auto p-4 space-y-6">
          {messages.map(message => (
            <Message
              key={message.id}
              content={message.content}
              type={message.type}
              thinking={message.thinking}
            />
          ))}
        </div>
        <ChatInput
          input={input}
          setInput={setInput}
          handleSend={handleSend}
        />
      </div>
    </div>
  );
}

export default App;