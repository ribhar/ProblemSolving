// Write a function in Javascript to print the following pattern.

// ```
//       1
//     1 2 1
//   1 2 3 2 1
// 1 2 3 4 3 2 1
// ```

// The function can take the number of rows as input. The pattern should be printed in the console. Minimum number of rows should be 3.

// let str ="level"

function printPiramid(n){
    for(let i=1; i<=n; i++){
     let bag = ""
     for(let j=0; j<=n-i; j++){
         bag+= ' ';
     }
     for(let j=1; j<=i; j++){
         bag+=j
     }
     for(let j=i-1; j>=1; j--){
         bag+=j
     }
     console.log(bag)
    }
 
     
 }
 
 console.log(printPiramid(4))