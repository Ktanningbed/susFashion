import os
import requests
import json
from typing import Any

key = os.environ.get('fas_key')


import requests
import os
import base64
import json
from typing import Any

key = os.environ.get('fas_key')


def get_fashion_tags(path: str) -> dict[str: Any]:
    """Given an image path, use the lykdat fashion tagging API to return a dictionary of the fashion tags.
    """
    url = "https://cloudapi.lykdat.com/v1/global/search"

    headers = {
        'api_key': key,
    }

    image_file = open(path, 'rb')
    files = [('image', ('image.jpg', image_file, 'image/jpeg'))]

    response = requests.post(url, data=headers, files=files)
    return json.loads(response.content)


def parse_data(tags: dict[str: Any], n: int = 3) -> tuple[str, list[str]]:
    """Given a fashion tags dictionary (response from API), observe the most common words in the similar proucts,
    and produce a list of tags"""
    # select the appropriate data
    similar_products = tags['data']['result_groups'][0]['similar_products']
    names = [product['name'].lower() for product in similar_products]

    # calculate for male or female
    n_female = len([product['gender'] for product in similar_products if product['gender'] == 'female'])
    gender = 'male'
    if n_female / float(len(similar_products)) >= 0.5:
        gender = 'female'

    # create a frequency mapping between each keyword and its # of appearances
    freq = {}
    for name in names:
        for keyword in name.split():
            if keyword not in freq:
                freq[keyword] = 1
            else:
                freq[keyword] += 1

    # turn the dictionary into a list and sort it (descending) by word frequency
    freq = [(keyword, occurences) for keyword, occurences in freq.items()]
    freq.sort(key=lambda x: x[1], reverse=True)

    keywords = [keyword[0] for keyword in freq]
    common = []

    # get the top n most frequent keywords, ignoring punctuation
    i = 0
    count = 0
    while count < n:
        if len(keywords[i]) > 1:
            common.append(keywords[i])
            count += 1
        i += 1

    return (gender, common)