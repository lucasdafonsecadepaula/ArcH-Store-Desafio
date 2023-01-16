import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 1rem;
`;

export const Box = styled.div`
  position: relative;
  margin: 1rem auto;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  div:first-child {
    flex: 0.7;
  }

  div:last-child {
    flex: 0.3;
  }
`;

export const ProductsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PriceWrapper = styled.div``;

export const EmptyCartContainer = styled.div`
  max-width: 1400px;
  margin: 1rem auto;
  width: 100%;
  text-align: center;
  padding: 1rem;

  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 2.2rem;
  }

  button {
    margin-top: 2rem;
    font-size: 1.2rem;
    padding: 1rem 2rem;
    border-radius: 8px;
  }
`;
