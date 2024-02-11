//Q1 reverse string
// solutins 
// let name = 'hello'

// function reverseStr(str){
//     let a= str.split('')
//     return a.reverse().join('');
// }
// console.log(reverseStr(name))

// function newReverse(str){
//     let newStr = ""
//     for(i=str.length-1;i>=0;i++){
//         newStr+=str[i]
//     }
//     return newStr
// }

//Q2 Factorial

// function fact(num){
//     let no = 1;
//     for(let i=1;i<=num;i++){
//         no *=i
//     }
//     return no;
// }
// console.log(fact(8))

//Addictice Problem

// function AddictivePersistance(num){
//     num = String(num)

//     if(num.length===1){
//         return 0;
//     }
//     let cnt = 0;
//     while(num.length != 1){
//         let sum = 0;
//         for(let i=0; i<num.length; i++){
//             sum += Number(num[i])
//         }
//         cnt++
//         sum = String(sum)
//         if(sum.length===1){
//             return cnt
//         }
//         num = sum
//     }

// }

// console.log(AddictivePersistance(27181))

// console.log('working')

// Array rotation 
function arrayRotaion(num){

    let startIndex = num[0]
    let arrayRotation=[]
    for(let i=startIndex;i<num.length;i++){
        arrayRotation.push(num[i])
    }

    for(let i=0;i<startIndex;i++){
        arrayRotation.push(num[i])
    }

    return arrayRotation

}

console.log(arrayRotaion([4,3,4,3,1,2] ))

// binary converter coderbyte

// function bineryConverter(str){

//     let arr=[1,2,4,8,16,32,64,128];

//     let count = 0;
//     let arr2= str.split('').reverse().join('')


//     for(let i=0;i<arr2.length;i++){
//         if(arr2[i]=='1'){
//             count += arr[i]
//         }
//     }
//     return count
// }
// console.log(bineryConverter('1010'))

// simple symbol question

// function simpleSymbol(str){

//     // if(str.match(/[^+][A-Za-z][^+]/g)) return false;
//     // else if(str.match(/[^+][A-Za-z][+]/g)) return false;
//     // else if(str.match(/[+][A-Za-z][^+]/g)) return false
//     // return true

//     if (str.match(/[^+][A-Za-z][^+]/g)) return false;
//     else if (str.match(/[+][A-Za-z][^+]/g)) return false;
//     else if (str.match(/[^+][A-Za-z][+]/g)) return false;
//     return true;
// }
// console.log(simpleSymbol("f++d+"))

// function timeConvert(num){
//     let hour = Math.floor(num/60);
//     let minutes = num % 60;
//     return hour + ':' + minutes 
// }
// console.log(timeConvert(126))

// let arr = ['b','c','a']

// console.log(arr.sort())


// alphabet soup challenge
// function alphabetSoup(str){

//     //let newStr = str.split('')

//     return str.split('').sort().join('')

// }

// console.log(alphabetSoup('bhai'))


// Vowel count 
// function vowelCount(str){

//     let newStr = str.match(/[aeiou]/gi)

//     if(newStr==null){
//         return 0;
//     }
//     else{
//         return newStr.length;
//     }
// }

// console.log(vowelCount('luffy'))

// word count
// function wordCount(str){
//     return str.split(" ").length
// }
// console.log(wordCount('hello there anakin'))

// xo challenge

// function xoFind(str){
//     let x = str.match(/x/gi)
//     let o = str.match(/o/gi)

//     if(str.match(/[^o][a-zA-Z][^x]/) && str.match(/[^x][a-zA-Z][^o]/)){
//         return false
//     }
//     return x.length===o.length
// }
// console.log(xoFind('xoxo'))

// palindrome 

// function palindrome(str){


//    let newStr = str.split('')

//    // let strNew = []
//    // for(let i=0;i<newStr.length;i++){
//    //    if(newStr[i]===' '){

//    //       // newStr.remove(newStr[i])
//    //       newStr.splice(newStr[i], 1);
//    //    } 
//    // }
//    let value = ' '

//    newStr = newStr.filter(function(item){
//       return item!==value
//    })
//    //let newStr = str.split('').join('').replace(' ','').replace(' ','').replace(' ','')

//    let palinStr = str.split('')
//    palinStr = palinStr.filter(function(item){
//       return item!==value
//    })

//    return palinStr.join('') === newStr.reverse().join('')
// }
// console.log(palindrome('a lot not new i saw as i went on to la'))


