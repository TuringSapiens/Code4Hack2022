s = [32,67,54,69,21,32]
c='y'
while c=='y':
    print('1.PUSH')
    print('2.POP')
    print('3.DISPLAY')
    choice = int(input('Enter your choice: '))
    if (choice==1):
        a=input('Enter any number: ')
        s.append(a)
    elif (choice==2):
        if (s==[]):
            print('Empty Stack')
        else:
            print('Deleted element is: ',s.pop())
    elif (choice==3):
        l=len(s)
        for i in range(l-1,-1,-1):
            print(s[i])
    else:
        print('Wrong input')
    c=input('Do you wish to continue(y/n): ')    
        
