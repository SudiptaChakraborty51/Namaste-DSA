//Write a recursive function sum(n) that calculates the sum of all odd numbers in an array arr up to index n.

const sumOfOddArrayElements = (n) => {
    const isOdd = arr[n] % 2 != 0;
    if(n == 0) return isOdd ? arr[0] : 0;
    return (isOdd ? arr[n] : 0) + sumOfOddArrayElements(n - 1);
}

let arr = [5, 4, 3, 2, 1];
console.log(sumOfOddArrayElements(arr.length - 1));

//time complexity -> O(n)
//space complexity => O(n) (due to call stack in recursion)