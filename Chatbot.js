import React, { useState } from 'react';
import './Chatbot.css'; // Ensure you have styles for your chatbot

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(true); // State to manage chatbot visibility

  const handleSend = () => {
    if (input.trim() === '') return; // Don't send empty messages

    // Add user message to the chat
    setMessages((prevMessages) => [...prevMessages, { sender: 'User', text: input }]);

    // Generate a bot response
    let botResponse = "I'm not sure how to respond to that.";
    
    // Simple response logic
    if (input.toLowerCase().includes('hello') || input.toLowerCase().includes('hi')) {
      botResponse = "Hello! How can I help you today?";
    } else if (input.toLowerCase().includes('how are you')) {
      botResponse = "I'm just a program, but thanks for asking!";
    } else if (input.toLowerCase().includes('help')) {
      botResponse = "I'm here to help! What do you need assistance with?";
    } 
    // You can add more conditions for different responses

    // Add bot response to the chat after a delay for realism
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { sender: 'Bot', text: botResponse }]);
    }, 1000); // 1 second delay

    // Clear the input
    setInput('');
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen); // Toggle the visibility of the chatbot
  };

  return (
    <div className="chatbot">
      <button onClick={toggleChatbot} className="toggle-chatbot">
        {isOpen ? 'Close Chatbot' : 'Open Chatbot'}
      </button>
      {isOpen && (
        <div className="chat-window">
          {messages.map((message, index) => (
            <div key={index} className={message.sender === 'User' ? 'user-message' : 'bot-message'}>
              <strong>{message.sender}: </strong>{message.text}
            </div>
          ))}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()} // Send message on Enter key
          />
          <button onClick={handleSend}>Send</button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
