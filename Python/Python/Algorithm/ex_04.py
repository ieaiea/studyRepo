# 4. 리스트의 최대값을 구하세요

"""
리스트의 최대값을 구하세요
"""

def find_max(list):
    max_v = list[0]
    n = len(list)
    for i in range(1, n):
        if list[i] > max_v:
            max_v = list[i]
    return max_v

print(find_max([10, 3, 1, 15, 29]))