
// function countingAnagram(str){
//     let arr = str.split(' ')
//     let anagram = 0;
//     for(let i=0;i<arr.length; i++){
//         for(let j = i+1; j<arr.length; j++){
//             if(arr[i] ==  arr[j]){
//                 break;
//             }
//             if(arr[i].split('').sort().join() == arr[j].split('').sort().join()){
//                 anagram +=1
//                 break
//             }
//         }
//     }
//     return anagram
// }
// console.log(countingAnagram('aa aa odg dog gdo'))
// console.log(countingAnagram('cars are very cool so are arcs and my os"'))
// console.log(countingAnagram('a c b c run urn urn'))

// function queenCheck(strArr){
//     let piece = strArr.map((pieces)=>{
//         const piecesX = pieces[1]
//         const piecesY = pieces[3]
//         return {piecesX,piecesY}
//     })
//     for(let  i = 0; i<piece.length; i++){
//         for(let j=i; j<piece.length; j++){
//             let queen1 = piece[i]
//             let queen2 = piece[j]

//             if(queen1.piecesX === queen2.piecesX || queen1.piecesY === queen2.piecesY 
//                 || Math.abs(queen1.piecesX - queen2.piecesX) === Math.abs(queen1.piecesY - queen2.piecesY)){
//                 return `${queen1.piecesX},${queen1.piecesY}`
//             }
//             // console.log(queen1.piecesX)
//         }
//     }
//     return true
//     // return piece
// }
// console.log(queenCheck(["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)","(1,6)", "(7,7)", "(5,8)"]))

// function blackJack(strArr){
//     let card = {
//         'two':2,
//         'three':3,
//         'four':4,
//         'five':5,
//         'six':6,
//         'seven':7,
//         'eight':8,
//         'nine':9,
//         'ten':10,
//         'jack':10,
//         'queen':10,
//         'king':10,
//         'ace':11
//     }

//     let hasAce = false
//     let highCard = null
//     let totalValue = 0
//     for(let i=0; i<strArr.length; i++){
//         let cardValuefromSet = card[strArr[i]]
//         totalValue += cardValuefromSet 
//         if(strArr[i] === 'ace'){
//             hasAce = true
//         }
//         // console.log(totalValue)
//         if(!highCard || cardValuefromSet >= card[highCard]){
//             highCard = strArr[i]
//             // console.log(highCard)
//         }
//     }
//     if(totalValue > 21) return 'above '+ highCard
//     if(totalValue < 21) return 'below '+highCard
//     if(totalValue === 21) return 'blackjack ' + highCard 
//     // return highCard
//     // return totalValue
// }
// console.log(blackJack(["four","ten","king"]))
// console.log(blackJack(["ten","ace"]))

// function maxProfit(arr){
//     let maxProfit = 0
//     for(let i=0; i<arr.length; i++){
//         let buyStock = arr[i]
//         for(let j=i+1; j<arr.length;j++){
//             let sellStock = arr[j]
//             let profit = sellStock - buyStock
//             if(profit > maxProfit){
//                 maxProfit = profit
//             }
//         }
//     }
//     return maxProfit
// }
// console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]))

// function arrayCouples(arr){
//     let notMatchedPairs = []
//     for(let i = 0; i< arr.length; i+=2){
//         let left = arr[i]
//         let right = arr[i+1]
//         if(!checkCouples(arr,[right,left],i)){
//             notMatchedPairs.push([left,right])
//         }
//     }
//     return notMatchedPairs.length === 0 ? 'yes' : notMatchedPairs.join(',')
// }
// function checkCouples(arr, pairs,index){
//     let [left , right] = pairs
//     for(let i=0; i<arr.length; i+=2){
//         if(index !== i && arr[i] === left && arr[i+1] == right){
//             return true
//         }
//     }
//     return false
// }
// console.log(arrayCouples([4, 5, 1, 4, 5, 4, 4, 1]))
// console.log(arrayCouples([6, 2, 2, 6, 5, 14, 14, 1]))


// function arrayCouples(arr){
//     let notMatchedPairs = []
//     for(let i=0; i<arr.length; i+=2){
//         let left = arr[i]
//         let right = arr[i+1]
//         if(!checkPairsCouple(arr , [right,left], i)){
//             notMatchedPairs.push([left,right])
//         }
//     }
//     return notMatchedPairs.length === 0 ? 'yes' : notMatchedPairs.join(',')
// }
// function checkPairsCouple(arr, pairs, indexNotToAdd){
//     let [left, right] = pairs
//     // console.log(left , right)
//     for(let i = 0; i<arr.length; i++){
//         if(indexNotToAdd != i && arr[i] == left && arr[i+1] == right){
//             // console.log(i)
//             return true
//         }
//     }
//     return false
// }

