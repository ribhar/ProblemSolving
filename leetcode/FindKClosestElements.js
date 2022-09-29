// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b
 

// Example 1:

// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]
// Example 2:

// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]
 

// Constraints:

// 1 <= k <= arr.length
// 1 <= arr.length <= 104
// arr is sorted in ascending order.
// -104 <= arr[i], x <= 104
// Accepted
// 365,727
// Submissions
// 789,697
var findClosestElements = function(arr, k, x) {
    if(arr[0]>x) return arr.slice(0,k)
    if(arr[arr.length-1]<x) return arr.slice(-k)
    
    let obj = {}
    for(let i=0; i<arr.length; i++){
        obj[i] = Math.abs(arr[i]-x)

    }
    console.log(obj)
    for(let a in obj){
        
    }
};