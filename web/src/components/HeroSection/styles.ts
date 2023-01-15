import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 1rem;
`;

export const Box = styled.div`
  position: relative;
  margin: 1rem auto;
  max-width: 1400px;

  div {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .test {
    margin-right: 8px;
    color: #fff;
    text-align: end;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    z-index: 10;
    height: auto;
    border-radius: 10px;
  }

  .test button {
    cursor: pointer;
    padding: 1rem;
    font-size: 1.2rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border-radius: 8px;
    margin-top: 1rem;
    border: none;
  }

  img {
    object-position: right center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;
