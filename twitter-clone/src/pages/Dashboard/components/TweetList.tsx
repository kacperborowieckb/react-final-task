import { useContext, useEffect } from 'react';

import { TweetContext } from '@/contexts';
import { Container } from '@/components';
import Avatar from './Avatar';

export default function TweetList() {
  const { tweets, fetchTweets, fetchingError } = useContext(TweetContext);

  useEffect(() => {
    fetchTweets();
  });

  return (
    <div className="flex flex-col gap-4 my-4">
      {fetchingError ? (
        <p>{fetchingError}</p>
      ) : (
        tweets.map(({ text, id, authorId }) => {
          return (
            <Container className="flex gap-4" key={id}>
              <Avatar name={authorId} />
              <div>
                <p className="text-md font-semibold">{authorId}</p>
                <p dangerouslySetInnerHTML={{ __html: text }}></p>
              </div>
            </Container>
          );
        })
      )}
    </div>
  );
}
