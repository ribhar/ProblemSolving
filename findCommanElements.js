const arr1 = [1, 5, 7, 8, 10, 15, 16, 19];
const arr2 = [2, 3, 7, 10, 12, 15, 30, 34];



let commonElements = [];

// 1. Looping:
// This is the simplest approach, but it can be inefficient for large datasets due to its O(n^2) time complexity. Here's the code:

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      commonElements.push(arr1[i]);
      break; // Avoid duplicates
    }
  }
}

console.log("Common elements using looping:", commonElements);


// 2. Sets:
// Using sets offers better performance with O(n + m) time complexity. Here's the code:

let set1 = new Set(arr1)
let set2 = new Set(arr2)

commonElements = [...set1].filter(element => set2.has(element))
console.log("Common elements using sets:", commonElements);

