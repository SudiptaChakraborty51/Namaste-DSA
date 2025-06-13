// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

let arr = [2, 1, 2, 4, 1];

// using bitwise xor method with O(n) time complexity, O(1) space complexity
const findSingleNumber = (arr) => {
    let xor = 0;
    for(let i = 0; i < arr.length; i++) {
        xor = xor ^ arr[i];
    }
    return xor;
}

// using hash map with O(n) time complexity, O(n) space complexity because The hash map may store counts for up to n elements in the worst case.
// const findSingleNumber = (arr) => {
//     let hash = {};
//     for(let i = 0; i < arr.length; i++) {
//         if(!hash[arr[i]]) {
//             hash[arr[i]] = 1;
//         } else {
//             hash[arr[i]]++;
//         }
//     }
//     for(let i = 0; i < arr.length; i++) {
//         if(hash[arr[i]] == 1) {
//             return arr[i];
//         }
//     }
// }

console.log(findSingleNumber(arr));