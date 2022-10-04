// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 
// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

function funl(arr){
    let temp = []
    let ans = []
    function bt(temp,arr,ans){
        if(arr.length===0){
            ans
        }
        for(let i=0; i<arr.length; i++){
            temp.push(arr[i])
            arr.splice(i,1)
            bt(temp,arr,ans)
            arr.splice(i,0,temp.pop())
        }
    }

    bt(temp,arr,ans)
    return ans
}
console.log(funl([1,2,3]))