// var value = 3

// var arr = [1, 2, 3, 4, 5, 3]

// arr = arr.filter(function(item) {
//     return item !== value
// })

// console.log(arr)
// [ 1, 2, 4, 5 ]


// // Array addition 




// // next palindrome
// function nextPalindrome(num){
//    let count = num +1;
//    while(true){
//       let numStr = count.toString()
//       let revStr = numStr.split('').reverse().join('')

//       if(numStr===revStr) return parseInt(numStr,10)
//       count++
//    }
// }
// console.log(nextPalindrome(180))

// function oneDecrement(str){
//    let cnt = 0
//    for(let i = 0; i < str.length; i++){
//       if(Number(str[i])-Number(str[i+1])===1){
//          cnt++
//       }
//    } 
//    return cnt;
// }
// let number = '9876541110'
// console.log(oneDecrement(number))

// simple adding

// function simpleAdding(num){
//    if(num===1){
//       return 1;
//    }
//    else{
//       return num + simpleAdding(num-1)
//    }
// }

// console.log(simpleAdding(12))


// letter capitalized

// function latterCapitalized(str){
//    // let arr = str.split(' ')
//    // let newArr= []
//    // let newLatter = ''
//    // for(let i=0; i<arr.length; i++){
//    //    //let regex = /[a-z]/
//    //    if(arr[i].charAt(0).match(/[a-z]/)){
//    //       newArr.push(arr[i].charAt(0).toUpperCase())
//    //    }
//    // }
//    // for(let i=0; i<arr.length; i++){
//    //    if(arr[i].chatAt(0)==newArr[i]){
//    //       console.log(arr[i].charAt(0).replace(newArr[i]))
//    //    }
//    // }

//    // return newArr


//    let newString = ''
//    for(let i=0; new)

// }
// let letter = 'hello world'
// console.log(latterCapitalized(letter))

//AB check

// function abCheck(str){

//    let pattern = /(a...b|b...a)/
//    return pattern.test(str)

// }
// let name = 'after badly"'
// console.log(abCheck(name))

// vowel count 

// function commandLine(str){
//    let arr = str.split('=')
//    let rigthArr = []
//    let leftArr = []
//    for(let i =0; i<arr.length; i++){
//       let newLength = arr[i].lastIndexOf(' ')

//       if(newLength>0){
//          rigthArr.push(arr[i].split(newLength))
//       }
//       // for(let j = 0;  j<=newLength; j++){

//       // }
//    }
//    for(let i=0; i<arr.length; i++){
//       let newLength = arr[i].lastIndexOf('')
//       if(newLength>0){

//          leftArr.push(arr[i].split(newLength));
//          //console.log(arr[i].lastIndexOf(' ').splice(newLength, arr.length))
//       }
//       //console.log(newLength)
//    }
//    // console.log(arr)
//    // console.log(leftArr)
//    // return leftArr
//    console.log(rigthArr)
// }
// let letters = "letters=A B Z T numbers=1 2 26 20 combine=true"

// console.log(commandLine(letters))


// function commandLine(str){
//    let arr = str.split('=')
//    let leftArr =[arr[0]]
//    let rightArr = []
//    let newStr = ''
//    // arr.forEach(element => {
//    //    // if()
//    //    let pat = element.split(' ')
//    //    rightArr.push(pat)
//    // });
//    // rightArr.forEach
//    for(let i=1; i<arr.length-1; i++){
//       let part = arr[i].split(' ')
//       leftArr.push(part[part.length-1])
//       rightArr.push(part.slice(0,part.length-1).join(' '))
//       // console.log(part[part.length-1])
//       // console.log(part)
//    }
//    rightArr.push(arr[arr.length-1])
//    for(let i = 0; i<leftArr.length; i++){
//       newStr += leftArr[i].length +"="+rightArr[i].length
//    }
//    return newStr.slice(0,newStr.length)
// }
// let letters = "letters=A B Z T numbers=1 2 26 20 combine=true"
// console.log(commandLine(letters))


    //   letter Changed
