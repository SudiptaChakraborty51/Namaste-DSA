// Linear Search is a simple search algorithm used to find a specific element in an array. It checks each element of the array one by one until the target value is found or the end of the array is reached.

const linearSearch = (arr, target) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == target) {
            return i;
        }
    }
    rerurn - 1;
}

const arr = [2, 4, 5, 10, 7, 8, 23];
console.log(linearSearch(arr, 10));

// time complexity: O(n)
// space complexity: O(1)