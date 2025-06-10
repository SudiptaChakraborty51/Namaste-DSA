let n = 5;
for(let i = 0; i < n; i++) {
    let row = "";
    for(let j = 0; j <= i; j++) {
        row = row + (j+1) + " ";
    }
    console.log(row);
}

// Time Complexity: O(n²) — Each row can have up to n numbers.
// Space Complexity: O(n) — Temporary string to build each row.