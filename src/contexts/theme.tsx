import React, { createContext, useContext, useState } from 'react';
import { Theme } from '../templates/theme';

export type Themes = 'dark' | 'light';

type ThemeContextData = {
  currentTheme: Themes;
  handleChangeTheme: () => void;
};

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [selectTheme, setSelectTheme] = useState<Themes>('light');

  function handleChangeTheme() {
    if (selectTheme === 'light') {
      setSelectTheme('dark');
      return;
    }
    if (selectTheme === 'dark') {
      setSelectTheme('light');
      return;
    }
  }
  return (
    <ThemeContext.Provider
      value={{ currentTheme: selectTheme, handleChangeTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
