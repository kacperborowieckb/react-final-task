import { useUser } from '@/hooks/useUser';

type AuthGuardProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

export default function AuthGuard({
  children,
  fallback = null,
}: AuthGuardProps) {
  const { user } = useUser();

  return <>{user ? children : fallback}</>;
}
