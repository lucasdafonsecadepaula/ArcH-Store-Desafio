import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: ${({ theme }) => theme.colors.text};
  gap: 3rem;
  padding: 0 2rem;
  text-align: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    width: 100%;
  }

  button {
    width: 10rem;
    height: 4rem;
    border: none;
  }
`;
