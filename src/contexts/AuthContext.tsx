import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

// Define the shape of the user data
interface User {
  username: string;
  email: string;
  // Add other user-related fields as needed
}

// Define the shape of the AuthContext
interface AuthContextType {
  user: User | null;
  login: (username: string, email: string) => void;
  logout: () => void;
  isLoading: boolean;
}

// Create the AuthContext with a default null value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Attempt to load user from localStorage on initial render
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse stored user data:", error);
        localStorage.removeItem('loggedInUser'); // Clear invalid data
      }
    }
    setIsLoading(false);
  }, []);

  const login = (username: string, email: string) => {
    const newUser: User = { username, email };
    setUser(newUser);
    localStorage.setItem('loggedInUser', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('loggedInUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
