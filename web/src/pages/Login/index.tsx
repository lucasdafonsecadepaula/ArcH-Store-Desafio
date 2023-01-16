import { Button } from '@/components/Button';
import { UserContext } from '@/context/User';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';

export function Login() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (role: 'client' | 'adm') => () => {
    login(role);
    navigate(`/`);
  };

  return (
    <Container>
      <h1>Escolha o tipo de conta para logar</h1>
      <div>
        <Button onClick={handleLogin('client')}>Cliente</Button>
        <Button onClick={handleLogin('adm')}>Administrador</Button>
      </div>
    </Container>
  );
}
