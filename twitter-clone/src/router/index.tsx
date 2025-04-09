import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Dashboard from '@/pages/Dashboard/Dashboard';
import Login from '@/pages/Login/Login';
import Signup from '@/pages/Signup/Signup';
import AuthGuard from '@/components/AuthGuard';

export const PATHS = {
  HOME: '/',
  LOGIN: '/log-in',
  SIGNUP: '/sign-up',
} as const;

const { HOME, LOGIN, SIGNUP } = PATHS;

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: HOME,
      element: (
        <AuthGuard fallback={<Login />}>
          <Dashboard />
        </AuthGuard>
      ),
    },
    {
      path: LOGIN,
      element: <Login />,
    },
    {
      path: SIGNUP,
      element: <Signup />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
