from flask import Flask, render_template, request, url_for, jsonify
from flask_cors import CORS
from analyzer import Analyzer
import helpers

app = Flask(__name__)
CORS(app)
tweet_analyzer = Analyzer()

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/search", methods=["POST"])
def search():
    data = request.json
    screen_name = request.json["screen_name"]
    test_word = request.json["test_word"]
    tweets = helpers.get_user_timeline(screen_name)

    for tweet in tweets:
        tweet["count"] = tweet_analyzer.analyze(tweet["text"], test_word)
    return jsonify(tweets)
