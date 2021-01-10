/*
Day = 02

loops

problem = https://www.hackerrank.com/challenges/js10-loops/problem
*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var v = ['a', 'i', 'o', 'u', 'e'];
    for (var i = 0; i < s.length; i++) {
        if (v.indexOf(s[i]) > -1) {
            console.log(s[i]);
        }
    }
    for (var j = 0; j < s.length; j++) {
        if (v.indexOf(s[j]) < 0) {
            console.log(s[j]);
        }
    }

}