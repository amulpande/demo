

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