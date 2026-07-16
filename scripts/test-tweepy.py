import tweepy
import os

API_KEY = os.environ.get("TWITTER_API_KEY") or "Iw4TUodamdfAfEQTl1wYY4oZo"
API_SECRET = os.environ.get("TWITTER_API_KEY_SECRET") or "nIrWr5i2H8xoRATVRVALLmX5lyvLE96K4tzYKEW37snLeo6vzK"
ACCESS_TOKEN = os.environ.get("TWITTER_ACCESS_TOKEN") or "2069473270768812032-a6yVLUEKn4hFf3KBpkBlpd0u7j6xzp"
ACCESS_TOKEN_SECRET = os.environ.get("TWITTER_ACCESS_TOKEN_SECRET") or "TB03xUDceZFT2FejCAdnQyne1u0HXi405CQvzbdZQzYJR"

client = tweepy.Client(
    consumer_key=API_KEY,
    consumer_secret=API_SECRET,
    access_token=ACCESS_TOKEN,
    access_token_secret=ACCESS_TOKEN_SECRET,
)

print(f"Using API Key: {API_KEY[:4]}...{API_KEY[-4:]}")
print(f"Using Token: {ACCESS_TOKEN[:4]}...{ACCESS_TOKEN[-4:]}")

try:
    # Post a tweet
    response = client.create_tweet(text="🧪 Test tweepy — conexión directa desde Bud 🚀 #PalabrasConectadas")
    print(f"Tweet publicado! ID: {response.data['id']}")
    print(f"URL: https://x.com/user/status/{response.data['id']}")

except tweepy.TweepyException as e:
    print(f"Error: {e}")
    try:
        print("API response:", e.api_code, e.response.text if hasattr(e, 'response') else "")  # type: ignore
    except:
        pass
except Exception as e:
    print(f"Error: {e}")