
# 나이가 20살 이하일경우 미성년자입니다를 출력해주세요.
age = 19

if age <= 19:
    print('미성년자입니다')

# 나이가 20살 이상일경우 성인 / 아닐경우 미성년자를 출력해주세요
age = 20

if age <= 19:
    print('미성년자입니다')
else:
    print('성인입니다')

# 나이가 0 ~ 19 미성년자 / 20 ~ 30  청년 / 나머지는 성립조건 없음으로 print해주세요

age = 22

if age <= 19:
    print('미성년자입니다.')
elif age <= 30:
    print('청년입니다.')
else:
    print('성립하는 조건이 없습니다.')

# AND OR NOT
# and
a = 5
b = 10
if a == 5 and b == 10:
    print('일치') # 성립
else:
    print('불일치')

# or
num = 5

if num == 5 or num == 3:
    print('일치')  # 성립
else:
    print('불일치')

# not
if not num == 7:
    print('일치') # 성립
else :
    print('불일치')


# in
list = [1, 2, 3, 4]
set = {4, 5, 6}
dict = {"o" : 1, "t" : 2, "tr" : 3}
tuple = (7, 8, 9)

print(1 in list)
print(5 in set)
print("o" in dict)
print(10 in tuple)

# 딕셔너리의 특정값
print(1 in dict.values())