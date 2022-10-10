import { createContext } from 'react';

export type DarkModeType = 'light' | 'dark' | 'auto';

const DarkModeContext = createContext({
  theme: 'light' as DarkModeType,
  setTheme: (theme: DarkModeType) => {
    return;
  },
});

DarkModeContext.displayName = 'DarkModeContext';

export default DarkModeContext;
