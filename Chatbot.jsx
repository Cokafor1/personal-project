// Chatbot.jsx
import React, { useState } from 'react';
import './Chatbot.css'; // Ensure you have styles for the chatbot

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, fromUser: true }]);
      setInput('');
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-toggle" onClick={toggleChatbot}>
        Chat with me!
      </div>

      {isOpen && (
        <div className="chatbot">
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={message.fromUser ? 'user-message' : 'bot-message'}
              >
                {message.text}
              </div>
            ))}
          </div>

          <form className="chatbot-input-area" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
