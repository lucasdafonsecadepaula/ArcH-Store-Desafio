import styled from 'styled-components';

export const Container = styled.div`
  button {
    font-size: 1.2rem;
    background: inherit;
    border: 0;
    color: ${({ theme }) => theme.colors.text};
  }

  button[data-state='open'] svg {
    transform: rotate(180deg) translateY(-2px);
  }
`;

export const ListWrapper = styled.div`
  z-index: 20;
  display: flex;
  flex-direction: column;
  gap: 10;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};

  a {
    padding: 0.6rem 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
  a:hover {
    background: ${({ theme }) => theme.colors.tertiary};
  }
`;
