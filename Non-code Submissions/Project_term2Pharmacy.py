from tkinter import *
import tkinter.messagebox as tkMessageBox
import tkinter.ttk as ttk
import csv
import os
root = Tk()
root.title("Pharmacy Management System")
swidth = root.winfo_screenwidth()
sheight = root.winfo_screenheight()
width = 900
height = 500
x = (swidth / 2) - (width / 2)
y = (sheight / 2) - (height / 2)
root.geometry('%dx%d+%d+%d' % (width, height, x, y))
root.resizable(0, 0)

def additem():
    e1 = entry1.get() #get() - returns entry of the text as a string
    e2 = entry2.get()
    e3 = entry3.get()
    e4 = entry4.get()
    e5 = entry5.get()
    e6 = entry6.get()
    if entry1.get() == "" and entry2.get() == "" and entry3.get() == "" and entry4.get() == "" and entry5.get() == "" and entry6.get() == "":

        print("Error")
        tkMessageBox.displayerror("Error", "Entered information is wrong, please re-enter")

    else:
        result = tkMessageBox.query("Submit","You will be entering the following details\n" + e1 + "\n" + e2 + "\n" + e3 + "\n" + e4 + "\n" + e5 + "\n" + e6)
        entry1.delete(0, END)
        entry2.delete(0, END)
        entry3.delete(0, END)
        entry4.delete(0, END)
        entry5.delete(0, END)
        entry6.delete(0, END)
        if (result == "yes"):
            print("here")
            with open("pharmacy.csv", 'a') as csvfile:
                csvfile.write('{0}, {1}, {2}, {3},{4},{5}\n'.format(str(e1), e2, e3, str(e4), str(e5), e6))


            csvfile.close()
        else:
            entry1.set("")
            entry2.set("")
            entry3.set("")
            entry4.set("") #sets the text in the entry box
            entry5.set("")
            entry6.set("")

def deleteitem():
    ##    tree.delete(*tree.get_children())
    e1 = entry1.get()
    e2 = entry2.get()
    e3 = entry3.get()
    e4 = entry4.get()
    e5 = entry5.get()
    e6 = entry6.get()
    if entry1.get() == "" and entry2.get() == "" and entry3.get() == "" and entry4.get() == "" and entry5.get() == "" and entry6.get() == "":
        print("Error")
        tkMessageBox.displayerror("Error", "Entered information is wrong, please re-enter")
    else:
        result = tkMessageBox.query("Submit","You will be deleting the following details\n" + e1 + "\n" + e2 + "\n" + e3 + "\n" + e4 + "\n" + e5 + "\n" + e6)

        if (result == "yes"):
            print("here")
            with open("pharmacy.csv", 'r') as f, open("pharmacy1.csv", "w") as w1:
                for line in f:
                    if e1 not in line:
                        w1.write(line)
            os.remove("pharmacy.csv")
            os.rename("pharmacy1.csv", "pharmacy.csv")
            f.close()
            w1.close()

            entry1.delete(0, END)
            entry2.delete(0, END)
            entry3.delete(0, END)
            entry4.delete(0, END)
            entry5.delete(0, END)
            entry6.delete(0, END)
def updateitem():

    e1 = entry1.get()
    e2 = entry2.get()
    e3 = entry3.get()
    e4 = entry4.get()
    e5 = entry5.get()
    e6 = entry6.get()
    if entry1.get() == "" and entry2.get() == "" and entry3.get() == "" and entry4.get() == "" and entry5.get() == "" and entry6.get() == "":

        print("Error")
        tkMessageBox.displayerror("Error", "Entered information is wrong, please re-enter")
    else:
        result = tkMessageBox.query("Submit","You will be updating the following details\n" + e1 + "\n" + e2 + "\n" + e3 + "\n" + e4 + "\n" + e5 + "\n" + e6)

        if (result == "yes"):
            print("here")
            with open("pharmacy.csv", "r") as f1, open("pharmacy1.csv", "w") as working:
                for line in f1:
                    if str(e1) not in line:
                        working.write(line)
                    else:
                        working.write('{0}, {1}, {2}, {3},{4} ,{5}\n'.format(str(e1), e2, e3, str(e4), str(e5), e6))
            os.remove("pharmacy.csv")
            os.rename("pharmacy1.csv", "pharmacy.csv")
            entry1.delete(0, END)
            entry2.delete(0, END)
            entry3.delete(0, END)
            entry4.delete(0, END)
            entry5.delete(0, END)
            entry6.delete(0, END)


def viewitem():
    tree.delete(*tree.get_children())
    with open('pharmacy.csv', "r") as f:
        reader = csv.reader(f, delimiter=',')
        for row in reader:
            MedicineName = row[0]
            MedicinePrice = row[1]
            Quantity = row[2]
            Category = row[3]
            Description = row[4]
            Discount = row[5]
            tree.insert("",END, values=(MedicineName, MedicinePrice, Quantity, Category, Description, Discount))
    f.close()
    txt_result.config(text="Successfully read the data from database", fg="black") #configures this line which we want to print after the system reads data from the database and prints it on the right side



