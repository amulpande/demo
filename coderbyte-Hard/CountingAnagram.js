/*
Using the Python language, have the function CountingAnagrams(str) take the
str parameter and determine how many anagrams exist in the string. An anagram
is a new word that is produced from rearranging the characters in a
different word, for example: cars and arcs are anagrams. Your program
should determine how many anagrams exist in a given string and return
the total number. For example: if str is "cars are very cool so are arcs
and my os" then your program should return 2 because "cars" and "arcs"
form 1 anagram and "so" and "os" form a 2nd anagram. The word "are" occurs
twice in the string but it isn't an anagram because it is the same word
just repeated. The string will contain only spaces and lowercase letters,
no punctuation, numbers, or uppercase letters. 


Input:"aa aa odg dog gdo"
Output:2

Input:"a c b c run urn urn"
Output:1
*/

function countingAnagram(str){
    let arr = str.split(' ').sort();
    let anagram = 0;
    for(let i=0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] == arr[j]){
                break;
            }
            if(arr[i].split('').sort().join() === arr[j].split('').sort().join()){
                anagram +=1
                break
            }
        }
    }
    return anagram
}
console.log(countingAnagram('aa aa odg dog gdo'))
