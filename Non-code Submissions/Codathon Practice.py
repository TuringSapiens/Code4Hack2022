#Codathon Practice Assignment.pdf

#Question 1

def armstrong(x):
    sum = 0
    if type(x)==int:
        x = str(x)
        for i in x:
            i = int(i)
            sum+=i**3
        if sum == int(x):
            print(x,"is an Armstrong number.")
        elif sum != int(x):
            print(x,"is not an Armstrong number.")
    else:
        print("Error")


#Question 2

def stat(x):
    import math
    cardinality = len(x)
    mean = 0
    variance = 0
    varianceVal = 0
    for i in x:
        mean+=int(i)
    mean = mean/cardinality
    for i in x:
        varianceVal += (i-mean)**2
    variance=varianceVal/cardinality-1
    standardDeviation = math.sqrt(variance)
    print("Mean-",round(mean),"\nVariance-",round(variance),"\nStandard Deviation-",round(standardDeviation))


#Question 3

def lcmhcf(x,y):
    i = 2
    lcmhcf_list = []
    while i<=x and i<=y:
        if x%i==0 and y%i==0:
            lcmhcf_list.append(i)
        else:
            hcf = 1
        i+=1
    if hcf!=1:
        hcf = lcmhcf_list[-1]
    lcm = int((x*y)/hcf)
    print("The HCF is",hcf,"and the LCM is", lcm+".")


#Question 4

def uniseries(n):
    sum_uniseries = 0
    list_uniseries = []
    for i in range(n):
        list_uniseries.append("1"*n)
        n-=1
    for i in list_uniseries:
        i = int(i)
        sum_uniseries+=i
    print(sum_uniseries)


#Question 5

def right_triangle(n):
    x = 0
    for i in range(n,0,-1):
        print("_"*x, end="")
        print("*"*i, end="")
        print()
        x+=1
right_triangle(9)


#Question 6

def amicable(x,y):
    amicable_sum = 0
    amicable_list = []
    for i in range(1,x-1):
        if x%i==0:
            amicable_list.append(i)
    for j in amicable_list:
        amicable_sum+=j
    if amicable_sum==y:
        print("These numbers are amicable.")
    else:
        print(("These numbers are not amicable."))


#Question 7

def binary(x):
    if x>=1:
        binary(x//2)
    print(x%2, end="")


#Question 8

def triangular_number(x):
    import math
    c = -2*x
    discriminant = math.sqrt(1+8*x)
    if discriminant<0:
        return "Error"
    elif discriminant>=0:
        root1 = (-1+discriminant)/2
        root2 = (-1-discriminant)/2
        if root1>0 and math.floor(root1)==root1:
            print("The number is triangular.")
        elif root2>0 and math.floor(root2)==root2:
            print("The number is triangular.")
        elif root1<0 or root2<0 or math.floor(root1)!=root1 or math.floor(root2)!=root2:
            print("The number is not triangular.")


#Question 9

def reverseint(x):
    reverselist = []
    for i in str(x):
        reverselist.append(i)
    for j in range(len(reverselist)-1,-1,-1):
        print(reverselist[j],end="")



