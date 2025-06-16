// Write a function sum(n) that calculates the sum of the first n natural numbers using recursion.

const sumOfFirstNNumbers = (n) => {
    if(n == 0) return 0;
    return n + sumOfFirstNNumbers(n - 1);
}

console.log(sumOfFirstNNumbers(10));