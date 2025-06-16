// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

const findMissingNumber = (arr) => {
    let n = arr.length;
    let totalSum = n * (n + 1) / 2;
    let partialSum = 0;

    for(let i = 0; i < n; i++) {
        partialSum = partialSum + arr[i];
    }

    return totalSum - partialSum;
}

const arr = [9,6,4,2,3,5,7,0,1];
console.log(findMissingNumber(arr));

//time complexity -> O(n)
//space complexity => O(n) (due to call stack in recursion)


// let sum = 0;
// for (let i = n; i > 0; i--) {
//     sum = sum + i;
// }
// console.log(sum)
//time complexity -> O(n)
//space complexity => O(1)