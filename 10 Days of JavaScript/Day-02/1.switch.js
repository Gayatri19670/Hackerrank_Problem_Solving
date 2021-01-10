/*

problem = https://www.hackerrank.com/challenges/js10-switch/problem

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

function getLetter(s) {
    let letter;
    //letter ="abcd";

    let n = 1;
    switch (n) {
        case 1:
            letter = s[0];
            break;
    }
    // Write your code here

    return letter.toUpperCase();
}