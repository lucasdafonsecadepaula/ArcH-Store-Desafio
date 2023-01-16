import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    text-align: center;
  }

  .line-through {
    text-decoration: line-through;
  }

  button {
    align-self: flex-end;
    margin: 0.5rem;
    padding: 0.7rem 1rem;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
`;

export const Bullet = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
