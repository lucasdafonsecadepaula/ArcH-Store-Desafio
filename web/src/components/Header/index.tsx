import { ContextTheme } from '@/context/ThemeProvider';
import { useWindowSize } from '@/hooks/useWindowSize';
import { Cart4 as CartIcon } from '@styled-icons/bootstrap';
import { Menu as MenuIcon } from '@styled-icons/boxicons-regular';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useRef, useState } from 'react';
import Switch from 'react-switch';
import { CustomPopover } from '../CustomPopover';
import { Logo } from '../icons/Logo';
import { Moon } from '../icons/Moon';
import { Sun } from '../icons/Sun';
import { SearchInput } from '../SearchInput';
import {
  Box,
  Container,
  LogoWrapper,
  MobileMenuWrapper,
  SearchWrapper,
} from './styles';

export function Header() {
  const [searchInputValue, setSearchInputValue] = useState('');
  const {
    toggleTheme,
    theme: { title },
  } = useContext(ContextTheme);
  const clickRef = useRef<HTMLUListElement>(null);
  const { width } = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Container>
      <Box>
        <LogoWrapper>
          <a href="/">
            <Logo />
          </a>
        </LogoWrapper>

        {width > 720 ? (
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <CustomPopover
              title="Categorias"
              list={[{ title: 'test', link: 'test' }]}
            />
            <SearchWrapper>
              <SearchInput
                value={searchInputValue}
                onChange={(e) => setSearchInputValue(e.target.value)}
                placeholder="Procurar"
              />
            </SearchWrapper>
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
            <button
              style={{
                marginLeft: '1rem',
                background: 'transparent',
                border: 'none',
                marginBottom: '2px',
              }}
            >
              <CartIcon title="Carrinho" size={30} />
            </button>
          </div>
        ) : (
          <>
            <SearchWrapper>
              <SearchInput
                value={searchInputValue}
                onChange={(e) => setSearchInputValue(e.target.value)}
                placeholder="Procurar"
              />
            </SearchWrapper>
            <MobileMenuWrapper>
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
                        <a href="/">Tela Inicial</a>
                      </li>
                      <li>
                        <a href="/cart">Carrinho</a>
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
          </>
        )}
      </Box>
    </Container>
  );
}
