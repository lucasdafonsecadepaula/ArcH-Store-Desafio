import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  input {
    width: 100%;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.tertiary};
    border-radius: 8px;
    padding: 0.5rem;
  }

  input:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }

  svg {
    cursor: pointer;
    position: absolute;
    right: 4px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 1.5rem;
  }
`;
