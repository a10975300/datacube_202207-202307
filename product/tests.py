import time
import datetime

# Create your tests here.
t1 = datetime.datetime.strptime(str('2022-05-20'), '%Y-%m-%d')

t2 = t1 + datetime.timedelta(days=20)
print(t1)
print(t2)