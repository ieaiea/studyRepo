# 파일 읽고 내용채우기
f = open('newfile.txt', 'w')

for i in range(1, 10):
    f.write('%d 번째줄입니다. \n' % i)

f.close()