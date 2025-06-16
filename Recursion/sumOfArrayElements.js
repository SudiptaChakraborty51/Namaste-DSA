//Write a function sum(n) that calculates the sum of all numbers in an array arr using recursion. It sums from index 0 to n.

const sumOfArrayElements = (n) => {
    if(n == 0) return arr[0];
    return arr[n] + sumOfArrayElements(n - 1);
}

let arr = [5, 4, 3, 2, 1];
console.log(sumOfArrayElements(arr.length - 1));

//time complexity -> O(n)
//space complexity => O(n) (due to call stack in recursion)