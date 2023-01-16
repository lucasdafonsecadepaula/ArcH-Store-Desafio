import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .file-label {
    cursor: pointer;
  }

  div {
    width: 100%;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    font-size: 1rem;
    margin-top: 0.5rem;
    border-radius: 8px;

    box-shadow: 4px 4px 6px 4px rgba(0, 0, 0, 0.1);
  }

  .buttons {
    display: flex;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 768px) {
    width: 500px;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;

    h1 {
      font-size: 1rem;
    }

    div {
      margin-bottom: 1rem;
    }

    input {
      font-size: 0.8rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  img {
    border-radius: 8px;
    width: 100%;
    max-width: 300px;
    aspect-ratio: 4/4;
    object-fit: cover;
    object-position: center;

    @media (max-width: 768px) {
      max-height: 100px;
    }
  }
`;
