'''
Simple way of doing the same!
import calendar
month,date,year = map(int,input().split())
print((calendar.day_name[calendar.weekday(year,month,date)]).upper())
'''

#I will tell you the day of any given date

def isleap(year1):
    if year1 % 100 == 0 :
        if year1 % 400 == 0:
            return 1
        else :
            return 0
    else :
        if year1 % 4 == 0:
            return 1
        else :
            return 0

def validDate(date1, month1, year1):

    if (date1 > 31) or (month1 > 12):
        return 0

    elif not isleap(year1):
        if (month1 == 2) and (date1 > 28):
            return 0

        else:
            return 1

    elif isleap(year1):
        if (month1 == 2) and (date1 > 29):
            return 0
        else:
            return 1

    else :
        return 1

def extradaysDate(date1):
    return date1 % 7

def extradaysMonth(month1 , year3):
    if isleap(year3) == 1:
        
        if month1 == 1:
            return 0
        
        elif month1 == 2:
            return 3

        elif month1 == 3:
            return 4

        elif month1 == 4:
            return 7
        
        elif month1 == 5:
            return 9

        elif month1 == 6:
            return 12

        elif month1 == 7:
            return 14

        elif month1 == 8:
            return 17

        elif month1 == 9:
            return 20

        elif month1 == 10:
            return 22

        elif month1 == 11:
            return 25

        elif month1 == 12:
            return 27

    if isleap(year3) == 0:
        
        if month1 == 1:
            return 0
        
        elif month1 == 2:
            return 3

        elif month1 == 3:
            return 3

        elif month1 == 4:
            return 6
        
        elif month1 == 5:
            return 8

        elif month1 == 6:
            return 11

        elif month1 == 7:
            return 13

        elif month1 == 8:
            return 16

        elif month1 == 9:
            return 19

        elif month1 == 10:
            return 21

        elif month1 == 11:
            return 24

        elif month1 == 12:
            return 26

def extradaysYear(year1):

    realYears = year1 % 400

    def extradaysCentury(realYears1):
        century = int(realYears1 / 100)

        if century == 1:
            return 5
        
        elif century == 2:
            return 3

        elif century == 3:
            return 1

        else :
            return 0

    remainningYears = realYears % 100

    leapYears = int( remainningYears/4 )
    nleapYears = remainningYears - leapYears

    edYears = ((2*leapYears) + nleapYears) % 7

    extradaysYears = (edYears + extradaysCentury(realYears)) % 7

    return extradaysYears

def edtodays(extraDays1):

    if extraDays1 == 0:
        return "SUNDAY"

    elif extraDays1 == 1:
        return "MONDAY"

    elif extraDays1 == 2:
        return "TUESDAY"

    elif extraDays1 == 3:
        return "WEDNESDAY"

    elif extraDays1 == 4:
        return "THURSDAY" 

    elif extraDays1 == 5:
        return "FRIDAY"

    else :
        return "SATURDAY"

def extradaysTotal(date2, month2, year2):

    if validDate(date2, month2, year2):
        extradays = extradaysDate(date2) + extradaysMonth(month2, year2) + extradaysYear(year2 -1)
        extradays = extradays % 7

        day = edtodays(extradays)
        return day

    else:
        print("Invalid Date")
        quit()

print("\nDate to Day \n")

date = int(input("Date : "))
month = int(input("Month : "))
year = int(input("Year : "))

theday = extradaysTotal(date, month, year)

print(f"The day on {date}, {month}, {year} : {theday}")
