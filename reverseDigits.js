const reverseDigits = (n) => {
    let rev = 0;
    let nCopy = n;
    n = Math.abs(n);
    while(n > 0) {
        let rem = n % 10;
        rev = (rev * 10) + rem;
        n = Math.floor(n / 10);
    }

    let limit = Math.pow(2, 31); // 32-bit signed integer
    if(rev < -limit || rev > limit) return 0;

    return nCopy < 0 ? -rev : rev;
}

console.log(reverseDigits(-123));
// console.log(reverseDigits(1534236469));

// Time Complexity: O(d) where d is the number of digits.
// Space Complexity: O(1) — constant space.