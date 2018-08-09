from urllib.request import urlopen
from urllib.request import HTTPError
from bs4 import BeautifulSoup

try :
    html = urlopen('http://pythonscraping.com/pages/page1.html')
except HTTPError as e:
    # 에러발생시 처리방법은 다양하다. null을 리턴하던지, break문으로 크롤링을 멈추거나 자유입니다
    print(e)
else:
    # 프로그램을 계속 실행합니다.
    # 만약 위에 에러처리에서 break를 했다면 else 구문을 필요없습니다.

