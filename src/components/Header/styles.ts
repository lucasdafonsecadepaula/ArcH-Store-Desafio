import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  max-width: 1400px;
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
  display: flex;
  padding: 0.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  img {
    width: 3rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    gap: 0;
    .categories {
      display: none;
    }

    .switch {
      display: none;
    }

    .cart {
      display: none;
    }

    .login {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .menu {
      display: none;
    }
  }
`;

export const CategoriesWrapper = styled.div`
  margin-left: 0.5rem;
  button {
    display: flex;
  }
`;

export const SearchWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
  max-width: 500px;
`;

export const SwitchWrapper = styled.div``;

export const CartButton = styled.button`
  cursor: pointer;
  position: relative;
  margin-left: 1rem;
  background: transparent;
  border: none;
  margin-bottom: 2px;

  svg {
    fill: ${({ theme }) => theme.colors.text};
  }

  span {
    color: #fff;
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    font-size: 1rem;
    height: 1.5rem;
    width: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
`;

export const LoginButton = styled.div`
  cursor: pointer;
  margin-left: 1rem;

  a {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    text-decoration: none;
  }
`;

export const MobileMenuWrapper = styled.div`
  display: flex;

  button {
    cursor: pointer;
    border: none;
    background: inherit;
  }

  svg {
    width: 2.2rem;
    color: ${({ theme }) => theme.colors.text};
  }

  nav {
    z-index: 99;
    display: flex;
    background-color: ${({ theme }) => theme.colors.background};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    align-items: center;
    justify-content: center;
  }

  ul {
    font-size: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    z-index: 10;
    list-style-type: none;
  }

  li {
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.tertiary};
    text-decoration: none;
    padding: 0.5rem;
  }
`;

export const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;

  font-size: 0.8rem;
`;
