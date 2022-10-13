#the car game

command = ""
car_started = False
distance = 0
journey = 0

while True:

    command = input(">>").lower()

    if command == "start":

        if car_started:
            print("Hey! The car is already started")

        else:
            print("Car started...")
            car_started = True



    elif command == "stop":

        if not car_started:
            print("Hey! The car is already stopped")

        else:
            print("Car stopped")
            car_started = False



    elif command == "help":
        print("""
start - to start the Car
stop - to stop the Car
quit - to quit
        """)


    elif command =="quit":
        break

    else:
        print("Sorry, I don't understand")
