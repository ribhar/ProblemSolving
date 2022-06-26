// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example

// The unique element is .

// Function Description

// Complete the lonelyinteger function in the editor below.

// lonelyinteger has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the element that occurs only once
// Input Format

// The first line contains a single integer, , the number of integers in the array.
// The second line contains  space-separated integers that describe the values in .

// Constraints

// It is guaranteed that  is an odd number and that there is one unique element.
// , where .

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let n = +input[0].trim();
    let a = input[1].trim().split(' ').map(Number);
    console.log(funl(n,a));
   
  }

  function funl(n,a){
    let countBag = {};
    for(let i=0; i<a.length; i++){
        if(countBag[a[i]]==undefined){
            countBag[a[i]]=1;
        }else{
            countBag[a[i]]=countBag[a[i]]+1
        }
    }
    for(let x in countBag){
        if(countBag[x]==1){
            return x
        }
    }

  }
  if (process.env.USERNAME=== "hriti") {
    runProgram(`9
4 9 95 93 57 4 57 93 9`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }