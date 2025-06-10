const smallestNumInArr = (arr) => {
    let smallestNum = Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smallestNum) {
            smallestNum = arr[i];
        }
    }
    return smallestNum;
}

let arr = [67, 89, 45, 34, 12, 9];
console.log(smallestNumInArr(arr));

// Time Complexity: O(n) – where n is the number of elements in the array.
// Space Complexity: O(1) – only one variable is used.