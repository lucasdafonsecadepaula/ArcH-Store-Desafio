import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
  box-shadow: 6px 6px 10px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  img {
    border-radius: 8px;
    width: 100%;
    max-width: 300px;
    aspect-ratio: 4/4;
    object-fit: cover;
    object-position: center;
  }
`;

export const InfoWrapper = styled.div`
  margin: 0 8px;
  padding: 8px;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  margin-top: 8px;

  h3 {
    font-size: 1rem;
    font-weight: normal;
  }

  span {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export const AddToCardBtn = styled.button`
  margin: 8px 16px;
  align-self: flex-start;
  transition: background-color 0.2s;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: #fff;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;
