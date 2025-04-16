import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Dashboard, Login, Signup } from '@/pages';
import { AuthGuard } from '@/components';

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
      // probably a top element wrapper for protected router
      // or some middleware would fit nice for bigger apps
      // or declare router with Routes and Route component
      element: (
        <AuthGuard>
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
