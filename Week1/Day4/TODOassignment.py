print("Welcome to your To Do List!")

list1 = []

Choice = input("Press 1 to add task\n Press 2 to delete task\n Press 3 to view all tasks\n Press q to quit")

while Choice != "q":
    if Choice == "1":
        task_name = input("Please enter your task name")
        task_priority = input("Please select 'high', 'medium', or 'low' for your task priority")
        create_task = task_name + " " + task_priority
        list1.append(create_task)
        Choice = input("Press 1 to add task\n Press 2 to delete task\n Press 3 to view all tasks\n Press q to quit")

    elif Choice == "2" :
        delete_task = int(input("Which task would you like to delete?"))
        del list1[delete_task]
        Choice = input("Press 1 to add task\n Press 2 to delete task\n Press 3 to view all tasks\n Press q to quit")

    elif Choice == "3" :
        print(list1)
        Choice = input("Press 1 to add task\n Press 2 to delete task\n Press 3 to view all tasks\n Press q to quit")

    elif Choice == "q" :
        break

    else:
        print("Command is unknown.")
        Choice = input("Press 1 to add task\n Press 2 to delete task\n Press 3 to view all tasks\n Press q to quit")
