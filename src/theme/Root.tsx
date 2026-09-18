import React from 'react';

import { AuthProvider } from '../contexts/AuthContext';
import ChatWidget from '../components/ChatWidget'; // Import the ChatWidget
import ErrorBoundary from '../components/ErrorBoundary';

// Default implementation, that you can customize
export default function Root({children}) {
  return (
    <AuthProvider>
      <ErrorBoundary>
        {children}
        <ChatWidget />
      </ErrorBoundary>
    </AuthProvider>
  );
}
