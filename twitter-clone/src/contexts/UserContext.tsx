import { createContext } from 'react';

import { User } from '@/types';

export type UserContextType = {
  user: User;
  setUser: (user: User) => void;
};

// moving to another file to allow fast import components in UserProvider
export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});
