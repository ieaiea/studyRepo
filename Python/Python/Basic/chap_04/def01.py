# 기본함수
def helloDef():
    print('hello Def!!')

helloDef() # hello Def!!

# return
num = 5
num2 = 10

def add(a, b):
    return a + b

print(add(num, num2))  # 15

# 함수안에 함수선언
def outter():
    print('outter')

    def inner():
        print('inner')

    inner()

outter()

# *args
def add(*args):
    result = 0
    for i in args:
        result += i
    return result

print(add(1, 2, 3, 4, 5)) # 15

# 타입헌팅
def loopStr(word:str, num:int) -> str :
    return word * num

print(loopStr('짱구', 3))

# 람다
add = lambda x : x + 1
print(add(10)) # 11