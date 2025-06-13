// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

const moveZerosToEnd = (arr) => {
    let x = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            arr[x] = arr[i];
            x++;
        }
    }
    for(let i = x; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}

const arr = [0,1,0,3,12];
console.log(moveZerosToEnd(arr));

//time complexity -> O(n)
//space complexity => O(1)