function letterChanges(str){
   str = str.toLowerCase()
   let newArr = []

   let newStr=''


   let regex = /[a-z]/g
   //let arr = str.split('')
   for(let i = 0; i<str.length; i++){
      if(str[i].match(/[a-z]/)){
         let charCode = str[i].charCodeAt(0)+1
         newArr.push(charCode)
      }else{
         newArr.push(str[i])
      }
   }
   for(let i = 0; i<newArr.length; i++){
      if(newArr[i]>90){
         newStr +=String.fromCharCode(newArr[i])
      }else{
         newStr += newArr[i]
      }
   }
   let newnewStr = ''
   for(let i = 0; i<newStr.length; i++){
      if(newStr[i].match(/[aeiou]/)){
         newnewStr += newStr[i].toUpperCase()
      }else{
         newnewStr +=newStr[i]
      }
   }
   return newnewStr
}
// let a = 'a'
// let b = a.charCodeAt(0)+4
// console.log(String.fromCharCode(b))
// let input = "hello*3"
let input = "fun times!"
console.log(letterChanges(input))

// function letterCapitalized(str){
//    str = str.split(' ')
//    let newStr = ''

//    // for(let i=0; i<str.length; i++){
//    //    str[i] = str[i][0].toUpperCase() + str[i].slice(1);
//    // }
//    for(let i=0; i<str.length; i++){

//       // for(let j=0; j<str[i].length; j++){
//          if(str[i].charAt(0).toLowerCase()){

//             newStr += str[i].charAt(0).toUpperCase() + str[i].slice(1) + ' '
//          }
//          // else{
//          //    newStr += str[i]
//          // }
//       // }
//       // if(str[i].charAt(0).match(/[a-z]/g)){

//       //    newStr += str[i].toUpperCase() + str.slice(1);
//       // }else{
//       //    newStr = str.slice(1)
//       // }
//          // if(str[i].charAt(1).match(/[a-z]/)){
//          //    newStr += str[i]
//          // }

//          // newStr += str[i]

//    }
//    return newStr
// }
// console.log(letterCapitalized('i ran today'))

// function simpleSymbol(str){
//    if(!str.match(/[a-zA-Z]/)){
//       return false
//    }else if(str.charAt(0)==='+' && str.charAt(str.length-1)==='+'){
//       return true
//    }else{
//       return false
//    }
//    //return str
// }
// console.log(simpleSymbol("f++d+"))

// function timeConvert(num){
//    let hour = Math.floor(num/60)
//    let minute = num % 60
//    return hour + ':' + minute
// }
// console.log(timeConvert(45))

// function palindrome(str){
//    let str1 = str.split(' ').join('')
//    let str2 = str.split(' ').join('')
//    return str1===str2.split('').reverse().join('')
// }
// console.log(palindrome("never odd or even"))

// function arithGeo(arr){
//    let arith = arr[1]-arr[0]
//    let geo = arr[1]/arr[0]
//    for(let i=1; i<arr.length; i++){
//       // let prev = a[i]
//       // let curr = arr[i]
//       // let next = arr[i+1]
//       //console.log(curr, next)
//       if(arr[i+1]-arr[i]==arith){
//          //curr = arr[i+1]
//          return "Arithmetic"
//       }else if(arr[i+1]-arr[i]==arith){

//          break
//       }
//    }
//    for(let i=2; i<arr.length; i++){

//       if(arr[i+1]/arr[i]===geo){
//          return 'Geo'
//       }else{
//           return -1
//       }
//    }
//    // return geo
// }

// console.log(arithGeo([2, 6, 18, 55]))



// function arrayAddition(arr){

//    let newArr = arr.sort((a,b) => a-b)

//    let flag = false;
//    let sumArray = arr.reduce((acc,cur)=>{
//       return acc+=cur
//    },0)

//    let sumNewArray =sumArray - newArr[newArr.length-1] 

//    for(let i = 0; i<newArr.length-1;i++){
//      let sum =sumNewArray - newArr[i]
//      if(newArr[newArr.length-1]===sum){
//       flag = true
//       break;
//      }else if(newArr[newArr.length-1]!==sum){
//       sum = 0
//       flag = false
//      }

//    }
//    return flag
//    //return sumArray
//    //  return newArr[newArr.length-1]===sumNewArray
//    // return sumNewArray
//    // return arr.reduce((acc, curr)=> acc+curr, 0)
// }
// let newArr = [/* your array here */];
// let sumNewArray = newArr.reduce((acc, num) => acc + num, 0); // Calculate the sum of all elements in newArr
// let flag = false;

// for (let i = 0; i < newArr.length - 1; i++) {
//   let sum = sumNewArray - newArr[i];

