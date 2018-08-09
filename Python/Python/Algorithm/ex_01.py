# 1. 1000 미만의 자연수에서 3의 배수와 5의 배수의 총합을 구하라.
"""
10 미만의 자연수에서 3과 5의 배수를 구하면 3, 5, 6, 9이다. 이들의 총합은 23이다.
1000 미만의 자연수에서 3의 배수와 5의 배수의 총합을 구하라.
"""

result = 0

for n in range(1, 1000):
    if n % 3 == 0 or n % 5 == 0:
        result += n

print("1 ~ 1000 까지의 3과 의 배수의 합 : %d" % result)  # 233168