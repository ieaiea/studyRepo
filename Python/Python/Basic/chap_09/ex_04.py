from urllib.request import urlopen
from bs4 import BeautifulSoup

html = urlopen("http://pythonscraping.com/pages/warandpeace.html")
bsObj = BeautifulSoup(html, "html.parser")

# 클래스 속성을 이용
list = bsObj.findAll("span", {"class" : "green"})

for item in list:
    print(item.getText())