# 5. 동명이인 찾기

"""
동명이인을 찾아서 동명이인인 사람들의 이름을 집합으로 내보내주세요
"""

def find_same_name(list):
    result = set()
    n = len(list)

    for i in range(0, n - 1): # 마지막은 검사 필요 X
        for j in range(i + 1, n):
            if(list[i] == list[j]):
                result.add(list[i])
    return result


print(find_same_name(["짱구", "철수", "훈이", "맹구", "짱구"]))