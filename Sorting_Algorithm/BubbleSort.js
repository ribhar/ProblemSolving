let arr = [3,5,0,9,8]
let N = arr.length

for(let i=0; i<N-1; i++){
    for(let j=0; j<N-i-1; j++){
        if(arr[j]>arr[j+1]) [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
    }
}
console.log(arr.join(" "))