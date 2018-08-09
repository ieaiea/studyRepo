from urllib.request import urlopen
from bs4 import BeautifulSoup

# 부모 다루기

html = urlopen("http://pythonscraping.com/pages/page3.html")
bsObj = BeautifulSoup(html, "html.parser")

text = bsObj.find("img", {"src" : "../img/gifts/img1.jpg"}).parent.previous_sibling.get_text()
print(text) # $15.00
