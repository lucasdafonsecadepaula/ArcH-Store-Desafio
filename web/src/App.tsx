import { ContextThemeProvider } from './context/ThemeProvider';
import { Router } from './router';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ContextThemeProvider>
      <GlobalStyle />
      <Router />
    </ContextThemeProvider>
  );
}
