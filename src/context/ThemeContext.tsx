import { createContext, useState, useEffect, ReactNode } from 'react';

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => { },
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.setAttribute('data-bs-theme', savedTheme);
    const themeIcon = document.getElementById('dl-ico');
    if (themeIcon) {
      themeIcon.classList.toggle('bi-sun-fill', savedTheme === 'dark');
      themeIcon.classList.toggle('bi-moon-fill', savedTheme === 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    const themeIcon = document.getElementById('dl-ico');
    if (themeIcon) {
      themeIcon.classList.toggle('bi-sun-fill', newTheme === 'dark');
      themeIcon.classList.toggle('bi-moon-fill', newTheme === 'light');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};