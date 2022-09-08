let arr = [3,5,0,9,8]
let N = arr.length

for(let i=0; i<N-1; i++){
    ind = i;
    for(let j=i+1; j<N; j++){
        if(arr[j]<arr[ind]) ind = j
    }
    [arr[ind],arr[i]] = [arr[i],arr[ind]]
}
console.log(arr.join(" "))