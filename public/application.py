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


@app.route("/user")
def user():
    response = []
    input = request.args.get("q").strip()
    if len(input) > 0 and input != " ":
        users = helpers.search_for_user(input)
        for user in users:
            new_user = {
                "name": user["name"],
                "screen_name": "@" + user["screen_name"],
                "id": user["id"]
                }
            response.append(new_user)
        return jsonify(response)
    else:
        return jsonify([{"name": "Nothing found", "screen_name": "", "id": ""}])
