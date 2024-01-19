// // Missing digit 
// function misingDigit(str){
//     str = str.split(' ')
//     let res = 0,x;
//     let result = ""
//     let firstOperand = str[0];
//     let operator = str[1];
//     let secondOperand = str[2];
//     let resultTant = str[str.length-1]

//     if(resultTant.indexOf('x') !=-1){
//         x = resultTant;
//         firstOperand = parseInt(firstOperand)
//         secondOperand = parseInt(secondOperand)
//         if(operator=='+'){
//             res = firstOperand + secondOperand
//         }else if(operator =='-'){
//             res = firstOperand - secondOperand
//         }else if(operator == '*'){
//             res = firstOperand * secondOperand
//         }else{
//             res = Math.floor(firstOperand / secondOperand)
//         }
//     }else{
//         resultTant = parseInt(resultTant)
//         if(firstOperand.indexOf('x')!= -1){
//             x = firstOperand
//             secondOperand = parseInt(secondOperand)
//             if(operator == '+'){
//                 res = resultTant - secondOperand
//             }else if(operator == '-'){
//                 res = resultTant + secondOperand
//             }else if(operator == '*'){
//                 res = Math.floor(resultTant / secondOperand)

//             }else{
//                 res = Math.floor(resultTant / secondOperand)
//             }
//         }
//         else{
//             x = secondOperand
//             firstOperand = parseInt(firstOperand)
//             if(operator == '+'){
//                 res = resultTant - firstOperand
//             }else if(operator == '-'){
//                 res =  firstOperand - resultTant
//             }else if(operator == '*'){
//                 res = Math.floor(resultTant / firstOperand)

//             }else{
//                 res = Math.floor(firstOperand / resultTant)
//             }
//         }
//     }
//     res = res.toString();
//     let k = 0;
//     for(let i of x){
//         if(i == 'x'){
//             result += res[k]
//             break
//         }else{
//             k = k+1
//         }
//     }
//     return result

// }
// console.log(misingDigit("12x + 12 = 24"))

// word split
function wordSplit(str){
    let wordToFind = str[0]
    let dicstionary = str[1]
    let wordDicst = dicstionary.split(',')
    let splitMainWord;
    let answerWord = ''
    // for(let i =0; i<wordDicst.)
    wordDicst.map((firstWord) =>{
        // ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"] hello cat
        splitMainWord = wordToFind.split(firstWord)
        // console.log(splitMainWord)
        if(splitMainWord.length > 0){
            splitMainWord.map((word)=>{
                let joindWord = firstWord + word
                // console.log(joindWord)
                let reverse = [joindWord].reverse().toString()
                if(joindWord === wordToFind || wordToFind === joindWord){
                    answerWord = '' + firstWord + ',' + word
                }else{
                    return 'Not Possible'
                }
            })
        }
        return splitMainWord
    })
    let ans = ''
    return answerWord

}
console.log(wordSplit(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]))
// console.log(wordSplit(["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]))


// let a = 'applepie'
// let b = a.split('apple')
// b = a.split('pie')
// console.log(b)

// function wordSplit(str){
//     let wordToCompare = str[0]
//     let dis = str[1]
//     let wordDis = dis.split(',')
//     let ansWord = ''
//     wordDis.map((first)=>{
//         let getWordToCompare = wordToCompare.split(first)
//         console.log(getWordToCompare)
//         if(getWordToCompare.length > 0){
//             getWordToCompare.map((word)=>{
//                 let joindWord = first + word
//                 console.log(joindWord)
//                 if(joindWord == wordToCompare){
//                     // console.log('done')
//                     ansWord = first + ',' + word

//                 }else{
//                     // console.log('notdone')
//                     return 'Not possible'
//                 }
//             })
//         }
//     })
//     return ansWord
// }
// console.log(wordSplit(["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]))

// function pascalsTriangle(numRow){
//     if(numRow === 0){
//         return []
//     }
//     if(numRow === 1){
//         return [[1]]
//     }
//     let result = []
//     for(let row=1; row<=numRow; row++){
//         let arr = []
//         for(let col = 0; col < row ; col++){
//             if(col === 0 || col === row -1){
//                 arr.push(1)
//             } else{
//                 arr.push((result[row-2][col-1] + result[row-2][col]))
//             }
//         }
//         result.push(arr)
//     }
//     return result.length
// }
// console.log(pascalsTriangle(4))



// dash insert
// function dashInsert(str){
//     let numToStr = str.toString()
//     let arr = numToStr.split('')
//     let result = ''
//     for(let i = 0; i<arr.length; i++){
//         arr[i] = parseInt(arr[i])
//     }
//     for(let i =0; i<arr.length; i++){
//         if(arr[i]%2==1 && arr[i+1]%2 == 1){
//             arr.splice(i+1,0,'-')
//         }
//     }
//     x = arr.join('')
//     // for(let x of arr){
//     //     if(parseInt(x)%2==0){
//     //         result +=  x
//     //     }else{
//     //         if((pasrsx+1)%2==1 && x%2 == 1){
//     //             result += x
//     //         }else{

//     //             result += x + '-'
//     //         }
//     //     }
//     // }
//     return x

