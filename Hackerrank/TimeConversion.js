// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

// Example



// There are  instances of ',  of '' and  of ''. For each query, add an element to the return array, .

// Function Description

// Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in strings.

// matchingStrings has the following parameters:

// string strings[n] - an array of strings to search
// string queries[q] - an array of query strings
// Returns

// int[q]: an array of results for each query
// Input Format

// The first line contains and integer , the size of .
// Each of the next  lines contains a string .
// The next line contains , the size of .
// Each of the next  lines contains a string .

// Constraints



//  .

// Sample Input 1

// CopyDownload
// 4
// aba
// baba
// aba
// xzxb
// 3
// aba
// xzxb
// ab
// Sample Output 1

// 2
// 1
// 0

// Sample Input 2

// CopyDownload
// 3
// def
// de
// fgh
// 3
// de
// lmn
// fgh
// Sample Output 2

// 1
// 0
// 1

// Sample Input 3

// CopyDownload
// 13
// abcde
// sdaklfj
// asdjf
// na
// basdn
// sdaklfj
// asdjf
// na
// asdjf
// na
// basdn
// sdaklfj
// asdjf
// 5
// abcde
// sdaklfj
// asdjf
// na
// basdn
// Sample Output 3

// 1
// 3
// 4
// 3
// 2

// Language
// JavaScript (Node.js)

// More
function runProgram(input) {
    input = input.trim().split('\n');
    let n = +input[0].trim();
    let l = 1;
    let str = []
    for(let i=0; i<n;i++){
        str.push(input[l++].trim())
    }
    n = +input[l++].trim();
    let query= [];
    for(let i=0; i<n;i++){
        query.push(input[l++].trim())
    }
    console.log(funl(str,query));
  }
  function funl(strings,queries){
    let ans = [];
    let word = {};
    for(let i=0; i<strings.length; i++){
        if(word[strings[i]]!=undefined){
            word[strings[i]] = word[strings[i]]+1;
        }else{
            word[strings[i]] = 1;
        }
    }
    
    for(let j=0; j<queries.length; j++){
        if(word[queries[j]]!=undefined){
            ans.push(word[queries[j]])
        }else{
            ans.push(0)
        }
    }
    
    
    return ans
  }
  if (process.env.USERNAME=== "hriti") {
    runProgram(`4
    aba
    baba
    aba
    xzxb
    3
    aba
    xzxb
    ab`);
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