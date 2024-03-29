/*
Have the function TransitivityRelations(strArr) read the strArr parameter being passed which will make up an NxN matrix where the rows are 
separated by each pair of parentheses (the matrix will range from 2x2 to 5x5). The matrix represents connections between nodes in a graph 
where each node corresponds to the Nth element in the matrix (with 0 being the first node). If a connection exists from one node to another, 
it will be represented by a 1, if not it will be represented by a 0. For example: suppose strArr were a 3x3 matrix with input
["(1,1,1)","(1,0,0)","(0,1,0)"], this means that there is a connection from node 0->0, 0->1, and 0->2. For node 1 the connections are 1->0, 
and for node 2 the connections are 2->1. This can be interpreted as a connection existing from node X to node Y if there is a1 in the 
Xth row and Yth column. Note: a connection from X->Y does not imply a connection from Y->X. What your program should determine is whether 
or not the matrix, which represents connections among the nodes, is transitive. Atransitive relation means that if the connections 0->1 and 1->2 
exist for example, then there must exist the connection 0->2. More generally, if there is a relation xRy and yRz, then xRz should exist 
within the matrix. If a matrix is completely transitive, return the string transitive. If it isn't, your program should return the connections 
needed, in the following format, in order for the matrix to be transitive: (N1,N2)-(N3,N4)-(...). So for the example above, your program should 
return (1,2)-(2,0). You can ignore the reflexive property of nodes in your answers. Return the connections needed in lexicographical 
order [e.g. (0,1)-(0,4)-(1,4)-(2,3)-(4,1)].

Input = "(1,1,1)","(0,1,1)","(0,1,1)" Output = "transitive"

Input = "(0,1,0,0)","(0,0,1,0)","(0,0,1,1)","(0,0,0,1)" Output = "(0,2)-(0,3)-(1,3)"
*/
/*
function TransitivityRelations(strArr) {
    const matrix = strArr.map(row => row.replace(/[()]/g, '').split(',').map(Number));
    const n = matrix.length;
    let missingConnections = [];

    // Check if the matrix is transitive
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 1) {
                for (let k = 0; k < n; k++) {
                    if (matrix[j][k] === 1 && matrix[i][k] !== 1) {
                        missingConnections.push(`(${i},${j})-(${j},${k})-(${i},${k})`);
                    }
                }
            }
        }
    }

    if (missingConnections.length === 0) {
        return "transitive";
    } else {
        return missingConnections.sort().join('-');
    }
}

// Test cases
console.log(TransitivityRelations(["(1,1,1)","(0,1,1)","(0,1,1)"]));  // Output: "transitive"
console.log(TransitivityRelations(["(0,1,0,0)","(0,0,1,0)","(0,0,1,1)","(0,0,0,1)"]));  // Output: "(0,2)-(0,3)-(1,3)"

*/
function TransitivityRelations(strArr) { 
    let arr = [];
    let res = [];
    for (let i=0; i<strArr.length; i++) {
      arr.push(strArr[i].replace("(","").replace(")","").split(","));
    }
    
    for (let j in arr) {
      for (let k in arr[j]) {
          arr[j][k] = Number(arr[j][k]);
      }
    }
    
    for (let l in arr)
      for (let m in arr[0])
        if (arr[l][m] === 1)
          for (let o = 0; o < arr[0].length; o++) { 
            if(arr[m][o] === 1 && (arr[l][o] === 0 && l != o)) {
              res.push("(" + l + "," + o + ")");
              arr[l][o] = 1;
            }
          }
    return res.length === 0 ? "transitive" : res.sort().join("-");
}

