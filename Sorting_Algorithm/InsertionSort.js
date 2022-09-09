let arr = [3,5,0,9,8]
let N = arr.length

for(let i=1; i<N; i++){
    let curr = arr[i];
    let j = i-1;
    while(j>=0 && arr[j] > curr){
        arr[j+1] = arr[j--]
    }
    arr[j+1] = curr
}
console.log(arr.join(" "))