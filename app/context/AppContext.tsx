'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  phoneNumber: string;
}

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  notifications: string[];
  addNotification: (notification: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [notifications, setNotifications] = useState<string[]>([]);

  const addNotification = (notification: string) => {
    setNotifications((prev) => [...prev, notification]);
  };

  return (
    <AppContext.Provider value={{ user, setUser, notifications, addNotification }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}