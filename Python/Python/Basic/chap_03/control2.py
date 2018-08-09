# 리스트 반복
for loop in [1, 2, 3, 4, 5]:
    print(loop) # 1 2 3 4 5


# 1 ~ 100 까지 출력
for loop in range(100):
    print(loop)

# 문자열 한자씩 리스트로 처리
for i in 'Hello':
    print(i) # H e l l o


# 1 ~ 10까지 2 씩 증가
for i in range(1, 10, 2):
    print(i) # 1 3 5 7 9

# 10에서 1까지 역순으로 출력할 수 있어요
for i in range(10, 1, -1):
    print(i) # 10 ~ 1

# while

index = 1

while(index <= 10):
    print(index) # 1 ~ 10
    index += 1

# 1 ~ 10까지 반복을 하는데 i 가 7이되면 반복문을 종료시켜라
for i in range(0, 10):
    if(i == 7): break # 7 종료
    print(i) # 1 ~ 6

# 1 ~ 10까지 반복을 하는데 i 가 7이되면 7은 skip 하세요
for i in range(0, 10):
    if(i == 7): continue
    print(i) # 7 제외
