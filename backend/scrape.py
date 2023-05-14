from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import re

DRIVER_PATH = 'chromedriver.exe'


def scrape_products(tags: tuple[str, list[str]]) -> list[dict[str, str]]:
    """Returns a list of products (their information represented by a dict) given a list of descriptive tags
    """
    return scrape_thredup(tags[1])


def scrape_thredup(tags: list[str]) -> list[dict[str, str]]:
    """Returns the top 3 products as returned by thredUP given a list of descriptive tags.
    """
    # setup search url
    searchtxt = tags[0] + '+' + tags[1] + '+' + tags[2]
    url = f'https://www.thredup.com/women?department_tags=women&text={searchtxt}'

    # selenium setup
    options = Options()
    options.headless = True
    user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
    options.add_argument(f'user-agent={user_agent}')
    driver = webdriver.Chrome(options=options, executable_path=DRIVER_PATH)
    driver.get(url)
    src = driver.page_source
    driver.quit()

    # parse product data
    soup = BeautifulSoup(src, 'lxml')
    product_list = soup.find(attrs={'data-container': 'item-results'})

    # iterate through each product and retrieve relevant data
    products = []
    for tag in product_list:
        try:
            # get product name
            name = tag.contents[2].a.h3.string
            print(f'name: {name}')

            # get image source
            img_src = tag.contents[0].img['src']
            print(f'img_src: {img_src}')

            # get product link
            link = 'https://www.thredup.com/' + str(tag.contents[1]['href'])
            print(f'product_link: {link}')

            # find price
            prices = tag.find_all(string=re.compile('^\d+.\d{1,2}$'))
            if len(prices) == 0:
                prices = tag.find_all(string=re.compile('^\$'))

            # clean price and find min
            for i in range(len(prices)):
                if '$' in prices[i]:
                    prices[i] = prices[i][1:]
                prices[i] = float(prices[i])
            prices.sort()
            price = '$' + str(prices[1])

            print(f'price: {price}')
            print()
            products.append({
                'name': name,
                'img_src': img_src,
                'link': link,
                'price': price
            })
        except IndexError:
            pass

    return products

