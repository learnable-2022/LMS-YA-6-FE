const express = require('express');
const app = express();

// Define an API route for the chatbot
app.post('/api/chat', (req, res) => {
  // Handle the user input and generate a chatbot response
  const userInput = req.body.userInput;
  const response = generateChatbotResponse(userInput);

  // Send the chatbot response back to the client
  res.json({ response });
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

// Helper function to generate a chatbot response
function generateChatbotResponse(userInput) {
    // Define your intents and responses
    const intents = {
      greeting: ['Hi there!', 'Hello!', 'Nice to meet you!'],
      goodbye: ['Goodbye!', 'See you later!', 'Have a great day!'],
      // Add more intents and responses as needed
    };
  
    // Preprocess the user input if necessary
    const processedInput = userInput.toLowerCase();
  
    // Determine the intent based on the user input
    let intent = null;
    if (processedInput.includes('hello') || processedInput.includes('hi')) {
      intent = 'greeting';
    } else if (processedInput.includes('goodbye') || processedInput.includes('bye')) {
      intent = 'goodbye';
    }
    // Add more conditionals to match other intents
  
    // Select a random response from the matched intent
    if (intent) {
      const responses = intents[intent];
      const randomIndex = Math.floor(Math.random() * responses.length);
      return responses[randomIndex];
    }
  
    // Default response if no intent is matched
    return "I'm sorry, but I didn't understand that.";
  }
  
