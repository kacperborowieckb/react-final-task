import { Button } from '@/components';
import { useUser } from '@/hooks';

import Nav from './components/Nav';
import NewTweetForm from './components/NewTweetForm';
import TweetList from './components/TweetList';

export default function Dashboard() {
  const { user, logout } = useUser();

  return (
    <>
      <Nav />
      <main className="max-w-[624px] mx-auto">
        <NewTweetForm />
        <div>
          Dashboard: {user?.name}
          <Button onClick={logout}>Logout</Button>
        </div>
        <TweetList />
      </main>
    </>
  );
}
