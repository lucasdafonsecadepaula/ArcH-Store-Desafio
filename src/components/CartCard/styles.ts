import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  display: grid;
  grid-template-columns: 20% 50% 30%;
  box-shadow: 6px 6px 10px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 8px 0 0 8px;
    width: 100%;
    max-height: 200px;
    aspect-ratio: 4/4;
    object-fit: cover;
    object-position: center;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  height: 100%;
  padding: 2rem;

  .description {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 1rem;
    }
  }

  .price {
    text-align: right;
    span {
      font-size: 1rem;
      font-weight: bold;
      align-self: flex-end;
    }

    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

export const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  span {
    font-size: 1rem;
  }

  div {
    cursor: pointer;
    margin: 16px 0;
    color: ${({ theme }) => (theme.title === 'dark' ? '#00c7ea' : '#007185')};
  }
`;

type ButtonProps = { isDisabled?: boolean };

export const EditBtn = styled.button<ButtonProps>`
  font-size: 1rem;
  border: none;
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => (theme.title === 'dark' ? '#FFF' : '#000')};
  margin: 0.5rem;
  border-radius: 8px;
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  ${({ isDisabled }) => isDisabled && 'opacity: 0.5; cursor: not-allowed;'}
`;
