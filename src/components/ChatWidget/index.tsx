import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './styles.module.css';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

interface SelectionButton {
  visible: boolean;
  top: number;
  left: number;
}

const WELCOME_MESSAGE: Message = { 
    text: "Hello! I am your AI assistant for the 'Physical AI & Humanoid Robotics' textbook. How can I help you?", 
    sender: 'bot' 
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  // Initialize with the welcome message
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedText, setSelectedText] = useState<string | null>(null);
  const [selectionButton, setSelectionButton] = useState<SelectionButton>({ visible: false, top: 0, left: 0 });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatInputRef = useRef<HTMLInputElement>(null);
  
  const lastRequestParams = useRef<{ query: string, context: string | null } | null>(null);

  const backendUrl = process.env.CHAT_BACKEND_URL || 'http://127.0.0.1:8000';

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => chatInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleTextSelection = useCallback(() => {
    const selection = window.getSelection();
    const text = selection?.toString().trim();
    if (text) {
      const range = selection?.getRangeAt(0);
      if (range) {
        const rect = range.getBoundingClientRect();
        setSelectionButton({
          visible: true,
          top: window.scrollY + rect.top - 40,
          left: window.scrollX + rect.left + (rect.width / 2) - 30,
        });
        setSelectedText(text);
      }
    } else {
      setSelectionButton({ visible: false, top: 0, left: 0 });
      setSelectedText(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mouseup', handleTextSelection);
    return () => {
      document.removeEventListener('mouseup', handleTextSelection);
    };
  }, [handleTextSelection]);

  const toggleChat = () => {
    setIsOpen(prev => !prev);
    setSelectionButton({ visible: false, top: 0, left: 0 });
  };

  const handleSendMessage = async (e?: React.FormEvent, queryOverride?: string, contextOverride?: string) => {
    if (e) e.preventDefault();
    const currentQuery = queryOverride || inputMessage;
    if (currentQuery.trim() === '') return;

    const context = contextOverride || selectedText;
    lastRequestParams.current = { query: currentQuery, context: context };

    const userMessage: Message = { text: currentQuery, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setError(null);
    setSelectedText(null);

    const botResponse: Message = { text: '', sender: 'bot' };
    setMessages(prev => [...prev, botResponse]);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      const response = await fetch(`${backendUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: currentQuery, selected_text: context }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      if (!response.body) throw new Error("Response body is null");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        const chunk = decoder.decode(value, { stream: !done });
        setMessages(prev => {
            const lastMessage = prev[prev.length - 1];
            if (lastMessage.sender === 'bot') {
                return [...prev.slice(0, -1), { ...lastMessage, text: lastMessage.text + chunk }];
            }
            return prev;
        });
      }
    } catch (error: any) {
      let errorMessage = 'Sorry, I am having trouble connecting to the backend.';
      if (error.name === 'AbortError') errorMessage = 'Request timed out.';
      else if (error.message.includes('fetch')) errorMessage = 'Cannot connect to backend server.';
      
      setError(errorMessage);
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  const retryLastRequest = () => {
    if (lastRequestParams.current) {
      handleSendMessage(undefined, lastRequestParams.current.query, lastRequestParams.current.context || undefined);
    }
  };

  const onAskAboutSelection = () => {
    setIsOpen(true);
    setSelectionButton({ visible: false, top: 0, left: 0 });
    setTimeout(() => chatInputRef.current?.focus(), 100);
  };

  return (
    <>
      {selectionButton.visible && (
        <button className={styles.selectionButton} style={{ top: `${selectionButton.top}px`, left: `${selectionButton.left}px` }} onClick={onAskAboutSelection}>
          Ask AI
        </button>
      )}

      <button className={styles.chatToggleButton} onClick={toggleChat} aria-label="Toggle chat" aria-expanded={isOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.chatIcon} aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity=".3"/><path d="M20.5 12c0 .35-.03.7-.08 1.04-.33-2.43-2.5-4.29-4.92-4.29-2.35 0-4.32 1.75-4.88 4.04A5.96 5.96 0 0010 11c-3.31 0-6 2.69-6 6h12.55c.57-1.12.9-2.34.9-3.64 0-.35-.03-.7-.08-1.04.33 2.43 2.5 4.29 4.92 4.29 2.35 0 4.32-1.75 4.88-4.04A5.96 5.96 0 0014 13c3.31 0 6-2.69 6-6H7.45c-.57 1.12-.9 2.34-.9 3.64zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
      </button>

      {isOpen && (
        <div className={styles.chatWindow} role="dialog" aria-labelledby="chat-title">
          <div className={styles.chatHeader}>
            <h3 id="chat-title">AI Assistant</h3>
            <button onClick={toggleChat} className={styles.closeButton} aria-label="Close chat">&times;</button>
          </div>
          <div className={styles.chatMessages} role="log" aria-live="polite">
            {messages.map((msg, index) => (
              <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
                <span className="sr-only">{msg.sender === 'user' ? 'You:' : 'Assistant:'}</span>
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className={`${styles.message} ${styles.bot} ${styles.loadingState}`}>
                <span className="sr-only">Assistant is thinking...</span>
                <div className={styles.loadingDots} aria-hidden="true">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            {error && (
              <div className={styles.errorMessage}>
                <p className={styles.errorText}>{error}</p>
                <button className={styles.retryButton} onClick={retryLastRequest}>Try Again</button>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSendMessage} className={styles.chatInputForm}>
            <label htmlFor="chat-input" className="sr-only">Type your question</label>
            <input
              id="chat-input"
              ref={chatInputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={selectedText ? 'Ask about selection...' : 'Type your question...'}
              className={styles.chatInput}
              disabled={isLoading}
            />
            <button type="submit" className={styles.sendButton} disabled={isLoading || inputMessage.trim() === ''} aria-label="Send message">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}