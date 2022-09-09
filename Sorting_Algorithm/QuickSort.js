let arr = [3,5,0,9,8]
let N = arr.length
funl(arr,0,N-1)

console.log(arr.join(" "))

function funl(arr,left,right){
    if(left>=right) return 

    let ind = partition(arr,left,right)
    funl(arr,left,ind-1)
    funl(arr,ind+1,right)
}
function partition(arr,left,right){
    // let random = Math.floor(Math.random()*(right-left)+left)
    // [arr[left],arr[random]] = [arr[random],arr[left]]
    let pivot = arr[left];
    let i = left;
    let j = right;
    while(i<j){
        while(arr[i]<= pivot && i<right) i++
        while(arr[j]> pivot && j>left) j--
        if(i<j) [arr[i],arr[j]] = [arr[j],arr[i]]
    }
    [arr[left],arr[j]] = [arr[j],arr[left]]
    return j
    
}