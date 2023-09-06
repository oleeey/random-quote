import os
from urllib.request import urlopen
import re

text = urlopen("http://www.quotationspage.com/random.php")
data = str(text.read())

os.chdir("./src/python/")


list = re.findall(r'(class="quote">)(.+)(.</a>)', data, re.DOTALL)
list2 = re.findall(r'(.html">)(.+)(\.</a>)', str(list), re.DOTALL)


#list2 = re.findall(r'', list, re.DOTALL)


f = open("rawtext.txt", "w")
for i in list2:
    f.writelines(str(i))
f.close()


