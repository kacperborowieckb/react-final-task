import { useContext, useState } from 'react';
import sanitizeHtml from 'sanitize-html';

import { Button, Container } from '@/components';
import { useUser } from '@/hooks';
import { tryCatch } from '@/utils';
import { Tweet } from '@/types';
import { TweetContext } from '@/contexts';
import { submitTweet } from '@/api';

export default function NewTweetForm() {
  const [tweetContent, setTweetContent] = useState<string>('');
  const [submitStatus, setSubmitStatus] = useState<string>('');

  const { tweets: currentTweets, setTweets } = useContext(TweetContext);

  const { user } = useUser();

  function isFieldValid(): boolean {
    return tweetContent.length >= 1 && tweetContent.length <= 140;
  }

  async function handleSubmitTweet() {
    if (!user) return;

    const payload: Tweet = {
      id: crypto.randomUUID(),
      authorId: user.email,
      text: sanitizeHtml(tweetContent),
    };

    const { data: newTweet, error } = await tryCatch<Tweet>(
      submitTweet(payload)
    );

    if (error) {
      setSubmitStatus('Failed to submit');
    } else {
      setTweets([newTweet, ...currentTweets]);
      setSubmitStatus('Tweet submitted');
      setTweetContent('');
    }

    setTimeout(() => {
      setSubmitStatus('');
    }, 2000);
  }

  return (
    <>
      <Container className="my-6 !p-0">
        <textarea
          className="w-full h-full block p-4 max-h-[248px]"
          placeholder="What's happening?"
          rows={3}
          value={tweetContent}
          onChange={(e) => setTweetContent(e.target.value)}
        />
      </Container>
      <div className="flex">
        <Button
          className="ml-auto"
          onClick={handleSubmitTweet}
          disabled={!isFieldValid()}
        >
          Tweet
        </Button>
      </div>
      {submitStatus && <p className="text-right w-full">{submitStatus}</p>}
    </>
  );
}
