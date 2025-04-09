import { Button } from '@/components';
import { useUser } from '@/hooks/useUser';

export default function Dashboard() {
  const { user, logout } = useUser();
  return (
    <div>
      Dashboard: {user?.name}
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}