// console.log(arrayCouples([4, 5, 1, 4, 5, 4, 4, 1]))
// console.log(arrayCouples([6, 2, 2, 6, 5, 14, 14, 1]))
// function countingMinutes(str){
//     let [start,end] = str.split('-')
//     // return start
//     function getMinute(timeStr){
//         let [hour, minute] = timeStr.slice(0,-2).split(':')
//         hour = parseInt(hour)
//         minute = parseInt(minute)
//         let totalTime = hour*60 + minute
//         const isPm = timeStr.slice(-2)==='pm'
//         return isPm ? totalTime + 720 : totalTime
//     }

//     return (getMinute(end) - getMinute(start) + 1440)%1440
// }
// console.log(countingMinutes('12:30pm-12:00am'))


/*
QUESTION:
Have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit 
number with at least two distinct digits. Your program should perform the following routine on 
the number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number),
 and subtract the smaller number from the bigger number. 
 Then repeat the previous step. Performing this routine will always cause you to reach 
 a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). 
 Your program should return the number of times this routine must be performed until 6174 is reached. 
 For example: if num is 3524 your program should return 3 because of the 
 following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174.

Hard challenges are worth 15 points and you are not timed for them.
*/

/* NOTE:
This is an interesting mathematical constant, wherein there are at most 8 iterations before we arrive at the constant 6174. Note also that repeating digits (eg. 1111, 2222 etc) will arrive at the constant 0000. For a full solution, we must account for this also.
*/

// function KaprekarsConstant(num) {
//     if (num === 6174) return 0
//     if (num === 0 || num === 1111 || num === 2222 || num === 3333 || num === 4444 || num === 5555|| num === 6666 || num === 7777 || num === 8888|| num === 9999) {
//         return 0
//     }
//     let num1 = []
//     num1 = num.toString().split('').sort((a,b) => parseInt(b)-parseInt(a))
//     if(num1.length < 4){
//         for(let i=0; i<4-num1.length; i++){
//             num1.push(0)
//         }
//     }
//     let n1 = parseInt(num1.join(''))
//     let n2 = num1.reverse().join('')
//     return 1+KaprekarsConstant(Math.abs(n1-parseInt(n2)))
// }

// console.log(KaprekarsConstant(5432))
// console.log(KaprekarsConstant(6174))

