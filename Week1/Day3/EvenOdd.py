print("This program will tell you if a number is even or odd!")

number = int(input("type in a number"))
if (number % 2) == 0:
    print(f"{number} is Even")
else:
    print(f"{number} is Odd")