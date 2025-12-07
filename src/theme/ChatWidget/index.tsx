import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatWindowRef = React.useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const newUserMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInput('');

    // Simulate API call
    try {
      const response = await fetch('http://localhost:8000/chat', { // Assuming backend runs on 8000
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: input }),
      });

      if (!response.ok) {
        // Handle HTTP errors (e.g., 404, 500 from FastAPI)
        let errorDetails = `HTTP error! Status: ${response.status}`;
        try {
          const errorData = await response.json();
          errorDetails += ` - Details: ${JSON.stringify(errorData)}`;
        } catch (jsonError) {
          errorDetails += ` - No JSON error data.`;
        }
        console.error('Chatbot API HTTP error:', errorDetails);
        const errorMessage = { sender: 'bot', text: `Error from server: ${response.status} ${response.statusText}. Please ensure the backend is running and check its logs.` };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
        return;
      }

      const data = await response.json();
      const botResponse = { sender: 'bot', text: data.response || "I'm sorry, I couldn't process that. Please try again." };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    } catch (error) {
      console.error('Chatbot API request failed:', error); // Network errors, JSON parsing errors
      const errorMessage = { sender: 'bot', text: "Oops! Could not connect to the AI assistant. Please ensure the backend server is running correctly." };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Scroll to bottom of chat window when new messages arrive
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={styles.chatWidgetContainer}>
      <button className={clsx(styles.chatToggleButton, { [styles.chatToggleButtonOpen]: isOpen })} onClick={toggleChat}>
        {/* Placeholder for robotic AI icon */}
        🤖
      </button>

      <div className={clsx(styles.chatWindow, { [styles.chatWindowOpen]: isOpen })}>
        <div className={styles.chatHeader}>
          <span>AI Assistant</span>
          <button onClick={toggleChat} className={styles.chatCloseButton}>×</button>
        </div>
        <div className={styles.chatMessages} ref={chatWindowRef}>
          {messages.length === 0 && (
            <div className={styles.chatWelcome}>
              <p>Hello! I'm your AI assistant. How can I help you with this textbook?</p>
            </div>
          )}
          {messages.map((msg, index) => (
            <div key={index} className={clsx(styles.chatMessage, styles[msg.sender])}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className={styles.chatInputContainer}>
          <input
            type="text"
            className={styles.chatInput}
            placeholder="Ask me about the textbook..."
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button className={styles.chatSendButton} onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatWidget;
