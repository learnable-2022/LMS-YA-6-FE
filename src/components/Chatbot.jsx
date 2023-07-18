import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Topbar from './reusable/dashboard-sections/Topbar';
// import ChatbotNav from './ChatbotNav';
// import eclipse from '../assets/Ellipse 32.jpg'
import book from '../assets/Layer 2.png'
import './Chatbot.css'

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [userName, setUserName] = useState('');


  const sendMessage = async () => {
    if (userInput.trim() === '') {
      return;
    }

    // Add user message to the chat history
    setChatHistory(prevHistory => [
      ...prevHistory,
      { message: userInput, sender: 'user' }
    ]);
    setUserInput('');


    try {
      // Send user message to the server
      const response = await axios.post('/api/chat', { userInput });
      
      // Add chatbot response to the chat history
      setChatHistory(prevHistory => [
        ...prevHistory,
        { message: response.data.response, sender: 'chatbot' }
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  useEffect(() => {
    // Display a default greeting message when the component mounts
    const defaultGreeting = `Hi ${getUserName()}, hope your day is going great. Ask me anything or share your feedback.`;
    setChatHistory([{ message: defaultGreeting, sender: 'chatbot' }]);
  }, []);

  // Helper function to get the user's name (replace with your own implementation)
  const getUserName = () => {
    return 'John'; // Replace with your logic to retrieve the user's name
  };


  useEffect(() => {
    // Retrieve the user's name when the component mounts
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

   // Save the user's name in local storage and state
   const saveUserName = () => {
    localStorage.setItem('userName', userName);
    setChatHistory(prevHistory => [
      ...prevHistory,
      { message: `Hi ${userName}, hope your day is going great. Ask me anything or share your feedback.`, sender: 'chatbot' }
    ]);
  };

  if (!userName) {
    return (
      <div>
        <input
          type="text"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <button onClick={saveUserName}>Save</button>
      </div>
    );
  }

  return (
    <div>
      <Topbar />
      {/* <div h-fit min-h-screen> */}
    <div className='flex  '>
    {/* <ChatbotNav studentRoute={''} /> */}
    <div className='purple-bg'>
        <div>
        {/* <img src={eclipse} alt="" className='Og-circle'/> */}
        <img src={book} alt="" className='Book-logo'/>
        </div>
        
        <div>
            <p>24/7 Support</p>
            <br />
            <p>I will help you with questions and problems in your courses</p>
        </div>
    </div>
    </div>

    <div className="chat-history">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`message ${chat.sender}`}>
            {chat.message}
          </div>
        ))}
      </div>
      <div className="user-input">
        <input
          type="text"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
};

export default Chatbot