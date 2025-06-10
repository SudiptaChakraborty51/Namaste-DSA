const countOfNegativeNumbersInArr = (arr) => {
    if(arr.length === 0) {
        return "Empty Array";
    }
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            count++;
        }
    }
    return count;
}

let arr = [2, -7, 6, -9, 4, -6];
console.log(countOfNegativeNumbersInArr(arr));

// Time Complexity: O(n) – where n is the number of elements in the array.
// Space Complexity: O(1) – only a counter variable is used.