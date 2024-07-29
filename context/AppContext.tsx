'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

type AppContextType = {
  currentSection: 'kids' | 'roma';
  setCurrentSection: (section: 'kids' | 'roma') => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentSection, setCurrentSection] = useState<'kids' | 'roma'>('kids');

  return (
    <AppContext.Provider value={{ currentSection, setCurrentSection }}>
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