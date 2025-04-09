import { createContext, useState, ReactNode } from 'react';

import { User } from '@/types';

export type UserContextType = {
  user: User;
  setUser: (user: User) => void;
};

export type UserProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>(null);

  const contextValue = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
