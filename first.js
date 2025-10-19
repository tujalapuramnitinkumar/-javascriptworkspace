    /* Create an array of fruits with values "apple", "banana", "mango". Print the 2nd element. */

let fruits = ["apple", "banana", "mango",]
console.log(fruits[2]);

    /* Create an array of 5 numbers and print its length. */

let number = [1,2,3,4,5,6,7,8,9,]
let arrayLength = number.length;
console.log("The length of the array is:", arrayLength);

/* Start with colors = ["red", "green"]. Add "blue" at the end and remove "red"  */

let colors = ["red", "green"]
colors.push("blue")
console.log(colors[2]);

/* Merge a = [1,2,3] and b = [4,5,6] into one array.*/
    
var a = [1,2,3,] 
var b = [4,5,6]
var result = a+b ;
console.log(result);

/* From [10,15,20,25,30], create a new array with only even numbers. */

let originalArray1 = [10, 15, 20, 25, 30, 56, 88, 99, 100,];
let evenNumbersArray = originalArray1.filter(number => number % 2 === 0);
console.log(evenNumbersArray);

/* From [1,2,3,4], create a new array where each element is doubled */

let originalArray2 = [1, 2, 3, 4, 5, 6, 7, 8]
let doubledArray2 = originalArray2.map( originalArray2 => originalArray2 * 2)
console.log(doubledArray2); 

/* Find the total sum of [10,20,30,40]. */
let original = [10, 20, 30, 40]
let sum = original.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// [10, 20, 30].reduce((a,b)=>a+b)
console.log(sum); 