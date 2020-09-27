/*
 Day 1: Let and Const
 Problem = https://www.hackerrank.com/challenges/js10-let-and-const/problem
*/


// ====== Solution ======

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

function main(r) {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    var r = readLine();
    const P = Math.PI;
    //const R = +(r);
    // Print the area of the circle:
    let area = P * r * r;
    console.log(area);
    // Print the perimeter of the circle:
    let perimeter = 2 * P * r;
    console.log(perimeter)
    try {
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch (error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}