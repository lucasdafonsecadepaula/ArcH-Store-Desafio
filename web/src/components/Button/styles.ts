import styled, { css } from 'styled-components';

type ContainerProps = {
  disabled?: boolean;
  variant?: 'standard' | 'danger';
};

export const Container = styled.button<ContainerProps>`
  color: ${({ theme }) => theme.colors.text};
  margin: 8px 16px;
  align-self: flex-start;
  transition: background-color 0.2s, opacity 0.2s, color 0.2s;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  ${({ theme }) =>
    theme.title === 'dark' &&
    css`
      background-color: ${theme.colors.primary};

      &:hover {
        opacity: 0.8;
      }
    `}

  ${({ theme }) =>
    theme.title === 'light' &&
    css`
      background-color: #fff;

      &:hover {
        background-color: ${theme.colors.primary};
        color: #fff;
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      border-color: ${({ theme }) => theme.colors.tertiary};
      background-color: ${({ theme }) => theme.colors.tertiary};
      opacity: 0.8;
      cursor: not-allowed;

      &:hover {
        border-color: ${({ theme }) => theme.colors.tertiary};
        background-color: ${({ theme }) => theme.colors.tertiary};
        opacity: 0.8;
        cursor: not-allowed;
        color: ${({ theme }) => theme.colors.text};
      }
    `}

    ${({ variant }) =>
    variant === 'danger' &&
    css`
      color: #fff;
      border-color: ${({ theme }) => theme.colors.error};
      background-color: ${({ theme }) => theme.colors.error};
      opacity: 0.8;
      cursor: pointer;

      &:hover {
        color: #fff;
        border-color: ${({ theme }) => theme.colors.error};
        background-color: ${({ theme }) => theme.colors.error};
        opacity: 0.8;
        cursor: pointer;
      }
    `}
`;
