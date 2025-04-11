import Nav from './components/Nav';
import NewTweetForm from './components/NewTweetForm';
import TweetList from './components/TweetList';

export default function Dashboard() {
  return (
    <>
      <Nav />
      <main className="max-w-[624px] mx-auto">
        <NewTweetForm />
        <TweetList />
      </main>
    </>
  );
}
