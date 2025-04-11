import { useUser } from '@/hooks';
import Avatar from './Avatar';

export default function Nav() {
  const { user } = useUser();

  return (
    <header className="h-24 w-full bg-gray-300 flex px-8 items-center">
      <a href="/" className="grow">
        Twitter Clone
      </a>
      <div className="flex gap-4 items-center">
        <p>User: {user?.name}</p>
        <Avatar name={user?.name ?? ''} />
      </div>
    </header>
  );
}
