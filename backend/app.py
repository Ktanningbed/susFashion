import requests
from typing import Any
from flask import Flask
from fashion_tagging import get_fashion_tags

app = Flask(__name__)

@app.get('/similar_sustainable/<path>')
def return_similar_sustainable(path: str) -> str:
    return get_fashion_tags(path)