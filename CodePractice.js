//                        Bracket Matcher

// function bracketMatcher(str){
//     arr = str.split('')
//     let left = 0;
//     let right = 0;
//     arr.forEach(element => {
//         if(element=='('){
//             left +=1
//         }if(element == ')'){
//             right +=1
//         }
//     });
//     return left===right
// }
// console.log(bracketMatcher("(coder)((byte))"))


//                        First Factorial

// function factoRial(num){
//     if(num === 0){
//         return 1
//     }
//     return num *factoRial(num-1)
// }
// console.log(factoRial(10))




//                     Run Length

// function runLength(str) {
//     let count = 1
//     newstr = ''
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) !== str.charAt(i + 1)) {
//             newstr += count + str.charAt(i)
//             count = 1
//         }
//         else {
//             count++
//         }
//     }
//     return newstr
// }
// console.log(runLength('aabbcde'))



//                     String scramble

// function stringScramble(str1, str2) {
//     let arr = []
//     wordToFind = str1.split('')
//     wordToMatch = str2.split('')
//     for (let i = 0; i < wordToFind.length; i++) {
//         for (let j = 0; j < wordToFind.length; j++) {
//             if (wordToMatch[i] === wordToFind[j]) {
//                 arr.push(wordToFind[j])
//                 break;
//             }
//         }
//     }
//     // for()
//     return arr.length == wordToMatch.length
// }
// console.log(stringScramble('h3llko', 'hello'))



//                      Array Addition

// function arrayAddition(arr){
//     flag = false
//     arrSort = arr.sort((a,b)=> a-b)
//     findSumOf = arrSort[arrSort.length-1]
//     arrAllSum = arrSort.reduce((acc,cur) => acc+=cur, 0)
//     diff = arrAllSum - findSumOf
//     for(let i=0; i<arr.length; i++){
//         let sum = diff - arr[i]
//         if(sum == findSumOf){
//             flag = true
//             break
//         }else{
//             flag = false
//         }
//     }
//     return flag
// }
// // console.log(arrayAddition([4, 6, 23, 10, 1, 3]))
// console.log(arrayAddition([5,7,16,1,2]))


//                              Number Search

// function numberSearch(str){
//     let string = str.replace(/[0-9,.!@#$%^&*()_+: \-,">?]/g,'').split(' ').join('')
//     let number = str.replace(/[a-zA-Z!@#$%^&*()_+<>?:, \-"{}]/g,'').split('').map(Number)
//     return Math.round(number.reduce((acc,curr) => acc+=curr,0)/string.length)
//     return number
// }
// console.log(numberSearch("Hello6 9World 2, Nic8e D7ay!"))
// console.log(numberSearch("H3ello9-9"))


//                              ABCcheck

// function ABcheck(str){
//     pattern = /(a...b|b...a)/g
//     return pattern.test(str)
// }
// console.log(ABcheck('Laura sobs'))
// console.log(ABcheck('after badly'))


//                               Alphabet Searching

// function alphabetSearching(str){
//     // arr = arr.split('')
//     let set = new Set()
//     let alphabet = 'qwertyuiopasdfghjklzxcvbnm'
//     for(let i=0; i<alphabet.length; i++){
//         if( !str.includes(alphabet[i])){
//             return false
//         }
//     }
//     return true
// }
// console.log(alphabetSearching('abcdefghijklmnopqrstuvwxyyyy'))
// console.log(alphabetSearching('abc123456kmo'))
// console.log(alphabetSearching('zacxyjbbkfgtbhdaielqrm45pnsowtuv'))


//                              Alphabets Soup

// function alphabetSoup(str){
//     str = str.split('').sort().join('')
//     return str
// }
// console.log(alphabetSoup('coderbyte'))
// console.log(alphabetSoup('hooplah'))


//                              Ascii conversion
// function asciiConvert(str){
//     let newstr = ''
//     for(let i = 0; i<str.length; i++){
//         if(str.charAt(i)==' '){
//             newstr += str.charAt(i)
//         }else{
//             newstr+= str.charCodeAt(i)
//         }
//     }
//     return newstr
// }
// console.log(asciiConvert('hello world'))
// console.log(asciiConvert('abc **'))

//              Basic Roman Numerals

// function basicRomanNumerals(str){
//     const NumeralsArray = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
//     revStr = str.split('').reverse().join('')
//     ans = 0;
//     for(let i=0; i<revStr.length; i++){
//         let num = NumeralsArray[revStr[i]]
//         if(4*num < ans){
//             ans -= num
//         }else{
//             ans += num
//         }  
//     }
//     return ans
// }
// console.log(basicRomanNumerals('XLVI'))
// console.log(basicRomanNumerals('IV'))


//                      Binary Reversal

// function binaryReversal(str){
//     let bin = +str.toString(2)
//     while(bin.length % 8 != 0){
//         bin = String.fromCharCode(48) + bin
//     }
//     let revbin = bin.toString().split('').reverse().join('')
    
//     // return parseInt(revbin)
//     return parseInt(revbin,2)
// }
// // console.log(binaryReversal('213'))
// console.log(binaryReversal(213))


//                  camelCase

// function camelCase(str){
//     str = str.toLowerCase().split(/[\W]/)
//     for(let i=1; i<str.length; i++){
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
//     }
//     return str.join('')
// }
// console.log(camelCase('cats AND*Dogs-are Awesome'))


//              command line

// function commandLine(str){
//     str = str.split('=')
//     let left = [str[0]]
//     let right =[]
    
//     for(let i = 1; i<str.length-1; i++){
//         part = str[i].split(' ')
//         left.push(part[part.length-1])
//         right.push(part.slice(0,part.length-1).join(' '))

//     }
//     right.push(str[str.length-1])
//     let newstr=''
//     for(let i=0; i<left.length; i++){
//         newstr += left[i].length + '=' + right[i].length +' '
//     }
//     // return left
//     return newstr.slice(0, newstr.length-1)

// }
// console.log(commandLine('letters=A B Z T numbers=1 2 26 20 combine=true'))

//              Constant count


// function constantCount(str){
//     let regex = /[aeiouAEIOU]/
//     let count = 0
//     for(let i=0; i<str.length; i++){
//         if(!(str.charAt(i).match(regex))){
//             count ++
//         }if(str.charAt(i)==' '){
//             count --
//         }
//     }
//     return count
// }
// console.log(constantCount('Hello World'))
// console.log(constantCount('Alphabets'))

function arrayRotation(arr){
    firstIndex = arr[0]
    let newArr = []
    for(let i=firstIndex ; i<arr.length; i++){
        newArr.push(arr[i])
    }
    for(let i=0; i<firstIndex; i++){
        newArr.push(arr[i])
    }
    return newArr
}
console.log(arrayRotation([4,1,2,3,4,5]))