import dark from '@/styles/themes/dark';
import light from '@/styles/themes/light';
import { createContext, useLayoutEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

export const ContextTheme = createContext({});

export function ContextThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState(light);

  useLayoutEffect(() => {
    const localTheme = localStorage.theme;

    if (
      (!localTheme &&
        window.matchMedia('(prefers-color-scheme: dark)').matches) ||
      localTheme === 'dark'
    ) {
      setTheme(dark);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <ContextTheme.Provider value={{ theme, toggleTheme }}>
        {children}
      </ContextTheme.Provider>
    </ThemeProvider>
  );
}
