/*
 * Using the JavaScript language, have the function lineOrdering(strArr) read
 * the strArr parameter being passed which will represent the relations among
 * people standing in a line. The structure of the input will be
 * ["A>B","B>C","A<D",etc..]. The letters stand for different people and the
 * greater than and less than signs stand for a person being in front of someone
 * or behind someone. A>B means A is in front of B and B<C means that B is
 * behind C in line. For example if strArr is: ["J>B","B<S","D>J"], these are
 * the following ways you can arrange the people in line: DSJB, SDJB and DJSB.
 * Your program will determine the number of ways people can be arranged in
 * line. So for this example your program should return the number 3. It also
 * may be the case that the relations produce an impossible line ordering,
 * resulting in zero as the answer.
 *
 * Only the symbols <, >, and the uppercase letters A...Z will be used. The
 * maximum number of relations strArr will contain is ten.
 *
 * https://www.coderbyte.com/results/bhanson:Line%20Ordering:JavaScript
 *
 * @param  {array} strArr
 * @return {number}
 */
function lineOrdering(strArr) {
    // Unique people
    const people = Array.from(new Set(strArr.join(',').match(/[A-Z]+/g)));

    // Brute-force all permutations
    const peoplePermutations = permute(people);
    // const validPermutations = [];

    // peoplePermutations.forEach(permutation => {
    //     const permutationValid = relationsPossible(permutation, strArr);
    //     if (permutationValid) {
    //         validPermutations.push(permutation);
    //     }
    // });
    return people
}

function relationsPossible(people, relations) {
    for (let i = 0; i < relations.length; i++) {
        let [personA, relationship, personB] = relations[i].split('');
        // Switch everything to A > B
        if (relationship === '<') {
            [personB, personA] = [personA, personB];
        }

        const indexPersonA = people.indexOf(personA);
        const indexPersonB = people.indexOf(personB);

        if (indexPersonA <= indexPersonB) {
            return false;
        }
    }
    return true;
}

function permute(arr) {
    let count = Array(arr.length).fill(0);

    const results = [arr.slice()];

    let i = 0;
    while (i < arr.length) {
        if (count[i] < i) {
            if (i % 2 === 0) {
                const temp = arr[0];
                arr[0] = arr[i];
                arr[i] = temp;
            } else {
                const temp = arr[count[i]];
                arr[count[i]] = arr[i];
                arr[i] = temp;
            }
            results.push(arr.slice());
            count[i]++;
            i = 0;
        } else {
            count[i] = 0;
            i++;
        }
    }
    return results;
}
/*
function lineOrdering(strArr) {
  // Helper function to generate all permutations of an array
  function generatePermutations(arr) {
    if (arr.length === 1) {
      return [arr];
    }

    const permutations = [];
    for (let i = 0; i < arr.length; i++) {
      const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
      const current = arr[i];
      const subPermutations = generatePermutations(remaining);
      for (const perm of subPermutations) {
        permutations.push([current, ...perm]);
      }
    }

    return permutations;
  }

  // Helper function to check if a permutation satisfies the relations
  function isValidPermutation(permutation) {
    for (const relation of strArr) {
      const [first, second] = relation.split(/[<>]/);
      const firstIndex = permutation.indexOf(first);
      const secondIndex = permutation.indexOf(second);

      if (relation.includes('>')) {
        if (firstIndex >= secondIndex) {
          return false;
        }
      } else if (relation.includes('<')) {
        if (firstIndex <= secondIndex) {
          return false;
        }
      }
    }
    return true;
  }

  // Get all possible permutations of the people
  const people = [...new Set(strArr.join('').match(/[A-Z]/g))];
  const permutations = generatePermutations(people);

  // Count valid permutations
  let count = 0;
  for (const permutation of permutations) {
    if (isValidPermutation(permutation)) {
      count++;
    }
  }

  return count;
}

// Example usage:
const result = lineOrdering(["J>B","B<S","D>J"]);
console.log(result); // Output: 3

*/

console.log(lineOrdering(['A>B', 'A<C', 'C<Z']))
console.log(lineOrdering(['A>B', 'B<R', 'R<G']))
console.log(lineOrdering(['J>B', 'B<S', 'D>J']))