// function maximumSquare(strArr){
//     let arr = []
//     let hasOne = false
//     for(let i=0; i<strArr.length; i++){
//         arr.push(strArr[i].split(''))
//     }
//     for(let i=0; i<strArr.length; i++){
//         for(let j=0; j<arr[i].length; j++){
//             arr[i][j] = parseInt(arr[i][j])
//             if(arr[i][j]===1) hasOne = true
//             if(i>0) arr[i][j] += arr[i-1][j]
//             if(j>0) arr[i][j] += arr[i][j-1]
//             if(i>0  && j>0) arr[i][j]-= arr[i-1][j-1]
//         }
//     }
//     if(!hasOne) return 0
//     let max = 1;
//     let sum = 0
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr[i].length; j++){
//             for(let k=1; k<arr.length; k++){
//                 let end_i = i+k
//                 let end_j = j+k
//                 if(end_i >= arr.length || end_j >= arr[i].length){
//                     break;
//                 }
//                 sum = arr[end_i][end_j]
//                 if(i > 0) sum -= arr[i-1][end_j]
//                 if(j > 0) sum -= arr[end_i][j-1]
//                 if(i>0 && j>0) sum+=arr[i-1][j-1]
//                 // console.log(end_i, end_j)
//                 if(sum != (k+1) * (k+1)) continue
//                 if(sum > max){
//                     max = sum
//                 }
//             }
//         }
//     }
//     return max
// }

// console.log(maximumSquare(["0111", "1111", "1111", "1111"]))


// function maximumSquare(strArr){
//     let matrixArr = []
//     let hasOne = false
//     for(let i=0; i<strArr.length; i++){
//         matrixArr.push(strArr[i].split(''))
//     }
//     for(let i=0 ; i<matrixArr.length; i++){
//         for(let j=0; j<matrixArr[i].length; j++){
//             matrixArr[i][j] = parseInt(matrixArr[i][j])
//             if(matrixArr[i][j]===1){
//                 hasOne = true
//             }
//             if(i > 0) matrixArr[i][j] += matrixArr[i-1][j]
//             if(j > 0) matrixArr[i][j] +=matrixArr[i][j-1]
//             if(i>0 && j>0) matrixArr[i][j] -= matrixArr[i-1][j-1]
//         }
//     }
//     if(!hasOne){
//         return 0
//     }
//     let max = 1
//     let sum = 0
//     for(let i=0; i<matrixArr.length; i++){
//         for(let j=0; j<matrixArr[i].length; j++){
//             for(let k=1; k<matrixArr.length; k++){
//                 let end_i = i+k
//                 let end_j = j+k
//                 if(end_i >= matrixArr.length || end_j >= matrixArr[i].length){
//                     break
//                 }
//                 sum = matrixArr[end_i][end_j]
//                 if(i > 0) sum -= matrixArr[i-1][end_j]
//                 if(j > 0) sum -= matrixArr[end_i][j-1]
//                 if(i>0 && j>0) sum += matrixArr[i-1][j-1]

//                 if(sum != (k+1)*(k+1)){
//                     continue
//                 }
//                 if(sum>max){
//                     max = sum
//                 }
//             }
//         }
//     }
//     return max

// }
// console.log(maximumSquare(["0111", "1111", "1111", "1111"]))
// console.log(maximumSquare(["10100", "10111", "11111", "10010"]))

// function switchSort(arr){
//     let arrPos = []
//     for(let i=0; i<arr.length; i++){
//         arrPos.push([arr[i],i])
//     }
//     arrPos.sort((a,b)=> a[0]-b[0])
//     let visited = new Array(arr.length).fill(false)
//     let ans = 0;
//     for(let i=0; i<arr.length; i++){
//         if(visited[i] || arrPos[i][1] == i){
//             continue
//         }
//         let countSwap = 0;
//         let j=i;
//         while(!visited[j]){
//             visited[j] = true
//             j = arrPos[j][1];
//             countSwap +=1
//         }
//         if(countSwap >0){
//             ans += (countSwap - 1)
//         }
//     }
//     return ans
// }
// console.log(switchSort([1,5,4,3,2]))



// function switchSort(arr){
//     let swap = 0;
//     let visited = new Array(arr.length).fill(false)
//     for(let i=0; i<arr.length; i++){
//         let j=i
//         let count = 0
//         while(!visited[j]){
//             visited[j] = true
//             j = arr[j]-1
//             count += 1
//         }
//         if(count !=0){
//             swap = swap + (count - 1)
//         }
//     }
//     return swap
// }
// console.log(switchSort([1,5,4,3,2]))
// console.log(switchSort([3,1,2]))
// console.log(switchSort([3,1,4,2]))

// function switchSort(arr){
//     let swap = 0
//     let visited = new Array(arr.length).fill(false)
//     for(let i=0; i<arr.length; i++){
//         j = i
//         count = 0
//         // console.log(j)
//         while(!visited[j]){
//             visited[j] = true
//              j = arr[j]-1
//              count +=1
//             //  console.log(j)
//             // console.log(visited[j])
//             if(count != 0){
//                 swap += (count - 1)
//             }
//         }
//     }
//     return swap
// }
// console.log(switchSort([1,5,4,3,2]))


// function nimSum(arr){
//     let nimSum = arr.reduce((nimSum,curr) => nimSum ^ curr)
//     return nimSum === 0 ? 2 : 1
// }
// console.log(nimSum([2, 4, 1, 3]))


// function pentagonal(num){
//     return 1+5*parseInt(num*(num-1)/2)
// }
// console.log(pentagonal(5))


function PatternChaser(str) {

    let longestPattern = "";

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            let currentPattern = str.slice(i, j + 1);

            // Check if the current pattern repeats at least twice in the remaining string
            if (str.slice(j + 1).includes(currentPattern)) {
                // Check if the current pattern is longer than the current longest pattern
                if (currentPattern.length > longestPattern.length) {
                    longestPattern = currentPattern;
                }
            }
        }
    }

    if (longestPattern.length >= 2) {
        return "yes " + longestPattern;
    } else {
        return "no null";
    }
}

// Test cases
console.log(PatternChaser("da2kr32a2"));  // Output: "yes a2"
console.log(PatternChaser("sskfssbbb9bbb"));  // Output: "yes bbb"
console.log(PatternChaser('amulpandehuamul'))



function MaximalSquare(strArr) {
    if (strArr.length === 0 || strArr[0].length === 0) {
        return 0;
    }

    const rows = strArr.length;
    const cols = strArr[0].length;
    const matrix = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
    let maxSquareSize = 0;

    // Initialize the first row and column of the matrix
    for (let i = 0; i < rows; i++) {
        matrix[i][0] = parseInt(strArr[i][0]);
        maxSquareSize = Math.max(maxSquareSize, matrix[i][0]);
    }
    for (let j = 0; j < cols; j++) {
        matrix[0][j] = parseInt(strArr[0][j]);
        maxSquareSize = Math.max(maxSquareSize, matrix[0][j]);
    }

    // Fill in the rest of the matrix using dynamic programming
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (parseInt(strArr[i][j]) === 1) {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j],
                    matrix[i][j - 1],
                    matrix[i - 1][j - 1]
                ) + 1;

                maxSquareSize = Math.max(maxSquareSize, matrix[i][j]);
            }
        }
    }

    // Return the area of the largest square submatrix
    return maxSquareSize * maxSquareSize;
}

// Test case
console.log(MaximalSquare(["10100", "10111", "11111", "10010"]));  // Output: 4
console.log(MaximalSquare(["0111", "1111", "1111", "1111"]))