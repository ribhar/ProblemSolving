'use strict';

const fs = require('fs');

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
 * Complete the 'connectedCell' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function connectedCell(matrix) {
    // Write your code here
    let m = 0;
    
    let c = 0;
    
    function dfs(i,j){
        
        if(i >= 0 && j >= 0 && i <matrix.length && j < matrix[i].length && matrix[i][j]== 1){
            c++;
            m = Math.max(m,c);
            
            matrix[i][j] = 0;
            
            dfs(i+1,j);
            
            dfs(i,j+1);
            
            dfs(i,j-1);
            
            dfs(i-1,j);
            
            dfs(i-1,j-1);
            
            dfs(i-1,j+1);
            
            dfs(i+1,j-1);
            
            dfs(i+1,j+1)
            
        }
    }
    for(let i = 0; i < matrix.length; i++){
        
        for(let j = 0 ; j < matrix[i].length; j++){
            
            if( matrix[i][j] == 1 ){
                dfs(i,j); 
                c=0
            }
        }
    }
    return m

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const m = parseInt(readLine().trim(), 10);

    let matrix = Array(n);

    for (let i = 0; i < n; i++) {
        matrix[i] = readLine().replace(/\s+$/g, '').split(' ').map(matrixTemp => parseInt(matrixTemp, 10));
    }

    const result = connectedCell(matrix);

    ws.write(result + '\n');

    ws.end();
}
