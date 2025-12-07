import React from 'react';
import ChatWidget from '../theme/ChatWidget'; // Adjust path as necessary

// Default implementation, that you can customize
export default function Root({children}) {
  return (
    <>
      {children}
      <ChatWidget />
    </>
  );
}