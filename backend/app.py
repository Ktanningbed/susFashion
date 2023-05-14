import requests
from typing import Any
from flask import Flask
from fashion_tagging import get_tags
from scrape import scrape_products
import json

app = Flask(__name__)

@app.get('/similar_sustainable/<path>')
def return_similar_sustainable(path: str) -> str:
    """Given a path/url to an image, returns a json file consisting of similar, but eco-friendly products with each of their
    brands, prices, images, and product link.
    """
    tags = get_tags(path)
    return json.dumps(scrape_products(tags)), 200