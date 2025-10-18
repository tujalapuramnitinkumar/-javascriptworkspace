// Example of using Array.prototype.reduce to calculate the sum of an array of numbers
//                  Example start.....
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumReducer(accumulator, currentValue) {
    return accumulator + currentValue; // Sum the accumulator and current value
}
const totalSum = numbers.reduce(sumReducer, 0);
console.log("Total Sum:", totalSum); // Output: Total Sum: 55
//                  Example end.....

// Array.reduceright example start.....
const values = [1, 2, 3, 4, 5];
function subtractReducer(accumulator, currentValue) {
    return accumulator - currentValue; // Subtract current value from accumulator
}
const totalSubtraction = values.reduceRight(subtractReducer, 0);
console.log("Total Subtraction (reduceRight):", totalSubtraction); // Output: Total Subtraction (reduceRight): 3
// Array.reduceright example end.....   
//                                         Example end.....

// Array.flat() example start.....
const Number1 = [1, 2, 3, 9, [4, [5, [6 ] ] ] ];
console.log(Number1.flat());
console.log(Number1.flat(1));
console.log(Number1.flat(2));
console.log(Number1.flat(3));
console.log(Number1.flat(4));
// Array.flat() example end.....   
//                                         Example end.....

// array.flatmap() example start.....
const food = [['Apple', 'Banana', 'Cherry', 'Date'],[ 'Elderberry', 'Fig', 'Grape', 'Honeydew']];
const flatFood = food.flatMap(subArray => subArray);
console.log(flatFood);

// array.flatmap() example end.....   
//                                         Example end.....





