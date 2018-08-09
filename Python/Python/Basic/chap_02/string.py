str = "파이썬 문자열"
print(str)  # 파이썬 문자열
type(str)  # str

str2 = '파이썬 문자열2'
print(str2)  # 파이썬 문자열2
type(str2)  # str

str3 = """첫번쨰줄
두번째줄
세번째줄
"""
print(str3)  # 파이썬 문자열2
type(str3)  # str

myname = 'My name is %s' % '초보개발자 짱구'
print(myname)

print('%d %d' % (1, 2))
print('%f' % 3.14)

# 조금더 파이썬스러운 format
print('My name is {}'.format('짱구'))
print('{} x {}  = {}'.format(2, 3, 2 * 3))
print('{1} x {0} = {2}'.format(2, 3, 3 * 2))