//        Queen Check
// function queenCheck(strArr){
//     let queens = strArr.map((peices)=>{
//         const x = peices[1]
//         const y = peices[3]
//         return {x,y}
//     })
//     for(let i=0; i<queens.length; i++){
//         for(let j=i; j<queens.length; j++ ){
//             let q1 = queens[i]
//             let q2 = queens[j]
//             if(q1.x === q2.x || q1.y === q2.y || Math.abs(q1.x - q1.x) === Math.abs(q1.y - q2.y)){
//                 return `${q1.x},${q1.y}`
//             }
//             // console.log(q1.x)
//         }
//     }
//     return true
// }
// console.log(queenCheck(["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)","(1,6)", "(7,7)", "(5,8)"]))

//              Max Stock Profit
// function maxStockProfit(arr){
//     let profit = 0
//     for(let i = 0; i<arr.length; i++){
//         let buyStock = arr[i];
//         for(let j = i+1; j<arr.length; j++){
//             let sellStock = arr[j]
//             let maxProfit = sellStock - buyStock
//             if(maxProfit > profit){
//                 profit = maxProfit
//             }
//         }
//     }
//     return profit
// }
// console.log(maxStockProfit([45, 24, 35, 31, 40, 38, 11]))

//                      BlackJack

// function blackJack(strArr){
//     let cards = {
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
//     let totalValue = 0
//     let hasAce = false;
//     let highCard = null
//     for(let i = 0; i<strArr.length;i++){
//         const cardValue = cards[strArr[i]]
//         totalValue += cardValue
//         if(strArr[i]=='ace'){
//             hasAce = true
//         }
//         if(!highCard || cardValue >= cards[highCard]){
//             highCard = strArr[i]
//         }
//     }
//     if(totalValue > 21) return 'above '+highCard
//     if(totalValue < 21) return 'beloe '+highCard
//     if(totalValue == 21) return 'blackjack '+highCard
// }
// console.log(blackJack(["four","ten","king"]))
// console.log(blackJack(["ten","ace"]))


//                      Binary reversal

// function binayReversal(num) {
//     binary = num.toString(2)
//     let len = binary.len
//     binaryArr = binary.split('')
//     let cnt = 0;
//     let diff = 8 - binaryArr.length
//     if(diff > 0){
//         for(let i = 0; i<diff; i++){
//             binaryArr.unshift('0')
//         }
//     }
//     if(diff < 0){
//         binaryArr
//     }
//     let decimal = binaryArr.reverse().join('')
//     // for()
//     // return parseInt(decimal,2)
//     return parseInt(binary,2)
//     // return -5>0
//     return binary
// }
// // console.log(binayReversal(213))
// console.log(binayReversal(4567))
// // console.log(binayReversal(47))

//              letter count


// function letterCount(str){
//     arr = str.toLowerCase().split(' ')
//     str = str.split(' ')
//     arrRev = []
//     let count =0;
//     let wordArr = []
//     for(let i = 0; i<arr.length; i++){
//         let newArr = arr[i].split('').sort().join('')
//         arrRev.push(newArr)
//     }
//     for(let i = 0; i<arrRev.length; i++){
//         for(let j = 0; j<arrRev[i].length; j++){
//             if(arrRev[i].charAt(j) == arrRev[i].charAt(j+1)){
//                 count ++
//             }
//             if(count > 0){
//                 wordArr.push(str[i])
//                 count = 0
//                 break
//             }
//         }  
//     }
//     // return count
//     let wordWord = ''
//     for(let i = 0; i<wordArr.length-1; i++){
//         // let firstWord = wordArr[i]
//         if( wordArr[i].length > wordWord.length){
//             wordWord = wordArr[i]
//         }
        
//     }
//     // return wordArr
//     return wordWord
// }
// // e h l l o
// console.log(letterCount('Hello apple pie ball ballll hellol'))
// console.log(letterCount('Hello apple'))                                                                                         


//              off binary

