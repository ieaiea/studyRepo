# 파일쓰기======================================================================
f = open('newfile.txt', 'w')
f.close()


# =============================================================================
# 파일 읽기

f = open('./dummy.txt', 'r')
# print(f.read()) 전체읽기

# print(f.readline())  한줄읽기

# print(f.readlines())  한줄씩 읽어 리스트로변형
