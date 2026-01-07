import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const backendUrl = process.env.CHAT_BACKEND_URL || 'http://127.0.0.1:8000';

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  // Effect to set greeting and initialize the RAG pipeline
  useEffect(() => {
    if (isOpen) {
      // Immediately display greeting message
      setMessages([{ text: "Hello! I am your AI assistant. How can I help you today?", sender: 'bot' }]);
      
      // Initialize backend if not already done
      if (!isInitialized) {
        const initializeBackend = async () => {
          try {
            const response = await fetch(`${backendUrl}/initialize`, {
              method: 'POST',
            });
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            setIsInitialized(true);
          } catch (error) {
            console.error('Error initializing backend:', error);
            setMessages((prevMessages) => [...prevMessages, { text: 'Sorry, I could not connect to the backend. Please try again later.', sender: 'bot' }]);
          }
        };
        initializeBackend();
      }
    }
  }, [isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() === '' || !isInitialized) return;

    const userMessage: Message = { text: inputMessage, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(`${backendUrl}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const botMessage: Message = { text: data.reply, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        text: 'Sorry, I am having trouble connecting to the backend. Please try again later.',
        sender: 'bot',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button className={styles.chatToggleButton} onClick={toggleChat} aria-label="Toggle chat">
        {/* New Robotic Head Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.chatIcon}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity=".3"/>
          <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM8 11h8v2H8z"/>
          <circle cx="8.5" cy="10.5" r="1.5" />
          <circle cx="15.5" cy="10.5" r="1.5" />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h3>AI Chatbot</h3>
            <button onClick={toggleChat} className={styles.closeButton} aria-label="Close chat">&times;</button>
          </div>
          <div className={styles.chatMessages}>
            {messages.map((msg, index) => (
              <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className={`${styles.message} ${styles.bot}`}>
                <div className={styles.loadingDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSendMessage} className={styles.chatInputForm}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={isInitialized ? "Type your message..." : "Connecting to AI brain..."}
              className={styles.chatInput}
              disabled={isLoading || !isInitialized}
            />
            <button type="submit" className={styles.sendButton} disabled={isLoading || !isInitialized || inputMessage.trim() === ''} aria-label="Send message">
              {/* New Send Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}