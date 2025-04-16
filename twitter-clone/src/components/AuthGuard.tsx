import { useNavigate } from 'react-router-dom';

import { useUser } from '@/hooks';
import { PATHS } from '@/router';
import { useEffect } from 'react';

type AuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(PATHS.LOGIN);
    }
  });

  return children;
}
