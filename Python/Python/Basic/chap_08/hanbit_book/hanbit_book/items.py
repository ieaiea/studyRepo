# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class HanbitBookItem(scrapy.Item):

    book_title = scrapy.Field()
    book_author = scrapy.Field()
    book_date = scrapy.Field()
    pass