// function offBinary(strArr){
//     num1 = parseInt(strArr[0]).toString(2)
//     num2 = strArr[1]
//     let cnt = 0
//     for(let i = 0; i<num2.length; i++){
//         if(num1.charAt(i) == num2[i]){
//             cnt ++
//         }
//     }
//     return num2.length-cnt
// }
// console.log(offBinary(["5624", "0010111111001"]))
// console.log(offBinary(["44", "111111"]))


//              Counting minutes

// function countingMinutes(str){
//     const [firstTime , secondTime] = str.split('-')
//     let startTime = getMinute(firstTime)
//     let endTime = getMinute(secondTime)
//     return (endTime - startTime + 1440)%1440
// }
// function getMinute(timeStr){
//     let [hour,minute] = timeStr.slice(0,-2).split(':')
//     hour = parseInt(hour)
//     minute = parseInt(minute)
//     const totalTime = hour * 60 + minute
//     const isPm = timeStr.slice(-2) === 'pm'
//     return isPm ? totalTime + 720 : totalTime
// }
// console.log(countingMinutes('12:30pm-12:00am'))

//                  Dash insert

// function dashInsert(str){
//     let word = '';
//     let arr = str.split('').map(Number)

//     for(let i = 0; i<arr.length; i++){
//        if(arr[i]%2 == 1 && arr[i+1]%2 == 1){
//             arr.splice(i+1,0,'-')
//        }
//        if(arr[i]%2 == 0 && arr[i+1]%2 == 0){
//         if(arr[i] == 0){

//         }else{
//             arr.splice(i+1,0,'*')
//         }
//        }
//     }
//     return arr.join('')
// }
// console.log(dashInsert('454793'))
// console.log(dashInsert('99946'))


//              Distinct Character

// function distinctChar(str){
//     let arr = str.split('')
//     let set = new Set()
//     for(let i = 0; i<arr.length; i++){
//         set.add(arr[i])
//     }
//     return set.size >= 10
// }
// console.log(distinctChar('abc123kkmmmm'))
// console.log(distinctChar('12334bbmma:=6'))

//              Formated Division

// function formatedDivision(num1,num2){
//     num3 = (num1/num2).toFixed(4)
//     let leftArr = []
//     let [left,right] = String(num3).split('.')
//     if(left.length > 3){
//         leftArr = left.split('')
//         leftArr.splice(2,0,',')
//     }
//     if(left.length==1){
//         return num3
//     }
//     return leftArr.join('')+'.'+right
// }
// console.log(formatedDivision(2,3))
// console.log(formatedDivision(10,10))
// console.log(formatedDivision(123456789,10000))


//              Changing Sequence

// function changingSequence(arr){
//     let cnt = 0;
//     num1 = arr[0]
//     num2 = arr[1]

//     if(num2 > num1){
//         for(let i=0; i<arr.length; i++){
//             if(arr[i+1] > arr[i]){
//                 cnt +=1
//             }
//             else{
//                 break
//             }
//         }
//         console.log('up')
//     }
//     else{
//         for(let i=0; i<arr.length; i++){
        
//             if(arr[i+1] < arr[i]){
//                 cnt ++
//             }else{
//                 break
//             }
//         }
//         console.log('down')
//     }
//     return cnt
// }
// // console.log(changingSequence([1, 2, 4, 6, 4, 3, 1]))
// // console.log(changingSequence([5, 4, 3, 2, 10, 11]))
// console.log(changingSequence([-4, -2, 9, 10]))

//                  Counting Anagram

// function countingAnagram(str){
//     let arr = str.split(' ').sort();
//     let anagram = 0;
//     for(let i=0; i<arr.length; i++){
//         for(let j = i+1; j<arr.length; j++){
//             if(arr[i] == arr[j]){
//                 break;
//             }
//             if(arr[i].split('').sort().join() === arr[j].split('').sort().join()){
//                 anagram +=1
//                 break
//             }
//         }
//     }
//     return anagram
// }
// console.log(countingAnagram('aa aa odg dog gdo'))