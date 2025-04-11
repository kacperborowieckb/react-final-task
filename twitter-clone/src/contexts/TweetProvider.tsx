import { useState, ReactNode } from 'react';

import { Tweet } from '@/types';

import { TweetContext } from './TweetContext';

export type TweetProviderProps = {
  children: ReactNode;
};

export function TweetProvider({ children }: TweetProviderProps) {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  const contextValue = {
    tweets,
    setTweets,
  };

  return (
    <TweetContext.Provider value={contextValue}>
      {children}
    </TweetContext.Provider>
  );
}
