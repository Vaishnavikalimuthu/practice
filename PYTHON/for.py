value = int(input("Enter the input values :"))

l = []

for i in range(0,value):
    inp =input("Enter the input to create list:")
    
    if(inp == "append"):
        ap_in = int(input("enter the value to append:"))
        l.append(ap_in)
    elif(inp == "insert"):
        ins = int(input("Enter the value to insert:"))
        pos = int(input("enter the position value:"))
        l.insert(pos,ins)
    elif(inp == "pop"):
        l.pop()
    elif(inp == "remove"):
        re = int(input("Enter the value to remove:"))
        l.remove(re)
    elif(inp == "print"):
        print(l)
    else:
        print("please enter the valid input")    
