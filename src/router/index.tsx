import { Cart } from '@/pages/Cart';
import { Category } from '@/pages/Category';
import { Home } from '@/pages/Home';
import { Login } from '@/pages/Login';
import { NotFound } from '@/pages/NotFound';
import { Search } from '@/pages/Search';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: '/cart',
    element: <Cart />,
    errorElement: <NotFound />,
  },
  {
    path: '/search/:searchTerm',
    element: <Search />,
    errorElement: <NotFound />,
  },
  {
    path: '/:categoryName',
    element: <Category />,
    errorElement: <NotFound />,
  },
]);

export function Router() {
  return <RouterProvider router={routes} />;
}
