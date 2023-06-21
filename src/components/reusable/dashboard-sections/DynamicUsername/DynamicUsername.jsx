import React from 'react';

const WelcomeMessage = ({name}) => {
  return (
    <div>
      {name ? (
        <h1>Hello, {name}!</h1>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default WelcomeMessage;
