print("Welcome to Calculator!")

operand = input("Enter Add, Subtract, Multiply, or Divide")

first_number = int(input("Enter first Number"))

second_number = int(input("Enter second Number"))

if operand == ("Add") :
    print(first_number + second_number)
if operand == ("Subtract") :
    print(first_number - second_number)
if operand == ("Multiply") :
    print(first_number * second_number)
if operand == ("Divide") :
    print(first_number / second_number)