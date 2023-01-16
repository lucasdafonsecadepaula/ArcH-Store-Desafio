import { Container } from './styles';

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  variant?: 'standard' | 'danger';
};

export function Button({ children, disabled, variant, onClick }: ButtonProps) {
  return (
    <Container disabled={disabled} onClick={onClick} variant={variant}>
      {children}
    </Container>
  );
}
