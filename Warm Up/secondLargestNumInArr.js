const secondLargestNumInArr = (arr) => {
    let largestNum = -Infinity;
    let secondLargestNum = -Infinity;
    if(arr.length < 2) return "Array should have at least two numbers";
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largestNum) {
            secondLargestNum = largestNum;
            largestNum = arr[i];
        } else if(arr[i] > secondLargestNum && arr[i] !== largestNum) {
            secondLargestNum = arr[i];
        }
    }
    return secondLargestNum === -Infinity ? "No second largest number found" : secondLargestNum;
}

let arr = [6, 89, -45, 34, 12, -9];
console.log(secondLargestNumInArr(arr));

// Time Complexity: O(n) – where n is the number of elements in the array.
// Space Complexity: O(1) – Constant space used for two variables.