//   if (newArr[newArr.length - 1] === sum) {
//     flag = true;
//     break; // If the condition is met, no need to continue the loop
//   } else {
//     sum = 0; // Reset sum if the condition is not met for the current element
//     flag = false;
//   }
// }

// console.log(flag); // flag will be true if the condition is met, false otherwise


// let array = [5,7,16,1,2] 
// let array = [4, 6, 23, 10, 1, 3]
//  //let array = [3,5,-1,8,12]
// console.log(arrayAddition(array))

// function arrayAddition(arr){

//    let flag = false

//    let arrSort = arr.sort((a,b)=> a-b)
//    let lastArrNum = arrSort[arrSort.length-1]
//    let sumArr = arr.reduce((acc,cur)=>{
//       return acc+=cur
//    },0)

//    let sumWoLast = sumArr-lastArrNum
//    let sum = 0;
//    for(let i = 0; i<arrSort.length-1; i++){
//       sum = sumWoLast-arrSort[i]
//       if(sum===lastArrNum){
//          flag = true;
//          break
//       }
//       else{
//          sum = 0;
//          flag = false
//       }
//    }
//    return flag

// }
// console.log(arrayAddition([5,7,16,1,2]))
// console.log(a)
// var a=5

// function countingMinutes(str){
//    let [startTime, endTime] = str.split('-')

//    let firstMinute = getMinutes(startTime)
//    let endMinute = getMinutes(endTime)
//    const timeDiff = (endMinute - firstMinute + 1440)%1440
//    return timeDiff

// }
// function getMinutes(time){
//    const [hourStr,minutesSTr] = time.slice(0,-2).split(":");
//    const hour = parseInt(hourStr);
//    const minutes = parseInt(minutesSTr)
//    console.log(hour)
//    const isPm = time.slice(-2)==='pm';
//    let totalTime = hour * 60 + minutes;     
//    return isPm? totalTime + 720 : totalTime

// }
// console.log(countingMinutes("12:30pm-12:00am"))

// function countingTimeMinutes(str){
//    const [startTime, endTime] = str.split('-')

//    const firtTime = getMinutesFromTime(startTime)
//    const secondTime = getMinutesFromTime(endTime)
//    // console.log(firtTime)
//    // console.log(secondTime)
//    const diff = (secondTime - firtTime + 1440)%1440
//    return diff
//    // return startTime

// }
// function getMinutesFromTime(timeStr){
//    const [hour, minute] = timeStr.slice(0,-2).split(':')
//    const isPm = timeStr.slice(-2)==='pm'
//    const totalMinute = parseInt(hour) * 60 + parseInt(minute)
//    return isPm ? totalMinute + 720 : totalMinute
// }
// console.log(countingTimeMinutes("1:23am-1:08am"))

//               letter Count
// function letterCount(str){
//    let arrStr = str.toLowerCase().split(' ')
//    let count = 1;
//    let maxCount = 0

//    let newArr = []
//    for(let i = 0; i<arrStr.length; i++){
//       let newArrStr = arrStr[i].split('')
//       newArrStr.sort()
//       // newArr.push(newArrStr)
//       for(let j = 0; j< newArrStr.length; j++){

//          if(newArrStr[j] === newArrStr[j+1]){
//             count++
//          }else{
//             if(count>maxCount){
//                maxCount = count;
//                count = 1
//             }

//          }
//          newArr.push([arrStr[i], maxCount])
//          maxCount = 0;
//       }
//       newArr.sort((a,b) => b[1]-a[1])
//    if(newArr[0][1]==1){
//       return -1
//    }else{
//       return newArr[0][0]
//    }

//       // console.log(newArrStr)
//    }

//    // for( let i = 0; i<newArr.length; i++){
//    //    // console.log(newArr[i])

//    // }
//    // return maxCount 

// }

// console.log(letterCount('Hello apple pie'))

// function groupTotal(str){

//    let map = new Map()
//    let arr = []
//    for(let x of str){
//       let [word,value] = x.split(':')
//       arr.push(map.set(word,(map.get(word)|| 0)+parseInt(value))) 
//    }
//    let newMap =[]
//    for(let [key, value] of map){
//       if(value>0 || value<0){
//          newMap.push(key+ ":"+value)
//       }
//    }
//    return newMap.reverse().join(',')
// }
// console.log(groupTotal(['a:2','b:3','c:1','c:2','a:3','b:0']))
//                      second lowest
// function secondGreatestLow(arr){
//    if(arr.length <= 2){
//       return arr.reverse()
//    }
//    let sortArr = arr.sort((a,b)=>a-b)
//    let a = sortArr.length/2;
//    return sortArr.slice(a,sortArr.length-1)
// }
// function secondGreatestLow(arr){
//    arr = arr.slice().sort((a,b) => a-b)
//    if(arr.length <=2){
//       return arr.reverse().join(' ')
//    }
//    let second = arr[1]

