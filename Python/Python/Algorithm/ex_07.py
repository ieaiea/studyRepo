# 7. 재귀를 이용하여 최대값 찾기

"""
재귀를 이용하여 최대값을 찾으세요
"""

def find_max(list, n):
    if n == 1:
        return list[0]

    max_n = find_max(list, n-1)

    return max_n > list[n-1] if max_n[n] else list[n-1]


list = [10, 3, 1, 15, 29]
print(find_max(list, len(list)))