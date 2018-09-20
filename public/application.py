from flask import Flask, render_template, request, url_for
from analyzer import Analyzer
import helpers

app = Flask(__name__)
tweet_analyzer = Analyzer()

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/search", methods=["POST"])
def search():
    screen_name = request.form.get("screen_name")
    tweet_count = request.form.get("count")
    tweets = helpers.get_user_timeline(screen_name, int(tweet_count))
    return render_template("results.html", tweets=tweets)
