import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Topbar from './reusable/dashboard-sections/Topbar';
import book from '../assets/Layer 2.png';
import './Chatbot.css';
import { GrAttachment} from "react-icons/gr"
import { BsSendFill } from "react-icons/bs"


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

  const generateChatbotResponse = (userInput, userName) => {
    const intents = {
      greeting: [`Hi ${userName}, hope your day is going great. Ask me anything or share your feedback.`],
      goodbye: ['Goodbye!', 'See you later!', 'Have a great day!'],
      // Add more intents and responses as needed
    };

    // Determine the intent based on the user input (Update this logic as per your requirement)
    const intent = userInput.includes('hello') ? 'greeting' : 'question';

    // Check if the intent exists and has responses
    if (intent && intents[intent] && intents[intent].length > 0) {
      const responses = intents[intent];
      const randomIndex = Math.floor(Math.random() * responses.length);
      return responses[randomIndex];
    }

    // Default response if no valid intent is matched
    return `I'm sorry, ${userName}, but I didn't understand that.`;
  };

  useEffect(() => {
    const fetchUsername = async () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        // Make the API call to fetch the user's name
        const response = await axios.get('/api/user/profile', config);
        const { data } = response;
        const fullName = data.data.fullname;

        // Set the user's name in the state
        setUserName(fullName);

        // Generate the initial chatbot response
        const initialResponse = generateChatbotResponse('', fullName);

        // Update the chat history with the initial chatbot response
        setChatHistory(prevHistory => [
          ...prevHistory,
          { message: initialResponse, sender: 'chatbot' }
        ]);
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };

    fetchUsername();
  }, []);

  return (
    <div>
      <Topbar />
      <div className="flex">
        <div className="purple-bg">
          <div>
            <img src={book} alt="" className="Book-logo" />
          </div>

          <div>
            <p>24/7 Support</p>
            <br />
            <p>I will help you with questions and problems in your courses</p>
          </div>
        </div>
      </div>

      <div className="chat-history">
        <p>Welcome, {userName}</p>
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
          placeholder='Write a reply or ask a question.'
          onChange={e => setUserInput(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && sendMessage()}
        />
          <div className='icon-cont'>
            <GrAttachment  className='input-icons'/>
            <BsSendFill 
          onClick={sendMessage}
          className='input-icons'
          />
          </div>
      </div>
    </div>
  );
};

export default Chatbot;
