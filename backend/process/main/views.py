from django.http import HttpResponse
from django.shortcuts import render
from process.twitter import twitter_stream, tweet

# Create your views here.


def index(request):
    ts = twitter_stream.Streamer()
    queue = twitter_stream.blocking_queue
    ts.start()
    print("started")
    return HttpResponse("Opened connection")
