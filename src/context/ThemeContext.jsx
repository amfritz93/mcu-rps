/**
 * Theme Context
 *
 * Simple context for managing light/dark mode theme
 * Persists theme preference to localStorage
 *
 * This is a beginner-friendly Context implementation that:
 * 1. Provides theme state to all components
 * 2. Saves theme preference to localStorage
 * 3. Loads theme preference on app start
 */

import { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const ThemeContext = createContext();

// Custom hook to use the theme context
// This makes it easier to access theme in any component
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Theme Provider Component
export function ThemeProvider({ children }) {
  // Initialize theme from localStorage or default to light mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark';
    } catch (error) {
      console.error('Error loading theme from localStorage:', error);
      return false; // Default to light mode on error
    }
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    } catch (error) {
      console.error('Error saving theme to localStorage:', error);
    }
  }, [isDarkMode]);

  // Toggle function to switch between themes
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Value object that will be provided to all children
  const value = {
    isDarkMode,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
