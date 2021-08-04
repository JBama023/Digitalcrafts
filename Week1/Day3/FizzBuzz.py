number = int(input("Please Enter a Number: "))

if (number % 3) == 0 and (number % 5) == 0:
    print("FizzBuzz")
if (number % 3) == 0:
    print("Fizz")
if (number % 5) == 0:
    print("Buzz")