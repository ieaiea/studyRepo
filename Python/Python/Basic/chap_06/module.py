import calc

print(calc.add(10, 20)) # 30
print(calc.sub(20, 10)) # 10
print(calc.mul(10, 20)) # 200

from calc import add
print(add(10, 20)) # 30

from calc import *
print(add(10, 20)) # 30
print(sub(20, 10)) # 10
print(mul(10, 20)) # 200

import calc as c

print(c.add(10, 20)) # 30
print(c.sub(20, 10)) # 10
print(c.mul(10, 20)) # 200

