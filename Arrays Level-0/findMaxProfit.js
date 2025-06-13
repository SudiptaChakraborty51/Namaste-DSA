// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

const findMaxProfit = (p) => {
    let minProfit = p[0];
    let maxProfit = 0;
    for(let i = 1; i < p.length ; i++) {
        if(p[i] - minProfit > maxProfit) {
            maxProfit = p[i] - minProfit;
        }
        if(p[i] < minProfit) {
            minProfit = p[i];
        }
    }
    return maxProfit;
}

let prices = [7,1,5,3,6,4];
console.log(findMaxProfit(prices));

//time complexity -> O(n)
//space complexity => O(1)