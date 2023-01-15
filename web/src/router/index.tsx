import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
]);

export function Router() {
  return <RouterProvider router={routes} />;
}
