/* 
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
*/

const fib = (n) => {
  if(n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(7));

/*
Time Complexity: O(2^n)
This is because each function call makes 2 recursive calls, leading to a binary tree of calls.
For large n, this becomes very inefficient, as many subproblems are solved repeatedly.
Space Complexity: O(n)
Although the number of calls is exponential, the maximum call depth is n.
So, the space used on the call stack is linear in the worst case.
*/