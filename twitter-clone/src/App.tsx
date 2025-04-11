import AppRouter from '@/router';

import { UserProvider, TweetProvider } from '@/contexts';

function App() {
  return (
    <UserProvider>
      <TweetProvider>
        <AppRouter />;
      </TweetProvider>
    </UserProvider>
  );
}

export default App;
