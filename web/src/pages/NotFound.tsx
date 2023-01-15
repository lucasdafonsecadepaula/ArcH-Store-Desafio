import { useRouteError } from 'react-router-dom';

type RouteErrorProps = {
  status: number;
  statusText: string;
  data: string;
  internal: boolean;
  error: Error;
};

export function NotFound() {
  const error = useRouteError() as RouteErrorProps;
  console.error(error);

  if (error.status === 404) {
    return (
      <div>
        <h1>Ops!</h1>
        <p>Algo de errado ocorreu</p>
        <button>Volte para a tela inicial</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Página não encontrada!</h1>
      <p>Desculpe, um problema inesperado ocorreu.</p>
      <p>Por favor, tente fazer o procedimento novamente ou nos contate.</p>
      <button>Volte para a tela inicial</button>
    </div>
  );
}
