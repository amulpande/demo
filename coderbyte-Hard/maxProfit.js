            //  Max Stock Profit
function maxStockProfit(arr){
    let profit = 0
    for(let i = 0; i<arr.length; i++){
        let buyStock = arr[i];
        for(let j = i+1; j<arr.length; j++){
            let sellStock = arr[j]
            let maxProfit = sellStock - buyStock
            if(maxProfit > profit){
                profit = maxProfit
            }
        }
    }
    return profit
}
console.log(maxStockProfit([45, 24, 35, 31, 40, 38, 11]))