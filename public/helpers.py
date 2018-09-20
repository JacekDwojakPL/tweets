import os
import html
from twython import Twython
from twython import TwythonAuthError, TwythonError, TwythonRateLimitError


def get_user_timeline(screen_name, count):

    if count < 1 or count > 200:
        raise RuntimeError("Invalid count!")
    if not os.environ.get("API_KEY"):
        raise RuntimeError("API_KEY not set!")
    if not os.environ.get("API_SECRET"):
        raise RuntimeError("API_SECRET not set!")

    try:
        return_array = []
        id = 0
        twitter = Twython(os.environ.get("API_KEY"), os.environ.get("API_SECRET"))
        user = twitter.lookup_user(screen_name=screen_name.lstrip("@"))
        if user[0]["protected"]:
            return None
        tweets = twitter.get_user_timeline(screen_name=screen_name, count=count, tweet_mode="extended")
        for tweet in tweets:
            single_tweet = {
                "id": id,
                "date": tweet["created_at"],
                "text": html.unescape(tweet["full_text"].replace("\n", " "))
            }
            return_array.append(single_tweet)
            id += 1
        return return_array

    except TwythonAuthError:
        raise("Authentication error") from None
    except TwythonRateLimitError:
        raise("You've hit rate limit") from None
    except TwythonError:
        return None
