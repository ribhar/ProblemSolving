// Write a function in Javascript to print the sum of the first n fibonacci numbers.

// **Input:** 6

// **Output:**

// ```
// 1 1 2 3 5 8
// Sum: 20

function sumOfFib(n,fib){
    let sum = 0;
    for(let i=0; i<n; i++){
      sum+=fib(i)
    }
    return sum
  }
  function fib(n){
    if(n==1 || n==0){
      return 1
    }
    return fib(n-1)+fib(n-2)
  }
  
  console.log(sumOfFib(6,fib))