//    for(let i = 0; i<arr.length-1; i++){
//       if(arr[i]!== arr[0]){
//          second = arr[i];
//       }
//    }
//    console.log(second)
//    let secondLargest = arr[arr.length-2]
//    let a = arr.length/2


//    for(let i=arr.length - Math.ceil(a);i>0; i--){
//       if(arr[i] !== arr[arr.length-1]){
//          secondLargest = arr[i]
//          // break;
//          console.log(secondLargest)
//       }
//    }
//    // return secondLargest  + ' ' + second
// }


// function secondGreatestLow(arr){

//    if(arr.length <=2 ){
//       return arr.reverse().join(' ')
//    }
//    let set = new Set()
//    arr = arr.sort((a,b) => a-b)
//    for(let x of arr){
//       set.add(x)
//    }
//    let arrNew = []
//    // console.log(set.keys(1) + ' ' + set.keys(set.size-2))
//    for(let x of set){
//       arrNew.push(x)
//    }
//    console.log(arrNew[1] + ' ' + arrNew[arrNew.length-2])
//    // console.log()
// }


// console.log(secondGreatestLow([1,4,2,23,45,3]))

// function divisionStringified(num1, num2){
//    let ans = Math.round(num1/num2)
//    let str = ans.toString()
//    let newStr = ''
//    if(str.length>3){
//       for(let i = str.length-1; i>=0; i--){
//          if(str[i]!=3){

//             newStr +=  str[i] 
//          }else if(str[i]==3){
//             newStr +=str[2]+',' 
//          }

//       }
//    }
//    let newArr = newStr.split('')
//    return newArr.reverse().join('')
// }
// console.log(divisionStringified(12345678923,10000))


// function meanMode(arr){
//    // let count = 0
//    let  meanData = mean(arr)
//    let modeData = mode(arr)
//    return modeData
// }
// function mode(arr){
//    let map = new Map()
//    // for(let [key,value] of arr){

//    // }
//    let count = 1;
//    for(let i=0; i<arr.length; i++){
//       if(arr[i]==arr[i+1]){
//          count += 1

//       }else{
//          count = 1

//       }
//       map.set(arr[i],(map.get(arr[i]||0)+count))
//    }
//    return map
// }

// function mean(arr){
//    let count = 0
//    for(let i = 0; i<arr.length; i++){
//       count += arr[i]
//    }
//    console.log(count/arr.length)
// }
// console.log(meanMode([5, 3, 3, 3, 1]))

// function powerOfTwo(num){
//    let ans = false
//    if(num<2){
//       ans = false;
//    }else{
//       while(num>=2){
//          let power = num % 2
//          if(power == 0){
//             ans = true
//          }else{
//             ans = false
//          }
//       }
//    }
//    return ans
// }
// console.log(powerOfTwo(16))


// Missing Digit

// function arrayMathing(str){
//     let arr1= str[0].split('[').toString().split(']').toString().trim().split(',')
//     let arr2 = str[1].split('[').toString().split(']').toString().trim().split(',')
//     let cnt= 0;
//     let arr3 = []
//     let newArr;
//     arr2.shift()
//     arr2.pop()
//     arr1.shift()
//     arr1.pop()
//     let len = 0;
//     if(arr1.length < arr2.length){
//         len = arr1.length
//     }
//     else{
//         len = arr2.length
//     }
//     if(arr1.length == arr2.length){
//         len = arr1.length
//     }
//     for(let i = 0; i<len; i++){

//         // let regex = /\d/
//         if(arr1[i].match(/[0-9]/)){
//             let sum = parseInt(arr1[i])+ parseInt(arr2[i])
//             arr3.push(sum)
//             cnt++
//         }
//         // if(cnt > arr1.length){
//         //     // 
//         //     console.log('hel')
//         // }
//     }
//     // arr2.pop()
//     let data = arr2.splice(cnt)

//     // if(arr2.match(/[0-9]/)){

