#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'extraLongFactorials' function below.
#
# The function accepts INTEGER n as parameter.
#
def fib(n):
    if n==0 or n==1:
        return n
    
    return n*fib(n-1)

def extraLongFactorials(n):
    # Write your code here
    print(fib(n))
    

if __name__ == '__main__':
    n = int(input().strip())

    extraLongFactorials(n)
