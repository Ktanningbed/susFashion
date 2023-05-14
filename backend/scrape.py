import requests
from bs4 import BeautifulSoup


def scrape_products(tags: tuple[str, list[str]]) -> list[dict[str, str]]:
    """Returns a list of products (their information represented by a dict) given a list of descriptive tags and the gender
    for whom the piece is meant to be worn by.
    """
    if tags[0] == 'female':
        return scrape_thredup(tags[1])


def scrape_thredup(tags: list[str]) -> list[dict[str, str]]:
    """Returns the top 3 products as returned by thredUP given a list of descriptive tags.
    """
    searchtxt = tags[0] + '+' + tags[1] + '+' + tags[2]
    src = requests.get(f'https://www.thredup.com/women?department_tags=women&text={searchtxt}').text

    soup = BeautifulSoup(src, 'lxml')

    product_list = soup.find(data_container="item-results")
    print(product_list)