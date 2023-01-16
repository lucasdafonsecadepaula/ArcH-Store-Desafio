import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './context/Cart';
import { ProductsProvider } from './context/Products';
import { ContextThemeProvider } from './context/Theme';
import { UserProvider } from './context/User';
import { Router } from './router';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <ContextThemeProvider>
            <GlobalStyle />
            <Router />
            <ToastContainer />
          </ContextThemeProvider>
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  );
}
