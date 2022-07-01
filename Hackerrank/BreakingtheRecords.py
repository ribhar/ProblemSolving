#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'breakingRecords' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts INTEGER_ARRAY scores as parameter.
#

def breakingRecords(scores):
    # Write your code here
    min = scores[0]
    max = scores[0]
    # print( len(scores)+1)
    cmin = 0
    cmax = 0
    for x in range(1,len(scores)):
        if scores[x]<min:
            min = scores[x]
            cmin+=1
        if scores[x]>max:
            max = scores[x]
            cmax+=1
            
    return [cmax,cmin]
    

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    scores = list(map(int, input().rstrip().split()))

    result = breakingRecords(scores)

    fptr.write(' '.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
