# 3. 1 ~ n 까지의 합

"""
1 ~ n 까지의 합을 구하세요
"""

def sum_n(n):
    result = 0
    for i in range(1, n+1):
        result += i
    return result

print(sum_n(10))

def sum_n2(n):
    return n * (n + 1) / 2

print(sum_n2(10))