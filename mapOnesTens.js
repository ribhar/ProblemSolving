// Input: 4679 
//   Output: { 1: 9, 10: 7, 100: 6, 1000:4 }

let output = {}
let n = 4679;

let key = "1"
let keyCount = 0

while(n>0){
  let digit = n%10;
  
  output[key] = digit;
  keyCount++
  key+="0"
  n = Math.floor(n/10);
}
console.log(output)
