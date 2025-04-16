import { Tweet } from "@/types"

import { httpService } from "./httpService"

const TWEET_ENDPOINTS  = {
    GET_TWEETS: '/tweets',
    SUBMIT_TWEETS: '/tweets'
} as const

async function getTweets(): Promise<Tweet[]> {
    return (await httpService.get<Tweet[]>(TWEET_ENDPOINTS.GET_TWEETS)).data
}

async function submitTweet(data: Tweet): Promise<Tweet> {
    const result = await httpService.post<Tweet>(TWEET_ENDPOINTS.SUBMIT_TWEETS, data)

    return result.data
}

export {
    getTweets,
    submitTweet
}

