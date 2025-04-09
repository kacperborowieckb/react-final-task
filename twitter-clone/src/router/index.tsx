import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Dashboard from '@/pages/Dashboard/Dashboard';
import Login from '@/pages/Login/Login';
import Signup from '@/pages/Signup/Signup';
import { useUser } from '@/hooks/useUser';

function AppRouter() {
  const { user } = useUser();

  const router = createBrowserRouter([
    {
      path: '/',
      element: user ? <Dashboard /> : <Login />,
    },
    {
      path: '/log-in',
      element: <Login />,
    },
    {
      path: '/sign-up',
      element: <Signup />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
