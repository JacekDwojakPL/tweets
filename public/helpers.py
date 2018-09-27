import os
import html
from twython import Twython
from twython import TwythonAuthError, TwythonError, TwythonRateLimitError


twitter = Twython(os.environ.get("API_KEY"), os.environ.get("API_SECRET"),os.environ.get("OAUTH_TOKEN"), os.environ.get("OAUTH_TOKEN_SECRET"))

def get_user_timeline(screen_name):

    if not os.environ.get("API_KEY"):
        raise RuntimeError("API_KEY not set!")
    if not os.environ.get("API_SECRET"):
        raise RuntimeError("API_SECRET not set!")

    try:
        return_array = []
        id = 0
        user = twitter.lookup_user(screen_name=screen_name.lstrip("@"))
        if user[0]["protected"]:
            return None
        tweets = twitter.get_user_timeline(screen_name=screen_name, count=200, tweet_mode="extended")
        for tweet in tweets:
            single_tweet = {
                "id": id,
                "time": tweet["created_at"],
                "text": html.unescape(tweet["full_text"].replace("\n", " ")),
                "count": 0
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

def search_for_user(username):
    results = twitter.search_users(q=username, count=5)
    return results
