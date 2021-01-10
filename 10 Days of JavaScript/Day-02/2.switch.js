/*
Day = 02

conditional Statment

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


    switch (s.charAt(0)) {
        case ('a' || 'e' || 'o' || 'i' || 'u'):
            letter = "a";
            break;
        case ('b' || 'c' || 'd' || 'f' || 'g'):
            letter = "b";
            break;
        case ('h' || 'j' || 'k' || 'l' || 'm'):
            letter = "c";
            break;

        default:
            letter = "D"

    }
    return letter.toUpperCase();
}


function main() {
    const s = readLine();

    console.log(getLetter(s));
}