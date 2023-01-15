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
  /* justify-content: space-between; */
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

export const SearchWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
  max-width: 500px;
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
    font-size: 1.3rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    z-index: 10;
    list-style-type: none;
  }

  a {
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.tertiary};
    text-decoration: none;
    padding: 0.5rem;
  }
`;
