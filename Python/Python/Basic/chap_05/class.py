class FirstClass:
    classVar = 10  # 클래스변수

    def __init__(self, name='짱구'):
        self.name = name  # 인스턴스 변수


# 클래스사용
c1 = FirstClass()
c2 = FirstClass('철수')
c3 = FirstClass('민수')


def printInfo(c):
    print('name', c.name)
    print('classVar', c.classVar)

printInfo(c1)
printInfo(c2)
printInfo(c3)


# 계산기
class Calc:
    def __init__(self):
        self.result = 0

    def add(self, a, b):
        self.result = (a + b)

    def sub(self, a, b):
        self.result = (a - b)

    def printResult(self):
        print(self.result)

calc = Calc()
calc.add(10, 20) # 30
calc.printResult()

calc.sub(10, 5) # 5
calc.printResult()

# 상속

class Person:
    def __init__(self, name):
        self.name = name

    def getName(self):
        print(self.name)

class Student(Person):
    def __init__(self, name):
        super().__init__(name)


s = Student('짱구')
s.getName()