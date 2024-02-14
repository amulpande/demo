// JavaScript program to find  
// minimum number of swaps 
// required to sort an array 
  
// Function returns the 
// minimum number of swaps 
// required to sort the array 

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
function minSwaps(arr) 
{ 
    let n = arr.length; 
   
        // Create two arrays and 
        // use as pairs where first 
        // array is element and second array 
        // is position of first element 
        let arrpos = []; 
        for (let i = 0; i < n; i++) 
             arrpos.push([arr[i], i]); 
   
        // Sort the array by array element values to 
        // get right position of every element as the 
        // elements of second array. 
        arrpos.sort(function(a,b){return a[0]-b[0];}); 
   
        // To keep track of visited elements. Initialize 
        // all elements as not visited or false. 
        let vis = new Array(n); 
        for(let i=0;i<n;i++) 
        { 
            vis[i]=false; 
        } 
          
   
        // Initialize result 
        let ans = 0; 
           
        // Traverse array elements 
        for (let i = 0; i < n; i++) 
        { 
            // already swapped and corrected or 
            // already present at correct pos 
            if (vis[i] || arrpos[i][1] == i) 
                continue; 
   
            // find out the number of  node in 
            // this cycle and add in ans 
            let cycle_size = 0; 
            let j = i; 
            while (!vis[j]) 
            { 
                vis[j] = true; 
   
                // move to next node 
                  
                j = arrpos[j][1]; 
                  
                cycle_size++; 
            } 
   
            // Update answer by adding current cycle. 
            if(cycle_size > 0) 
            { 
                ans += (cycle_size - 1); 
            } 
        } 
   
        // Return result 
        return ans; 
} 
  
// Driver class 
let a=[1, 5, 4, 3, 2]; 
console.log(minSwaps(a))