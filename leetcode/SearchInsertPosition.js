/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let s =0, e=nums.length-1;
    let ind = nums.length;
    while(s<=e){
        let mid = Math.floor((s+e)/2);
        if(nums[mid]===target) return mid;
        else if(nums[mid]>target){
            e = mid-1;
            ind = mid;
        }else{
            s = mid+1
        }
    }
    return ind
};