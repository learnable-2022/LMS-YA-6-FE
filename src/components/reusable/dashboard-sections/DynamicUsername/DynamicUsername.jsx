import React from 'react';

const WelcomeMessage = ({name}) => {
  return (
    <div>
      {name ? (
        <h1 className="font-bold text-2xl mb-2 md:font-bold text-5xl mb-2">Hello {name}!</h1>
      ) : (
        <h1 className="font-bold text-2xl mb-2 md:font-bold text-5xl mb-2">Loading...</h1>
      )}
    </div>
  );
};

export default WelcomeMessage;