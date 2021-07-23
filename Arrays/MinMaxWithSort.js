
/**
 * Problem : Extend the above program to sort the array and then find the 2nd largest 
 *           and the 2nd smallest element.
 * 
 * @author Krunal Lad
 * @since 23-07-2021
 */

function minMaxWithSort(){
    let arrayOfRandomNumbers = [];
    for(i = 0; i < 10; i++){
        randomNumber = Math.floor(Math.random() * 899 + 100);
        arrayOfRandomNumbers.push(randomNumber);
    }
    arrayOfRandomNumbers.sort();
    console.log(`10 Random Numbers in sorted order are : ${arrayOfRandomNumbers}`);
    console.log(`Second largest element is : ${arrayOfRandomNumbers[8]}`);
    console.log(`Second smallest element is : ${arrayOfRandomNumbers[1]}`);
}
minMaxWithSort();