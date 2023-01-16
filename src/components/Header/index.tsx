import { CartContext } from '@/context/Cart';
import { ThemeContext } from '@/context/Theme';
import { UserContext } from '@/context/User';
import { cartCountFormater } from '@/helpers/cartCountFormater';
import { Cart4 as CartIcon } from '@styled-icons/bootstrap';
import { Menu as MenuIcon } from '@styled-icons/boxicons-regular';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Switch from 'react-switch';
import { CustomPopover } from '../CustomPopover';
import { Logo } from '../icons/Logo';
import { Moon } from '../icons/Moon';
import { Sun } from '../icons/Sun';
import { SearchInput } from '../SearchInput';
import {
  Box,
  CartButton,
  CategoriesWrapper,
  Container,
  ContentWrapper,
  LoginButton,
  LogoWrapper,
  MobileMenuWrapper,
  SearchWrapper,
  SwitchWrapper,
  Table,
} from './styles';

export function Header() {
  const { userRole, login } = useContext(UserContext);
  const { cartItems } = useContext(CartContext);
  const [categories, setCategories] = useState<string[]>([]);
  const [searchInputValue, setSearchInputValue] = useState('');
  const {
    toggleTheme,
    theme: { title },
  } = useContext(ThemeContext);
  const clickRef = useRef<HTMLUListElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch('https://dummyjson.com/products/categories');
      const categoriesData = await response.json();
      setCategories(categoriesData);
    };

    getCategories();
  }, []);

  return (
    <Container>
      <Box>
        <LogoWrapper>
          <a href="/">
            <Logo />
          </a>
        </LogoWrapper>

        <ContentWrapper>
          <CategoriesWrapper className="categories">
            <CustomPopover title="Categorias">
              {categories.map((name) => (
                <a key={name} href={name}>
                  {name}
                </a>
              ))}
            </CustomPopover>
          </CategoriesWrapper>

          <SearchWrapper className="search">
            <SearchInput
              value={searchInputValue}
              onChange={(e) => setSearchInputValue(e.target.value)}
              handleConfirm={() => navigate(`/search/${searchInputValue}`)}
              placeholder="Procurar"
            />
          </SearchWrapper>

          <SwitchWrapper className="switch">
            <Switch
              height={20}
              width={60}
              handleDiameter={30}
              onColor="#faf0c8"
              onChange={toggleTheme}
              checked={title === 'light'}
              checkedHandleIcon={<Sun />}
              uncheckedHandleIcon={<Moon />}
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </SwitchWrapper>

          <CartButton className="cart">
            <a href="/cart">
              <CartIcon title="Carrinho" size={30} />
              <span>{cartCountFormater(cartItems.length)}</span>
            </a>
          </CartButton>

          <LoginButton className="login">
            <CustomPopover
              title={userRole === 'client' ? 'Cliente' : 'Administrador'}
            >
              <a onClick={() => login('client')}>Cliente</a>
              <a onClick={() => login('adm')}>Administrador</a>
            </CustomPopover>
          </LoginButton>

          <MobileMenuWrapper className="menu">
            <button onClick={() => setIsMenuOpen((prev) => !prev)}>
              <MenuIcon title="Menu" />
            </button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.nav
                  key="menu"
                  transition={{ duration: 0.5, type: 'tween' }}
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  onClick={handleCloseMenu}
                >
                  <ul ref={clickRef} onClick={(e) => e.stopPropagation()}>
                    <li>
                      <a href="/login">Login</a>
                    </li>

                    <li>
                      <a href="/">Tela Inicial</a>
                    </li>
                    <li>
                      <a href="/cart">Carrinho</a>
                    </li>

                    <li>
                      Categorias
                      <Table>
                        {categories.map((category) => (
                          <a key={category} href={category}>
                            {category}
                          </a>
                        ))}
                      </Table>
                    </li>

                    <li>
                      <Switch
                        height={20}
                        width={60}
                        handleDiameter={30}
                        onColor="#ffcb05"
                        onChange={toggleTheme}
                        checked={title === 'light'}
                        checkedHandleIcon={<Sun />}
                        uncheckedHandleIcon={<Moon />}
                        checkedIcon={false}
                        uncheckedIcon={false}
                      />
                    </li>
                  </ul>
                </motion.nav>
              )}
            </AnimatePresence>
          </MobileMenuWrapper>
        </ContentWrapper>
      </Box>
    </Container>
  );
}
