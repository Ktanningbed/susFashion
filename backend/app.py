import requests
from typing import Any
from flask import Flask, request
from fashion_tagging import get_tags
from scrape import scrape_products
import json

app = Flask(__name__)

@app.route('/', methods=['POST'])
def return_similar_sustainable() -> str:
    """Given a path/url to an image, returns a json file consisting of similar, but eco-friendly products with each of their
    brands, prices, images, and product link.
    """
    # get the json passed in the POST request
    response = request.get_json()
    print(f'source image link: {response["link"]}')
    path = response['link']
    print(path)

    # search the image for tags and then find similar products on thredUP
    tags = get_tags(path)
    output = json.dumps(scrape_products(tags))

    print(output)
    return output, 200