for i in range(0, testCase):
    cpGB, cpPB = [int(x) for x in input().split()]
    if i%2==0:
        cpGB, cpPB = cpGB, cpPB
    else:
        cpGB, cpPB = cpPB, cpGB
    n= int(input())
    cost=0
    for j in range(0, n):
        val1, val2= [int(x) for x in input().split()]
        cost+= (val1*cpGB)
        cost+= (val2*cpPB)
    print(cost)
