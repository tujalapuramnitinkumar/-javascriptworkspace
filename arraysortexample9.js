//                  Example: Sorting a larger array of numbers in different ways

const numbers = [5, 3, 8, 1, 2, 7, 4, 6, 10, 9, 15, 12, 14, 11, 13, 20, 18, 17, 16, 19, 25, 22, 21, 24, 23, 30, 28, 27, 26, 29];
numbers.sort();
console.log(numbers);   // sorted as strings
numbers.sort((a, b) => a - b);
console.log(numbers);   // sorted in ascending order
numbers.sort((a, b) => b - a);
console.log(numbers);   // sorted in descending order

//                           Sorting an array of strings end....  

//                              array.reverse() example
const numbers2 = [1, 2, 3, 4, 5];
numbers2.reverse();
console.log(numbers2);   // reversed order
//                              array.reverse() example end....
//                  Example end.....