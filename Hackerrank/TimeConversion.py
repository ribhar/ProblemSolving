def timeConversion(s):
    # Write your code here
    hour = s[:2]
    mi = s[2:8]
    s = s[8:]
    
    if s =="AM":
        if hour=="12":
            hour = "00"
    elif s =="PM":
        if hour!="12":
            hour =int(hour)+12
          
    return str(hour)+mi

print(timeConversion("11:59:59PM"))