import { useEffect, useState } from 'react';
import DarkModeContext, { DarkModeType } from './DarkModeContext';

export const DarkMode = ({ children }) => {
  const isBrowserDefaultDark = () => {
    if (typeof window === 'undefined') {
      return false;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ?? false;
  };

  const [theme, setTheme] = useState<DarkModeType>('dark');

  useEffect(() => {
    const storedTheme = window.sessionStorage.getItem(
      'vortex_theme'
    ) as DarkModeType;
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme(isBrowserDefaultDark() ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      window.sessionStorage.setItem('vortex_theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      window.sessionStorage.setItem('vortex_theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <DarkModeContext.Provider value={{ theme, setTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};