def clearitem():
    entry1.delete(0, END)
    entry2.delete(0, END)
    entry3.delete(0, END)
    entry4.delete(0, END)
    entry5.delete(0, END)
    entry6.delete(0, END)




MedicineName = StringVar()
MedicinePrice = StringVar()
Quantity = StringVar()
Category = StringVar()
Description = StringVar()
Discount = StringVar()

Top = Frame(root, width=900, height=50, bd=8, relief="raise")
Top.pack(side=TOP)
Left = Frame(root, width=200, height=500, bd=8, relief="raise")
Left.pack(side=LEFT)
Right = Frame(root, width=600, height=500, bd=8, relief="raise")
Right.pack(side=RIGHT)
Forms = Frame(Left, width=300, height=450)
Forms.pack(side=TOP)
Buttons = Frame(Left, width=300, height=250, bd=8, relief="raise")
Buttons.pack(side=BOTTOM)

txt_title = Label(Top, width=900, font=('Times New Roman', 24), fg='Green', text="Healthcare Pharmacy Plus +")
txt_title.pack()
label0 = Label(Forms, text="Medicine Name:", fg='Blue', font=('Times New Roman', 18), bd=15)
label0.grid(row=0, stick="e")
label1 = Label(Forms, text="Price:", fg='Blue', font=('Times New Roman', 18), bd=15)
label1.grid(row=1, stick="e")
label2 = Label(Forms, text="Quantity:", fg='Blue', font=('Times New Roman', 18), bd=15)
label2.grid(row=2, stick="e")
label3 = Label(Forms, text="Category Type:", fg='Blue', font=('Times New Roman', 18), bd=15)
label3.grid(row=3, stick="e")
label4 = Label(Forms, text="Medicine Description:", fg='Blue', font=('Times New Roman', 18), bd=15)
label4.grid(row=4, stick="e")
label5 = Label(Forms, text="Discount:", fg='Blue', font=('Times New Roman', 18), bd=15)
label5.grid(row=5, stick="e")
txt_result = Label(Buttons)
txt_result.pack(side=TOP) #puts widgets inside a frame

entry1 = Entry(Forms, textvariable=MedicineName, width=30)
entry1.grid(row=0, column=1)
entry2 = Entry(Forms, textvariable=MedicinePrice, width=30)
entry2.grid(row=1, column=1)
entry3 = Entry(Forms, textvariable=Quantity, width=30)
entry3.grid(row=2, column=1)
entry4 = Entry(Forms, textvariable=Category, width=30)
entry4.grid(row=3, column=1)
entry5 = Entry(Forms, textvariable=Description, width=30)
entry5.grid(row=4, column=1)
entry6 = Entry(Forms, textvariable=Discount, width=30)
entry6.grid(row=5, column=1)


btn_add = Button(Buttons, width=10, text="ADD", command=additem)
btn_add.pack(side=LEFT)
btn_delete = Button(Buttons, width=10, text="Delete", command=deleteitem)
btn_delete.pack(side=LEFT)
btn_update = Button(Buttons, width=10, text="UPDATE", command=updateitem)
btn_update.pack(side=LEFT)
btn_view = Button(Buttons, width=10, text="View", command=viewitem)
btn_view.pack(side=LEFT)
btn_clear = Button(Buttons, width=10, text="CLEAR", command=clearitem)
btn_clear.pack(side=LEFT)

scrollbary = Scrollbar(Right, orient=VERTICAL)
scrollbarx = Scrollbar(Right, orient=HORIZONTAL)
tree = ttk.Treeview(Right, columns=("MedicineName", "MedicinePrice", "Quantity", "Category", "Description", "Discount"),
                    selectmode="extended", height=400, yscrollcommand=scrollbary.set, xscrollcommand=scrollbarx.set)#viewing in tabular form
scrollbary.config(command=tree.yview)
scrollbary.pack(side=RIGHT, fill=Y)
scrollbarx.config(command=tree.xview)
scrollbarx.pack(side=BOTTOM, fill=X)

tree.heading('MedicineName', text="MedicineName", anchor=W)
tree.heading('MedicinePrice', text="Price", anchor=W)
tree.heading('Quantity', text="Quantity", anchor=W)
tree.heading('Category', text="Category Type", anchor=W)
tree.heading('Description', text="Medicine Description", anchor=W)
tree.heading('Discount', text="Discount", anchor=W)
tree.column('#0', stretch=NO, minwidth=20, width=0)
tree.column('#1', stretch=NO, minwidth=0, width=80)
tree.column('#2', stretch=NO, minwidth=0, width=80)
tree.column('#3', stretch=NO, minwidth=0, width=80)
tree.column('#4', stretch=NO, minwidth=0, width=80)
tree.column('#5', stretch=NO, minwidth=0, width=80)

tree.pack()


if __name__ == '__main__':
    root.mainloop()