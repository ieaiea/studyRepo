# -*- coding: utf-8 -*-
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule


class BookCrawlSpider(CrawlSpider):
    name = 'book_crawl' # 크롤러의 이름
    allowed_domains = ['hanbit.co.kr'] # 도메인 다른 도메인은 무시
    start_urls = ['http://www.hanbit.co.kr/store/books/category_list.html?cate_cd=001',
                  'http://www.hanbit.co.kr/store/books/category_list.html?cate_cd=002',
                  'http://www.hanbit.co.kr/store/books/category_list.html?cate_cd=003',
                  'http://www.hanbit.co.kr/store/books/category_list.html?cate_cd=004',
                  'http://www.hanbit.co.kr/store/books/category_list.html?cate_cd=005',
                  'http://www.hanbit.co.kr/store/books/category_list.html?cate_cd=006',
                  'http://www.hanbit.co.kr/store/books/category_list.html?cate_cd=007',
                  'http://www.hanbit.co.kr/store/books/category_list.html?cate_cd=008'
                  ] # 시작점  리스트기 때문에 한번에 여러 웹 크롤링이 가능

    rules = ( # 규칙을 정합니다.
        Rule(LinkExtractor(allow=r'store/books/look.php\?p_code=.*'), callback='parse_item', follow=True), # follow가 True면 재귀적으로 호출됩니다.
        Rule(LinkExtractor(allow=r'store/books/category_list.html\?page=\d+&cate_cd=00\d+&srt=p_pub_date'))
    )

    def parse_item(self, response): # rules을 통과한 결과값들이 response에 담겨져옵니다.
        i = {}
        i['book_title'] = response.xpath('//*[@id="container"]/div[1]/div[1]/div[1]/div[2]/h3/text()').extract()
        i['book_author'] = response.xpath('//*[@id="container"]/div[1]/div[1]/div[1]/div[2]/ul/li[1]/span/text()').extract()
        i['book_date'] = response.xpath('//*[@id="container"]/div[1]/div[1]/div[1]/div[2]/ul/li[3]/span/text()').extract()

        return i
