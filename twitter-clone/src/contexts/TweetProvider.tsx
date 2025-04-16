import { useState, ReactNode } from 'react';

import { Tweet } from '@/types';

import { TweetContext, TweetContextType } from './TweetContext';
import { tryCatch } from '@/utils';
import { getTweets } from '@/api';

export type TweetProviderProps = {
  children: ReactNode;
};

export function TweetProvider({ children }: TweetProviderProps) {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [fetchingError, setFetchingError] = useState<string>('');

  async function fetchTweets() {
    const { data, error } = await tryCatch(getTweets());

    if (error) {
      setFetchingError('Failed to get tweets');

      return;
    }

    setTweets(data.reverse());
    setFetchingError('');
  }

  const contextValue: TweetContextType = {
    tweets,
    setTweets,
    fetchingError,
    setFetchingError,
    fetchTweets,
  };

  return (
    <TweetContext.Provider value={contextValue}>
      {children}
    </TweetContext.Provider>
  );
}