//     // }

//     for(let i=0; i<data.length; i++){
//         arr3.push(parseInt(data[i]))
//     }
//     return arr3
// }

// console.log(arrayMathing(["[1, 2, 5, 6]", "[5, 2, 8, 11,5,6]"]))

// for(let i =0 ,j=0;i<arr1.length ,j<arr2.length;i++ ,j++){
//     let redax = /\d/g
//     if(arr1[i].includes(redax) && arr2[j].includes(redax)){
//         if(!arr1.length){ 
//             let sum = parseInt(arr1[i])+parseInt(arr2[j])
//             arr3.push(sum)
//             cnt ++
//         }
//         else {
//             arr3.push(arr2[j]);
//         }

//     }



// }


// function arrayMathing(strArr) {
//     let arr1 = strArr[0].match(/\d+/g).map(Number)
//     let arr2 = strArr[1].match(/\d+/g).map(Number)
//     let arr3 = []
//     if (arr1.length > arr2.length) {
//         let diff = arr1.length - arr2.length
//         for (let i = 0; i < diff; i++) {
//             arr2.push(0)
//         }
//     } else {
//         let diff = arr2.length - arr1.length
//         for (let i = 0; i < diff; i++) {
//             arr1.push(0)
//         }
//     }
//     for(let i = 0; i<arr1.length; i++){
//         let sum = arr1[i] + arr2[i]
//         arr3.push(sum)
//     }
//     return arr3

// }
// console.log(arrayMathing(["[1, 2, 5, 6,6,6,6]", "[5, 2, 8, 11,5,6]"]))

// function primeMover(num){
//     let prime = 1;
//     if(num===1){
//         return 2
//     }
//     if(num==2){
//         return 3
//     }
//     for(let i=3; i<1000; i++){
//         let cnt = 0
//         for(let j = 2; j<i; j++){
//             if(i%j == 0){
//                 cnt++
//             }
//         }
//         if(cnt == 0){
//             prime ++
//         }
//         if(prime == num){
//             return i
//         }
//     }
// //    return cnt
// }
// console.log(primeMover(53))

// function hamilThon(strArr){
//     let inVertices  = strArr[0].replace(/[\(,\)]/g,'').split
//     let edges = strArr[1].replace(/[\[\]]/g,'').split(',')
//     let outVerticles = strArr[2].replace(/[\(,\)]/g, '').split('')
//     for(let i=0; outVerticles.length-1; i++){
//         let edgR = outVerticles[i]+ '-' + outVerticles[i+1]
//         let edgL = outVerticles[i+1] + '-' + outVerticles[i]
//         if(edges.indexOf(edgR)==-1 && edges.indexOf(edgL)==-1){
//             return outVerticles[i]
//         }
//     }
//     return 'Yes'

// }
// // console.log(hamilThon(["(A,B,C,D)","(A-B,A-D,B-D,A-C)","(C,A,D,B)"]))
// console.log(hamilThon(["(X,Y,Z,Q)","(X-Y,Y-Q,Y-Z)","(Z,Y,Q,X)"]))

