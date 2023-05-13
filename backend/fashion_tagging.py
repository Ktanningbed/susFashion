import os
import requests
import json
from typing import AnyStr

key = os.environ.get('fas_key')


def get_fashion_tags(path: str) -> dict[str: Any]:
    """Given an image path, use the lykdat fashion tagging API to return a dictionary of the fashion tags.
    """
    url = 'https://cloudapi.lykdat.com/v1/detection/tags'

    headers = {
        'x-api-key': key,
    }

    image_file = open(path, 'rb')
    files=[
        ('image',('image.jpg', image_file, 'image/jpeg'))
    ]

    response = requests.post(url, files=files, headers=headers)
    return json.loads(response.content)