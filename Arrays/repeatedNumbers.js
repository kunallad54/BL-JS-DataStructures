
/**
 * Problem : Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc
 *           and store them in an array
 * 
 * @author Krunal Lad
 * @since 23-=07-2021
 */

function repeatedNumbers(){
    let arrayOfRepeatedNumbers = [];
    for(i = 1; i <= 100; i++){
        if(i % 11 == 0){
            arrayOfRepeatedNumbers.push(i);
        }
    }
    console.log(`Repeated numbers from 1 to 100 are : ${arrayOfRepeatedNumbers}`);
}
repeatedNumbers();