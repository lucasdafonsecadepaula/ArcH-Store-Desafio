import { dark } from '@/styles/themes/dark';
import { light } from '@/styles/themes/light';
import { createContext, useLayoutEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

export const ThemeContext = createContext({
  theme: light,
  toggleTheme: () => {},
});

type ThemeProviderProps = { children: React.ReactNode };

export function ContextThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(light);

  useLayoutEffect(() => {
    const localTheme = localStorage.theme;
    const userPrefersDark =
      window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme;

    if (userPrefersDark || localTheme === 'dark') {
      setTheme(dark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme.title === 'light' ? dark : light;
    const newThemeTitle = theme.title === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newThemeTitle);
  };

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
