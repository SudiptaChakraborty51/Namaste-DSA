// Given a binary array nums, return the maximum number of consecutive 1's in the array.

const findMaxConsecutiveOnes = (arr) => {
    let currCount = 0;
    let maxCount = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 1) {
            currCount++;
        } else {
            maxCount = Math.max(currCount, maxCount);
            currCount = 0;
        }
    }
    return Math.max(currCount, maxCount);
}

let arr = [0, 1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(arr));

//time complexity -> O(n)
//space complexity => O(1)