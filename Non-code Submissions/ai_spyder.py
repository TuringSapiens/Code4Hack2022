def intro():
    print("Program Created by Ishan Jain/Homi Nakra/Arsh Gupta\nClass XII A\nK.L. International School \nMeerut, Uttar Pradesh, India\n\n")
#Delay Loop
    for i in range (25000000):
        pass
    
intro()
import sys
import webbrowser
from datetime import date
from datetime import time
from datetime import datetime
week={0:"Monday",1:"Tuesday",2:"Wednesday",3:"Thursday",4:"Friday",5:"Saturday",6:"Sunday"}
months={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}
pswd="";rpwsd="";name=""
num='0123456789'


#password module 
def pswd():
    pswd=input("Please enter a password to set \n")
    rpswd=input("Please Re-Enter the password \n")
    if pswd!=rpswd:
        print("The password match is incorrect, pls RE-Enter")
        pswd()
    else:
        print("Successful Sign Up")
#Delay Loop
        for i in range (25000000):
            pass
    return pswd
#password module ends

    
def info():
    flag = 1
    while flag == 1:
        name = input("Enter your name: ")
        for i in num:
            if i == name[0]:
                print("Enter a valid name")
                print("Restarting in....")
                

#Delay Loop
                for i in range (25000000):
                    pass

                print("3..")

#Delay Loop
                for i in range (25000000):
                    pass

                print("2..")

#Delay Loop
                for i in range (25000000):
                    pass

                print("1..")

#Delay Loop
                for i in range (25000000):
                    pass

                flag = 1
                break
                
            elif i != name[0]:
                flag = 0

            
#age module starts        
    age=int(input("What\'s your age? \n"))
    if age<16:
        print("Sorry you are not Eligible. \nCome back later when you are 16 or above")
        sys.exit()
    elif age>122:
        print("The oldest person ever to have lived is Jeanne Calment (France), who lived to be 122 years and 164 days")

#Delay Loop
        for i in range (25000000):
            pass

        print("Are you older than him")

#Delay Loop
        for i in range (25000000):
            pass

        print("Restarting the program..")

#Delay Loop
        for i in range (25000000):
            pass

        print("3..")

#Delay Loop
        for i in range (25000000):
            pass

        print("2..")

#Delay Loop
        for i in range (25000000):
            pass

        print("1..")

#Delay Loop
        for i in range (25000000):
            pass
        info()
        
    elif age==122:
        print("Wow the Oldest person on Earth is here")

#Delay Loop
        for i in range (25000000):
            pass
        
#age module ends
        
    
    k=pswd()
    return k


#date-time module
def data():
    today=date.today()
    day=today.day
    month=today.month
    year=today.year
    weekday=today.weekday()
    wk=""
    mt=""
    
    for key in week:
        if key==weekday:
            wk=week[key]

    for key in months:
        if key==month:
            mt=months[key]

    d_t=datetime.now()
    time=datetime.time(d_t)
    ch=int(input("What do you want to know: \nPress: \n1 for date\n2 for time\n3 for day\n"))

    if ch==1:
        print("Date today:",today)
        print("Current date:",day)
        print("Current Month:",mt)
        print("Current Year:",year)

    elif ch==2:
        print("Time:",time)

    elif ch==3:
        print("Day today:",wk)

    else:
        print("Wrong Input")
        for i in range(100000):
            print("Invalid!")
        sys.exit()
#date-time module ends


#calculator module
def add(x, y):
    return x + y


def subtract(x, y):
    return x - y


def multiply(x, y):
    return x * y


def divide(x, y):
    return x / y
#calc module ends


#question module
def ques():
    print("What do you want next:\n")
    print("Date/Time related\n")
    print("Calculation Related\n")
    
    
    q=input("Enter a question\n")
    q=q+' '
    ques=""
    for i in q:
        if i==' ':
            if ques=="Date" or ques=="date" or ques=="day" or ques=="Day" or ques=="Time" or ques=="time" or ques=="Calender"or ques=="calender":
                data()
                    
            elif ques=='Calculator' or ques=='calculator' or ques=='Calculation'or ques=='calculation' or ques=='Calc' or ques=='Calc' or ques=='add' or ques=='substract' or ques=='multiply' or ques=='divide' or ques=='Divide' or ques=='Substract' or ques=='Addition' or ques=='Multiply':
                print("Select operation.")
                print("1.Add")
                print("2.Subtract")
                print("3.Multiply")
                print("4.Divide")
                choice = input("Enter choice(1/2/3/4): ")
                if choice in ('1', '2', '3', '4'):
                    num1 = float(input("Enter first number: "))
                    num2 = float(input("Enter second number: "))
                    if choice == '1':
                        print(num1, "+", num2, "=", add(num1, num2))
                    elif choice == '2':
                        print(num1, "-", num2, "=", subtract(num1, num2))
                    elif choice == '3':
                        print(num1, "*", num2, "=", multiply(num1, num2))
                    elif choice == '4':
                        print(num1, "/", num2, "=", divide(num1, num2))
                    break
                else:
                    print("Invalid Input")
            else:
                ques=""
        else:
            ques=ques+i
    

    
def main():
    
    p=info()
    print("Your entered pswd is", p )
    ch1=input("To search something on browser\n \n Type 1 \n \n OR\n \n Press any key to continue\n")


#Browser module
    if ch1=='1':
        new=2
        url1="http://google.com"
        print("Opening the browser..")

#Delay Loop
        for i in range (25000000):
            pass

        print("3..")

#Delay Loop
        for i in range (25000000):
            pass

        print("2..")

#Delay Loop
        for i in range (25000000):
            pass

        print("1..")

#Delay Loop
        for i in range (25000000):
            pass

        webbrowser.open(url1,new=new)
#Delay Loop
        for i in range (25000000):
            pass


#question module
    else:
        ques()
           
main()
    
