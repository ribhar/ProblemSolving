'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'decentNumber' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function decentNumber(n) {
    // Write your code here
    if( n < 3 ){
        console.log("-1")
    }else if( n % 3 == 0){
        
        let bag  = "";
        
        for(let i = 0; i < n; i++){
            bag += '5'
        }
        
        console.log(bag)
    }else{
        
        let a = 5;
        
        while( n-a > 0 ){
            if( ( n - a ) % 3 != 0 ) a += 5
            else break
        }
        if( n - a >= 0 ){
            
            let bag="";
            
            for( let i = 0; i < n-a; ++i){
                bag += '5'
            }
            for( let i = 0 ; i < a; ++i){
                bag += '3'  
            }
            
            console.log(bag)
            
        }else{
            console.log("-1")
        }
    }
}



function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        decentNumber(n);
    }
}
