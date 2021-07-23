
/**
 * Problem : Extend the Prime Factorization Program to store all the Prime Factors of a 
 *           number n into an array and finally display the output.
 * 
 * @author Krunal Lad
 * @since 23-07-2021
 */

const prompt = require('prompt-sync')();

let isPrime = 0;
let arrayOfPrimeFactors = [];
let number = parseInt(prompt("Enter any number to print its prime factors: "));

for (i = 2; i <= number; i++) {
    let a = number % i;
    if (a == 0) {
        isPrime = 1;
        for (j = 2; j <= i / 2; j++) {
            let b = i % j;
            if (b == 0) {
                isPrime = 0;
                break;
            }
        }
        if (isPrime == 1) {
            arrayOfPrimeFactors.push(i);
        }
    }
}
if (isPrime == 0 || isPrime == 1) {
    console.log(arrayOfPrimeFactors);
}