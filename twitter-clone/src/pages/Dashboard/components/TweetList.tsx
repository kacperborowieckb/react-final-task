import { useContext, useEffect, useState } from 'react';

import { TweetContext } from '@/contexts';
import { tryCatch } from '@/utils';
import { getTweets } from '@/api';
import { Container } from '@/components';
import Avatar from './Avatar';

export default function TweetList() {
  const { tweets, setTweets } = useContext(TweetContext);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    async function fetchTweets() {
      const { data, error } = await tryCatch(getTweets());

      if (error) {
        setErrorMessage('Failed to get tweets');

        return;
      }

      setTweets(data.reverse());
    }

    fetchTweets();
  });

  return (
    <div className="flex flex-col gap-4 my-4">
      {errorMessage ? (
        <p>{errorMessage}</p>
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
