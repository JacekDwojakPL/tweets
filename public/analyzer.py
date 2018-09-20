import nltk
from nltk.tokenize import TweetTokenizer

class Analyzer():
    def __init__(self):
        self.test_string = ""
        self.count = 0
        self.tokenizer = TweetTokenizer()


    def alanyze(self, tweet, word):
        self.test_string = word
        words = self.tokenizer.tokenize(tweet)
        for word in words:
            if self.test_string in words:
                self.count +=1
        return self.count

    def split(self, tweet):
        words = self.tokenizer.tokenize(tweet)
        return words
