# 파일 읽고 내용채우기
f = open('newfile.txt', 'a')

for i in range(10, 20):
    f.write('%d 번째줄입니다. \n' % i)

f.close()

