/* QUESTION:
Have the function MaximalSquare(strArr) take the strArr parameter being passed which will be a 2D matrix of 0 and 1's, and determine the area of the largest square submatrix that contains all 1's. A square submatrix is one of equal width and height, and your program should return the area of the largest submatrix that contains only 1's. For example: if strArr is ["10100", "10111", "11111", "10010"] then this looks like the following matrix:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

For the input above, you can see the bolded 1's create the largest square submatrix of size 2x2, so your program should return the area which is 4.
You can assume the input will not be empty.
*/

//Modified 2D Maximal Square algo (dynamic programming)
//Skips if the max square sum is not k*k

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


// function MaximalSquare(strArr) {
//     var arr = [];

//     var i,j;
//     //Make string array a 2D array.
//     for(i=0;i<strArr.length;i++){
//         arr.push(strArr[i].split(""));
//     }

//     var anyOnes = false;
//     //Create the DP array/summation table
// 	//Single pass - O(n^2)
//     for(i=0;i<arr.length;i++){
//         for(j=0;j<arr[i].length;j++){
//             arr[i][j] = parseInt(arr[i][j]); //make int first cos it's parsed as a string
//             if(arr[i][j]==1) anyOnes = true;

//             if(i>0) arr[i][j] += arr[i-1][j];
//             if(j>0) arr[i][j] += arr[i][j-1];
//             if(i>0 && j>0) arr[i][j] -= arr[i-1][j-1];             //avoid double counting
//         }
//     }

//     if(!anyOnes) return 0;

//     mx = 1;
//     sm = 0;

// 	//Pass over again, with matrix k - O(n^2*k)
//     for(i=0;i<arr.length;i++) for(j=0;j<arr[i].length;j++){ //start coord
//         for(k=1;k<arr.length;k++){ //size of matrix, skip 1x1 because we know it'll be one unless there are no ones (checked beforehand)
// 			/* End coordinates */
//             end_i = i+k;
//             end_j = j+k;
// 			if(end_i>=arr.length || end_j>=arr[i].length) break;

// 			/* Sum from DP summation array/table */
//             sm = arr[end_i][end_j]; //sum from (0,0) to (end_i, end_j) - O(1)
//             if(i>0) sm -= arr[i-1][end_j]; //exclude subrect (0,0) to (i-1,end_j) - O(1)
//             if(j>0) sm -= arr[end_i][j-1]; //exclude subrect (0,0) to (end_i,j-1) - O(1)
//             if(i>0 && j>0) sm += arr[i-1][j-1]; //include back the double counted excluded (0,0) to (i-1,j-1) subrect - O(1)
//             //The sum is finally here: sum from (i,j) to (end_i,end_j) - total O(4)

//             if(sm!=(k+1)*(k+1)) continue;

//             if(sm>mx){
//                 mx = sm;
//             }
//         }
//     }

//     // Return mx. Total O(2*n^2*k*4) = O(8*n^2*k)
//     return mx;
// }

// //For testing purposes
// /*
// readline = ()=>{
// 	return ["0111", "1111", "1111", "1111"];
// }
// //*/

// // keep this function call here
// MaximalSquare(readline());
