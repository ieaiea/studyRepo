from urllib.request import urlopen
from bs4 import BeautifulSoup

# 형제 다루기

html = urlopen("http://pythonscraping.com/pages/page3.html")
bsObj = BeautifulSoup(html, "html.parser")

for sibling in bsObj.find("table", {"id" : "giftList"}).tr.next_siblings:
    print(sibling) # 첫번째 tr은 제외