import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './styles.module.css';

// Defines the structure of a single chat message
interface Message {
  text: string;
  sender: 'user' | 'bot';
}

// Defines the structure for the button that appears on text selection
interface SelectionButton {
  visible: boolean;
  top: number;
  left: number;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedText, setSelectedText] = useState<string | null>(null);
  const [selectionButton, setSelectionButton] = useState<SelectionButton>({ visible: false, top: 0, left: 0 });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatInputRef = useRef<HTMLInputElement>(null);

  // Backend URL - ensure this is configured in your environment
  const backendUrl = 'http://127.0.0.1:8000';

  // --- Effect Hooks ---

  // Automatically scroll to the latest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Focus the input field when the chat opens
  useEffect(() => {
    if (isOpen) {
      // Add a small delay to ensure the element is rendered and focusable
      setTimeout(() => chatInputRef.current?.focus(), 100);
      setMessages([{ text: "Hello! I am your AI assistant for the 'Physical AI & Humanoid Robotics' textbook. How can I help you?", sender: 'bot' }]);
    }
  }, [isOpen]);

  // Logic for handling text selection to show the "Ask AI" button
  const handleTextSelection = useCallback(() => {
    const selection = window.getSelection();
    const text = selection.toString().trim();
    if (text) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setSelectionButton({
        visible: true,
        top: window.scrollY + rect.top - 40, // Position button above the selection
        left: window.scrollX + rect.left + (rect.width / 2) - 30, // Center the button
      });
      setSelectedText(text);
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


  // --- Core Functions ---

  const toggleChat = () => {
    setIsOpen(prev => !prev);
    setSelectionButton({ visible: false, top: 0, left: 0 }); // Hide selection button when toggling chat
  };

  // Handles the logic for sending a message to the backend and streaming the response
  const handleSendMessage = async (e: React.FormEvent, queryOverride?: string, contextOverride?: string) => {
    e.preventDefault();
    const currentQuery = queryOverride || inputMessage;
    if (currentQuery.trim() === '') return;

    const context = contextOverride || selectedText;

    // Add user message to the chat
    const userMessage: Message = { text: currentQuery, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setSelectedText(null); // Clear selected text after using it

    // Prepare the bot's response message object
    const botResponse: Message = { text: '', sender: 'bot' };
    setMessages(prev => [...prev, botResponse]);

    try {
      const response = await fetch(`${backendUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: currentQuery,
          selected_text: context,
        }),
      });

      if (!response.body) {
        throw new Error("Response body is null");
      }

      // Handle the streaming response
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        const chunk = decoder.decode(value, { stream: !done });
        
        // Update the last message (the bot's response) with the new chunk
        setMessages(prev => {
            const lastMessage = prev[prev.length - 1];
            if (lastMessage.sender === 'bot') {
                lastMessage.text += chunk;
                return [...prev.slice(0, -1), lastMessage];
            }
            return prev;
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        text: 'Sorry, I am having trouble connecting to the backend. Please try again later.',
        sender: 'bot',
      };
      setMessages(prev => [...prev.slice(0, -1), errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const onAskAboutSelection = (e: React.MouseEvent) => {
    setIsOpen(true);
    setSelectionButton({ visible: false, top: 0, left: 0 });
    setTimeout(() => {
        chatInputRef.current?.focus();
        // You can pre-fill the input or just open the chat for the user to type
        // setInputMessage(`What does "${selectedText}" mean?`); 
    }, 100);
  };

  // --- Render Method ---

  return (
    <>
      {/* "Ask AI" button that appears on text selection */}
      {selectionButton.visible && (
        <button
          className={styles.selectionButton}
          style={{ top: `${selectionButton.top}px`, left: `${selectionButton.left}px` }}
          onClick={onAskAboutSelection}
        >
          Ask AI
        </button>
      )}

      {/* Main chat toggle button */}
      <button className={styles.chatToggleButton} onClick={toggleChat} aria-label="Toggle chat">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.chatIcon}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity=".3"/>
          <path d="M20.5 12c0 .35-.03.7-.08 1.04-.33-2.43-2.5-4.29-4.92-4.29-2.35 0-4.32 1.75-4.88 4.04A5.96 5.96 0 0010 11c-3.31 0-6 2.69-6 6h12.55c.57-1.12.9-2.34.9-3.64 0-.35-.03-.7-.08-1.04.33 2.43 2.5 4.29 4.92 4.29 2.35 0 4.32-1.75 4.88-4.04A5.96 5.96 0 0014 13c3.31 0 6-2.69 6-6H7.45c-.57 1.12-.9 2.34-.9 3.64zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      </button>

      {/* The Chat Window */}
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h3>AI Assistant</h3>
            <button onClick={toggleChat} className={styles.closeButton} aria-label="Close chat">&times;</button>
          </div>
          <div className={styles.chatMessages}>
            {messages.map((msg, index) => (
              <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
                {msg.text}
              </div>
            ))}
            {isLoading && messages[messages.length - 1]?.sender === 'user' && (
              <div className={`${styles.message} ${styles.bot}`}>
                <div className={styles.loadingDots}>
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSendMessage} className={styles.chatInputForm}>
            <input
              ref={chatInputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={selectedText ? 'Ask about the selected text...' : 'Ask a question...'}
              className={styles.chatInput}
              disabled={isLoading}
            />
            <button type="submit" className={styles.sendButton} disabled={isLoading || inputMessage.trim() === ''} aria-label="Send message">
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