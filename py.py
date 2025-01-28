def get(item):
    return item[1]
st1 = "abcab123bca12"
st=sorted(st1)
w = set(st)
m=sorted(w)
c=[]
for j in m:
    s = 0
    for k in st:
        if k == j:
            s += 1
    c.append((j,s))
items=sorted(c,key=get)
for f,g in items:
    print(f,g)

    
