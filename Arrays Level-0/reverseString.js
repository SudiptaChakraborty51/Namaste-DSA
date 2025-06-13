const reverseString = (s) => {
    for(let i = 0; i < Math.floor(s.length / 2); i++) {
        let temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;
    }
    return s;
}

let arr = ["s", "u", "d", "i", "p", "t", "a"];
console.log(reverseString(arr));

//time complexity -> O(n)
//space complexity => O(1)