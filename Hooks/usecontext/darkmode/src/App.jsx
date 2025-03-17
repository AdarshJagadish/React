import React, { useContext, useState } from 'react';
import './App.css'

// Step 1: Create a context
const ThemeContext = React.createContext();

// Step 2: Create a provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Step 3: Use the context in a child component
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={
        {
          backgroundColor: theme === 'light' ? '#fff' : '#333',
          color: theme === 'light' ? '#000' : '#fff',
        }}
    >
      Toggle Theme ({theme})
    </button>
  );
}

function Para() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <p style={{
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff'
    }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corporis assumenda sed? Fugiat iste placeat consequatur at tempora vero aliquid magni, quas odit reprehenderit illo explicabo eos, totam minus tenetur.
    </p>
  )
}

// Step 4: Wrap the app with the provider
function App() {
  return (
    <ThemeProvider>
      <ThemedButton />
      <Para/>
    </ThemeProvider>
  );
}

export default App;
