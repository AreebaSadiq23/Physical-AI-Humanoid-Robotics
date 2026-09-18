import React, { createContext, useContext, ReactNode, useState } from 'react';

// Define the shape of the user data
interface User {
  username: string;
  email: string;
}

// Define the shape of the AuthContext
interface AuthContextType {
  user: User | null;
  login: (username: string, email: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const defaultAuthContext: AuthContextType = {
  user: null,
  login: () => {},
  logout: () => {},
  isLoading: false,
};

// Create the AuthContext
const AuthContext = createContext<AuthContextType>(defaultAuthContext);

// AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Initialize state directly, ensuring window exists
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('loggedInUser');
      if (storedUser) {
        try {
          return JSON.parse(storedUser);
        } catch (error) {
          console.error("Failed to parse stored user data:", error);
          localStorage.removeItem('loggedInUser');
        }
      }
    }
    return null;
  });
  
  const [isLoading] = useState(false);

  const login = (username: string, email: string) => {
    const newUser: User = { username, email };
    setUser(newUser);
    if (typeof window !== 'undefined') {
      localStorage.setItem('loggedInUser', JSON.stringify(newUser));
    }
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('loggedInUser');
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
