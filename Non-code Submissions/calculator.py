#the calculator is in the progress

import math

num1 = input("First Number : ")
num2 = input("Second Number : ")

opr = input("Operation : ")

if opr=="+":
    value = int(num1) + int(num2)

if opr=="-":
    value = int(num1) - int(num2)

if opr=="*":
    value = int(num1) * int(num2)

if opr=="/":
    value = int (num1) / int(num2)

if opr=="%":
    value = int(num1) % int(num2)

print("The value is :", value)
