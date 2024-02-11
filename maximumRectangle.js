/*
hard
Time left: (viewing as admin)
Maximal Rectangle
Have the function MaximalRectangle (strArr) take the strArr parameter being passed which will be a 2D matrix of 0 and 1's, 
and determine the area of the largest rectangular submatrix that contains all 1's. For example: if strArr is ["10100", "10111", "11111", "10010"] 
then this looks like the following matrix:
1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
For the input above, you can see the bolded 1's create the largest rectangular submatrix of size 2x3, so your program should return the 
area which is 6. You can assume the input will not be empty.
*/
function MatrixSpiral(strArr) {
    let matrix = strArr.map((el) => [...el]);
    var n = matrix.length;
    var m = (matrix[0] || []).length;
    var max = 0;
    var heights = Array(m);
    var stack = [];
    var h = 0;
    var w = 0;
  
    for (var i = 0; i < n; i++) {
      stack = [];
  
      for (var j = 0; j < m; j++) {
        if (matrix[i][j] === "1") {
          heights[j] = i === 0 ? 1 : heights[j] + 1;
        } else {
          heights[j] = 0;
        }
  
        while (stack.length && heights[j] <= heights[stack[stack.length - 1]]) {
          h = heights[stack.pop()];
          w = stack.length === 0 ? j : j - stack[stack.length - 1] - 1;
          max = Math.max(max, h * w);
        }
  
        stack.push(j);
      }
  
      while (stack.length) {
        h = heights[stack.pop()];
        w = stack.length === 0 ? m : m - stack[stack.length - 1] - 1;
        max = Math.max(max, h * w);
      }
    }
  
    return max;
  }
  console.log(MatrixSpiral(["101", "111", "001"]));