import AppRouter from '@/router';

import { UserProvider } from '@/contexts/UserProvider';

function App() {
  return (
    <UserProvider>
      <AppRouter />;
    </UserProvider>
  );
}

export default App;
