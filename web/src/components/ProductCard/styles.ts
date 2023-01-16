import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
  box-shadow: 6px 6px 10px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  }

  span {
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;
    width: 40px;
    height: 40px;
    fill: ${({ theme }) => theme.colors.text};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.text};
    background-color: #fff;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const InfoWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
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
