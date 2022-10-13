st=[ ]
def push():
    sn=input("Enter any Number")
    st.append(sn)
def pop():
    if(st==[]):
        print("Stack is empty")
    else:
        print("Deleted Number is :",st.pop())