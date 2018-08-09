# 타입
print(type(3))
print(type(1.5))
print(type(3-4j))

# 문자열
print('string')
print("string")

print('py' + 'thon')
print('py' * 3)

print('python'[0])
print('python'[3])
print('python'[1:3])
print('python'[-2:])

# 문자안에 문자
str = "My name is \"짱구\""  # My name is "짱구"

# 역슬래시
str2 = r'C:\Python\program'
print(str)
print(str2)

# 문자열의 연산
str3 = "짱"
str4 = "구"

print(str3 * 3)
print(str3 + str4)

# 리스트
num = [1, 2, 3, 4]
num.append(5);
print(num)
num.insert(0, 0)
print(num)
num.extend([6, 7])
print(num)


color = ['red', 'blue', 'yellow', 'red']
print(color.index('red'))
print(color.index('red', 1))

print(color.count('red'))
print(color.pop())

color.sort()
print(color)
color.remove('blue')
print(color)

print(color[::2])

a = {1, 2, 3}
b = {3, 4, 5}

print(a.union(b))
print(a.intersection(b))

# 튜플
a, b = 1, 2
print(a, b)
a, b = b, a
print(a, b)

# 딕셔너리
d = dict(a = 1, b = 2, c = 3)
d['d'] = 3
print(d)

for k, v in d.items():
    print(k, v)

del d['a']
print(d) # {'c': 3, 'b': 2, 'd': 3}
d.clear();
print(d) # {}

# 깊은복사 얕은복사
a = [10, 20, 30]
b = a
a[0] = 40
print(a) # 40 20 30
print(b) # 40 20 30

print(id(a)) # 4376492512
print(id(b)) # 4376492512

a = [10, 20, 30]
b = a[:]
print(id(a)) # 412701296
print(id(b)) # 4412701368
a[0] = 40
print(a) # [40, 20, 30]
print(b) # [10, 20, 30]

# 집합
s1 = set([1, 2, 3])  # set을 통해 만들 수 있다
print(s1)  # {1, 2, 3}
s2 = set("Hello")  # 문자열로도 만들 수 있다.
print(s2)  # {'e', 'l', 'o', 'H'}

s1 = set([1, 2, 3, 4, 5, 6])
s2 = set([4, 5, 6, 7, 8, 9])

# 교집합
print(s1 & s2)  # {4, 5, 6}
print(s1.intersection(s2))

# 합집합
print(s1 | s2)  # {1, 2, 3, 4, 5, 6, 7, 8, 9}
print(s1.union(s2))  # {1, 2, 3, 4, 5, 6, 7, 8, 9}

# 차집합
print(s1 - s2)  # {1, 2, 3}
print(s2 - s1)  # {8, 9, 7}
print(s1.difference(s2))  # {1, 2, 3}
print(s2.difference(s1))  # {8, 9, 7}

# 값 추가
s1 = set([1, 2, 3])
s1.add(4)
print(s1)  # {1, 2, 3, 4}

# 값 여러개 추가
s1 = set([1, 2, 3])
s1.update([4, 5, 6])
print(s1)  # {1, 2, 3, 4, 5, 6}

# 특정값 제거
s1 = set([1, 2, 3])
s1.remove(2)
print(s1)  # {1, 3}