let n = 6;
let toggle = 1;
for(let i = 0; i < n; i++) {
    let row = "";
    for(let j = 0; j <= i; j++) {
        row = row + toggle;
        toggle === 1 ? toggle = 0 : toggle = 1;
    }
    console.log(row);
}

// Time Complexity: O(n²)
// Space Complexity: O(n) per row