// function runLength(str){
//     let arr=str.split('')
//     let cnt = 1
//     let result = ''
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] !== arr[i+1]){
//             // cnt ++
//            result +=  cnt+arr[i] 
//            cnt = 1
//         }else{
//             cnt++ 
//         }
//     }
//     return result

// }
// console.log(runLength('aabbcde'))

// function hamingDistance(strArr){
//     arr1 = strArr[0];
//     arr2 = strArr[1];
//     let cnt =0;
//     for(let i=0; i<arr1.length; i++){
//         if(arr1[i] !== arr2[i]){
//             cnt++
//         }
//     }
//     return cnt
// }
// console.log(hamingDistance(["helloworld", "worldhello"]
// ))

// function pascalsTriangle(array){
//     let result = []
//     num = 10;
//     for(let row =1; row<=num; row++){
//         let arr= []
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
//             for(let k=0; k<array.length; k++){
//                 if(arr[k]==array[k]){
//                     count++
//                 }
//                 if(count==array.length){
//                     return arr[k+1]
//                 }
//             }
//         }
//     }
//     return result
// }
// console.log(pascalsTriangle([1,  7, 21, 35, 35, 21,]))

// function bitwiseOne(array){
//     str1 = array[0];
//     str2 = array[1]
//     sum=[]
//     for(let i=0; i<str1.length;i++){
//         if(parseInt(str1[i])==1){
//             sum.push(parseInt(str1[i]))
//         }else if(parseInt(str2[i])==1){
//             sum.push(parseInt(str2[i]))
//         }
//         else{
//             sum.push(0)
//         }
//     }
//     return sum
// }
// console.log(bitwiseOne(["00011", "01010"]))

// function otherProducts(array){
//     let arrMulti = []
//     for(let i=0; i<array.length; i++){
//         let sum = 1;
//         for(let j = 0; j< array.length; j++){
//             if(i !== j){
//                 sum *=array[j]
//             }
//         }
//         arrMulti.push(sum)
//     }
//     return arrMulti.join('-')
// }
// console.log(otherProducts([3,1,2,6]))


// function primeMover(num){

//     let primes = []
//     for(let i=1;primes.length<=num; i++){
//         if(isPrime(i)){
//             primes.push(i)
//         }
//     }
//     return primes[primes.length-1]
// }
// function isPrime(number){
//     for(let j=2; j<number; j++){
//         if(number % j ==0){
//             return false
//         }
//     }
//     return true
// }
// console.log(primeMover(3))

// function fizzBuzz(num){
//     let str = ''
//     for(let i=1; i<=num; i++){
//         if(i%3==0 && i%5==0){
//             str += 'fizzbuzz '
//         }else if(i%3==0){
//             str += 'fizz '
//         }else if(i%5==0){
//             str +='buzz '
//         }else{
//             str += i + ' '
//         }
//     }
//     return str.trim()

// }
// console.log(fizzBuzz(15))

// function stringScrambles(str1,str2){
//     str1 = str1.split('')
//     str2 = str2.split('')
//     let str3 = []
//     for(let i=0; i<str1.length; i++){
//         for(let j = 0; j<str1.length; j++){
//             if(str2[i]==str1[j]){
//                 str3.push(str1[j])
//                 break
//             }
//         }
//     }
//     return str3.length===str2.length
//     return str3
// }
// console.log(stringScrambles('rkqodlw','world'))


// function letterChanges(str){
//    str = str.toLowerCase()
//    let newArr = []

//    let newStr=''


//    let regex = /[a-z]/g
//    //let arr = str.split('')
//    for(let i = 0; i<str.length; i++){
//       if(str[i].match(/[a-z]/)){
//          let charCode = str[i].charCodeAt(0)+1
//          newArr.push(charCode)
//       }else{
//          newArr.push(str[i])
//       }
//    }
//    for(let i = 0; i<newArr.length; i++){
//       if(newArr[i]>90){
//          newStr +=String.fromCharCode(newArr[i])
//       }else{
//          newStr += newArr[i]
//       }
//    }
//    let newnewStr = ''
//    for(let i = 0; i<newStr.length; i++){
//       if(newStr[i].match(/[aeiou]/)){
//          newnewStr += newStr[i].toUpperCase()
//       }else{
//          newnewStr +=newStr[i]
//       }
//    }
//    return newnewStr
// }

// let input = "fun times!"
// console.log(letterChanges(input))

// function ceaserCipher(str,num){
//     let newArr = []
//     for(let i=0; i<str.length; i++){
//         if(str[i].match(/[a-zA-Z]/)){
//             let chrCode = str[i].charCodeAt(0)+num
//             newArr.push(chrCode)
//         }else {
//             newArr.push(str[i])
//         }
//     }
//     let newStr = ''
//     for(let i=0; i<newArr.length; i++){
//         if(newArr[i]>50){

//             newStr+= String.fromCharCode(newArr[i]) + ''
//         }else{
//             newStr += newArr[i]
//         }
//     }

//     return newStr
// }
// console.log(ceaserCipher('Amul',2))

// function simpleMode(arr){
//     let map = new Map()
//     let count = 1
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[i]==arr[j]){
//                 count++

//             }else{
//                 count =1
//             }

//         }
//         map.set(arr[i], count)
//     }

//     for(const [key, value] of map.entries()){
//         if(value >1){
//             console.log(key)
//         }
//         // console.log(key, value)
//     }
//     return map
// }
// console.log(simpleMode([10, 4, 5, 2, 4]))
// console.log(simpleMode([5,10, 6, 10,5]))

// function differenctCases(string)
// function consecutive(arr) {
//     let total = 0; 
//     let diff=0
//     for(let i=0; i+1<arr.length; i++){
//         diff=(arr[i+1]-arr[i])
//         total+=diff
//     }
//     return total

//     var min = Math.min.apply(Math, arr);
//     var max = Math.max.apply(Math, arr);
//     var num = (max - min) - arr.length + 1;
//     return num;


// }
// console.log(consecutive([4, 8, 6]))

// function numberSearch(str){
//     newStr = str.replace(/[0-9!,@#$%^&*()_+{}:"<>.?/]/g,'').split(' ').join('');
//     newArr = str.replace(/[a-zA-Z!,]/g,'').split(' ').map(Number);
//     let data =newArr.reduce((acc,curr) => acc+=curr,0)
//     return Math.round(data/newStr.length)
// }
// console.log(numberSearch("Hello6 9World 2, Nic8e D7ay!"))

// function distictList(arr){
//     let item={}
//     let total = 0
//     for(let i=0; i<arr.length; i++){
//         if(!(arr[i] in item)){
//             item[arr[i]] = 0
//         }
//         item[arr[i]]++

//     }
//     for (const [key, value] of Object.entries(item)) {
//         if(value>1){
//             total += value -1
//         }
//     }
//     // for(value in item){
//     //     if(item[value] > 1){
//     //         console.log(item[value])
//     //     }
//     // }
//     return total
// }
// console.log(distictList([1, 2, 2, 2, 3]))

// function evenPairs(str){
//     // let regex = /[24680]d*[24680]/
//     // return regex.test(str)
//     var regEx = /[24680]d*[24680]/
//     return regEx.test(str);

// }
// console.log(evenPairs("3gy41d216"))

// function nextPalindrome(num){
//     let count = num + 1
//     while(true){
//         numString = count.toString();
//         revString = numString.split('').reverse().join('')
//         if(revString===numString){
//             return parseInt(numString)
//         }
//         count++
//     }
// }
// console.log(nextPalindrome(24))

// function largestPair(num){
//     let str = num.toString()
//     let newStr = ''
//     let newArr = []
//     for(let i=0; i<str.length;i++){
//         newStr = str.charAt(i) + str.charAt(i+1)
//         newArr.push(newStr)
//     }
//     newArr = newArr.map(Number).sort((a,b)=> a-b)
//     return newArr[newArr.length-1]
// }
// console.log(largestPair(363223311))

// function nonRepeating(str){
//     let item = {}
//     for(let i=0; i<str.length; i++){
//         if(!(str[i] in item)){
//             item[str[i]] = 0
//         }
//         item[str[i]]++
//     }
//     for(const [key,value] of Object.entries(item)){
//         if(value <=1){
//             console.log(key)
//             break
//         }
//     }
//     // return item
// }
// console.log(nonRepeating("agettkgaeee"))

// function twoSum(array) {
//     // let sum = 0;
//     let newArr = []
//     let [arr1, ...arr2] = array
//     let newstr = ''

//     for (let i = 0; i < arr2.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             let sum = arr2[i] + arr2[j + 1]
//             // if (arr2[j + 1] + arr1[i] == arr1) {
//             // }
//             if (arr1 === sum) {
//                 str = arr2[i] + ' ' + arr2[j + 1]

//                 newArr.push(str)
//             }
//         }
//     }
//     let result = []
//     for (let i = 0; i < newArr.length; i++) {
//         for (let j = i ; j < newArr.length; j++)
//             if (newArr[i].split(' ').join('') === newArr[j].split(' ').reverse().join('')) {
//                 result.push(newArr[i])
//             }
//             // else if(!(newArr[i].split(' ').join('') === newArr[j].split(' ').reverse().join(''))){
//             //     result.push(newArr[i])
//             // }

//     }
//     for (let i = 0; i < result.length; i++) {
//         result[i] = result[i].replace(' ', ',')
//     }
//     return result.join(' ')
//     // return newArr
// }
// console.log(twoSum([17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7]))
// console.log(twoSum([7, 6, 4, 1, 7, -2, 3, 12]))


function basicRomanNumerals(str) {
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        c: 100,
        D: 500,
        M: 1000
    }
    let ans = 0;
    for(let i = str.length-1; i>=0; i--){
        let num = roman[str.charAt(i)]
        // console.log(num)
        if(4*num < ans){
            ans -= num
        }else{
            ans+=num
        }
    }
    return ans
}
console.log(basicRomanNumerals("XLVI"))