// }
// console.log(dashInsert(99946))


// function pascalsTriangle(array) {
//     // if(numRow === 0){
//     //     return []
//     // }
//     // if(numRow === 1){
//     //     return [[1]]
//     // }
//     let numRow = 10;
//     let result = []
//     for (let row = 1; row <= numRow; row++) {
//         let arr = []
//         for (let col = 0; col < row; col++) {
//             if (col === 0 || col === row - 1) {
//                 arr.push(1)
//             } else {
//                 arr.push((result[row - 2][col - 1] + result[row - 2][col]))
//             }
//         }
//         result.push(arr)
//         let count = 0;
//         if (arr.length >= array.length) {
//             for (let k = 0; k < array.length; k++) {
//                 if (arr[k] == array[k]) {
//                     count++
//                 }
//                 if (count == array.length) {
//                     return arr[k + 1]
//                 }
//             }
//         }
//     }

//     return -1
// }
// console.log(pascalsTriangle([1,4]))


// function primeTime(num){
//     if(num<1){
//         return false;
//     }else{
//         for(let i=2; i<num; i++){
//             if(num%i == 0){
//                 return false;
//             }
//         }
//     }

//     return true
// }
// console.log(primeTime(153))

// function pascalsTriangle(array){
//     let result = []
//     let numRow = 10
//     for(let row = 1;row<=numRow; row++){
//         let arr=[]

//         for(let col=0; col<row; col++){
//             if(col == 0 || col == row-1){
//                 arr.push(1)
//             }else{
//                 arr.push(result[row-2][col-1] + result[row-2][col])
//             }
//         }
//         result.push(arr)
//         let count = 0;
//         if(arr.length >= array.length){
//             for(let k = 0; k<array.length; k++){
//                 if(arr[k]==array[k]){
//                     count++
//                 }
//                 if(count == array.length){
//                     return arr[k+1]
//                 }
//             }
//         }
//     }
//     return -1
// }
// console.log(pascalsTriangle([1,3]))


// function dashInsert2(number){
//     let str = number.toString()
//     let arr = str.split('')
//     // for(let x of arr){
//     //     arr[x]=parseInt(arr[x])
//     // }
//     for(let i=0; i<arr.length; i++){
//         arr[i]=parseInt(arr[i])
//     }
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2==1 && arr[i+1]%2 == 1){
//              arr.splice(i+1, 0, '-')
//         }
//         if(arr[i]%2 == 0 && arr[i+1]%2==0){
//             if(arr[i]==0){

//             }else{

//                 arr.splice(i+1, 0, '*')
//             }
//         }
//     }
//     x = arr.join('')
//     return x

// }
// console.log(dashInsert2(56647304 ))
// let numToStr = str.toString()
// let arr = numToStr.split('')
// let result = ''
// for(let i = 0; i<arr.length; i++){
//     arr[i] = parseInt(arr[i])
// }
// for(let i =0; i<arr.length; i++){
//     if(arr[i]%2==1 && arr[i+1]%2 == 1){
//         arr.splice(i+1,0,'-')
//     }
// }
// x = arr.join('')

// function palindromeTwo(str){
//     str=str.trim()
//     let newStr = str.replace(/[^\w\s]/,'')
//     newArr = newStr.split(' ')
//     let strToComp = newArr.join('').toLowerCase()
//     let palinStr = strToComp.split('')

//     return strToComp=== palinStr.reverse().join('')
//     // let matchig = /\w+|\s+|[^\s\w]+/g
//     // let array = str.match(matchig)
//     // return array
// }
// console.log(palindromeTwo("A war at Tarawa!"))

// function runLength(str){
//     let arr = str.split('')
//     let count = 1;
//     let newStr = ''
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] !== arr[i+1]){
//             newStr += count + arr[i]
//             count = 1
//         }else{
//             count++
//         }
//     }
//     return newStr
// }
// console.log(runLength("aabbcde"))

// function letterCapitalized(str){
//    str = str.split(' ')
//    let newStr = ''
//    for(let i=0; i<str.length; i++){

//          if(str[i].charAt(0).toLowerCase()){

//             newStr += str[i].charAt(0).toUpperCase() + str[i].slice(1) + ' '

//          }     
//    }
//    return newStr
// }
// console.log(letterCapitalized('i ran today'))

// function letterCapitalized(str){
//     let arr = str.split(' ')
//     let newStr = ''
//     for(let i=0; i<arr.length; i++){
//         if(arr[i].charAt(0).toLowerCase()){
//             newStr += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + ' '
//         }
//     }
//     return newStr
// }
// console.log(letterCapitalized('i ran today'))

// function reverseNumber(str){
//     arr = str.split(' ')
//     return arr.reverse().join(' ')
// }
// console.log(reverseNumber("10 20 50"))

// function divisionStringified(num1, num2){
//     num = num1/num2
//     if(num < 1000){
//         return Math.round(num)
//     }
//     newNum = (Math.round(num) + '').split('')
//     for(let i = newNum.length - 3; i>0; i-=3){
//         newNum.splice(i,0,',')
//     }
//     return newNum.join('')
// }
// console.log(divisionStringified(123456789,100))