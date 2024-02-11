/*
Using the Python language, have the function PatternChaser(str)
take str which will be a string and return the longest pattern
within the string. A pattern for this challenge will be defined as:
if at least 2 or more adjacent characters within the string repeat
at least twice. So for example "aabecaa" contains the pattern aa,
on the other hand "abbbaac" doesn't contain any pattern. Your program
should return yes/no pattern/null. So if str were "aabejiabkfabed" the
output should be yes abe. If str were "123224" the output should return
no null. The string may either contain all characters (a through z only),
integers, or both. But the parameter will always be a string type.
The maximum length for the string being passed in will be 20 characters.
If a string for example is "aa2bbbaacbbb" the pattern is "bbb" and not "aa".
You must always return the longest pattern possible.

Input:"da2kr32a2"
Output:"yes a2"

Input:"sskfssbbb9bbb"
Output:"yes bbb"
*/
function PatternChaser(str) {

    let longestPattern = "";

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            let currentPattern = str.slice(i, j + 1);

            // Check if the current pattern repeats at least twice in the remaining string
            if (str.slice(j + 1).includes(currentPattern)) {
                // Check if the current pattern is longer than the current longest pattern
                if (currentPattern.length > longestPattern.length) {
                    longestPattern = currentPattern;
                }
            }
        }
    }

    if (longestPattern.length >= 2) {
        return "yes " + longestPattern;
    } else {
        return "no null";
    }
}

// Test cases
console.log(PatternChaser("da2kr32a2"));  // Output: "yes a2"
console.log(PatternChaser("sskfssbbb9bbb"));  // Output: "yes bbb"
console.log(PatternChaser('amulpandehuamul'))

// function PatternChaser(string) {
//     var p = "";
//     var hash = {};
//     for (var i = 2; i <= Math.floor(string.length / 2); i++) {
//         for (var j = 0; j < string.length - i + 1; j++) {
//             var pat_prev = "";
//             if (j === 0) {
//                 pat_prev = "";
//             } else {
//                 pat_prev = string.substring(j - 1, i + j - 1);
//             }
//             var pat = string.substring(j, i + j);
//             if (hash.hasOwnProperty(pat)) {
//                 if (pat !== pat_prev) {
//                     p = pat;
//                 }
//             } else {
//                 hash[pat] = pat;
//             }
//         }
//     }
//     if (p === "") {
//         return "no null";
//     } else {
//         return "yes " + p;
//     }
// }

