// equal sum partion
// Description



// Output
// Print "yes" or "no" without quotes.


// Sample Input 1 

// 6
// 1 2 3 4 5 7
// 
// Sample Output 1

// yes


function runProgram(input) {
    // Write code here
    let arr = input.trim().split(' ').map(Number);
    let n = arr.length;
    let s = 0
    for(x of arr){
        s+= x;
    }
    if(s%2!=0){
        console.log("NO")
    }else{
        console.log(funl(n,arr,s/2)? "YES" : "NO")
    }
    
   
  }
  function funl(n,arr,sum){
    let dp =[];  
    for(let i=0; i<=n; i++){
        let col = [];
        for(let j=0; j<=sum; j++){
            if(i==0){
                col.push(false)
            }
            if(j==0){
                col.push(true)
            }
            else{
                col.push(-1)
            }
        }
        dp.push(col)
    }
    // console.log(dp)
    for(let i=1; i<=n; i++){
        for(let j=1; j<=sum; j++){
            if(dp[i-1]<=[j]){
                dp[i][j] = dp[i-1][j-arr[i-1]] || dp[i-1][j]
            }else{
                dp[i][j] = dp[i-1][j];
            }
        }
        return dp[n][sum]
    }
     
  }

  if (process.env.USERNAME=== "hriti") {
    runProgram(`1 2 3 4 5 7`);
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