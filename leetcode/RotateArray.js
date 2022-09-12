/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    let n = nums.length;
    k = k%nums.length;
    
    let arr = []
    let s = n-k
    for(let i=s; i<n; i++){
        arr.push(nums[i])
        
    }
    arr = [...arr,...nums]
    for(let i=0; i<n; i++){
        nums[i] = arr[i]
    }
    console.log(nums)
}