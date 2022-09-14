/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let i=1; j=0;
    while(i<nums.length && j<nums.length){
        if(nums[j]!==0){
            j++
            i++
        }else if(nums[j]==0 && nums[i]!==0){
            [nums[j],nums[i]] = [nums[i],nums[j]];
            j++
            i++
        }else if(nums[j]==0 && nums[i]==0){
            i++
        }
    }
   return nums
};