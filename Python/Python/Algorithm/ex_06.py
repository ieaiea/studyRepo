# 6. 팩토리얼

"""
팩토리얼을 구현하세요
"""

def fact(n):
    if n == 1:
        return 1
    return n * fact(n - 1)

print(fact(10))

# 1 ~ n 까지 재귀로 더하기

"""
1 ~ n 까지 재귀를 이용하여 더하세요
"""

def sum_n(n):
    if n == 1:
        return 1
    return n + sum_n(n - 1)

print(sum_n(5))