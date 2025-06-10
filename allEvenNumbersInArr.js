const allEvenNumbersInArr = (arr) => {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            count++;
            console.log(arr[i]);
        }
    }
    if(arr.length === 0) console.log("Empty Array");
    if(arr.length !== 0 && count === 0) console.log("No Even number present in the array");
}

let arr = [2, 3, 4, 5, 6, 7];
allEvenNumbersInArr(arr);