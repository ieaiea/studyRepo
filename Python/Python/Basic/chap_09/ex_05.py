from urllib.request import urlopen
from bs4 import BeautifulSoup

# 자식 다루기

html = urlopen("http://pythonscraping.com/pages/page3.html")
bsObj = BeautifulSoup(html, "html.parser")

for child in bsObj.find("table", {"id" : "giftList"}).children:
    print(child)
