import { Tweet } from '@/types';
import { createContext } from 'react';

export type TweetContextType = {
  tweets: Tweet[];
  setTweets: (tweets: Tweet[]) => void;
  fetchTweets: () => void;
  fetchingError: string;
  setFetchingError: (newVal: string) => void;
};

// moving to another file to allow fast import components in UserProvider
export const TweetContext = createContext<TweetContextType>({
  tweets: [],
  setTweets: () => {},
  fetchTweets: async () => {},
  fetchingError: '',
  setFetchingError: () => {},
});
