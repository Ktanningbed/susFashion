import os
import requests
import json
from typing import Any
from dotenv import load_dotenv
from urllib.request import urlopen, Request

load_dotenv()

key = os.environ.get('FASHION_KEY')


def get_tags(path: str) -> tuple[str, list[str]]:
    """Returns the probable gender and top 3 most descriptive tags for an input clothing image (path/url).
    """
    tags = get_fashion_info(path)
    common = parse_data(tags)
    print(f'tags: {common}')
    return common


def get_fashion_info(path: str) -> dict[str: Any]:
    """Given an image path/url, use the lykdat fashion tagging API to return a dictionary of the fashion info.
    """
    url = "https://cloudapi.lykdat.com/v1/global/search"

    headers = {
        'api_key': key,
    }

    # open the image url and read the data
    user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
    hdrs = {'User-Agent': user_agent}
    request = Request(path, headers=hdrs)

    with urlopen(request) as img_f:
        img = img_f.read()

    files = [('image', ('image.jpg', img, 'image/jpeg'))]

    response = requests.post(url, data=headers, files=files)
    return json.loads(response.content)


def parse_data(tags: dict[str: Any], n: int = 3) -> tuple[str, list[str]]:
    """Given a fashion tags dictionary (response from API), observe the most common words in the similar proucts,
    and produce a list of tags."""
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
        if len(keywords[i]) > 2:
            common.append(keywords[i])
            count += 1
        i += 1

    return (gender, common)