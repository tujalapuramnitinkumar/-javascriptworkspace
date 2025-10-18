// Example 10: Using Array.from() to convert a string into an array of characters and then into an array of numbers
//                  Example 10 start.....
const str ="1234567890";
const arr = Array.from(str);
console.log(arr); 
const numbers = Array.from(str ,(Element) => Number(Element));
console.log(numbers);   

// Example 10 end.....
const food = ['Pizza', 'Burger', 'Pasta', 'Salad'];
const foodArray = Array.from(food);
console.log(foodArray);
Array.isArray(food); // true
console.log(Array.isArray(food));
Array.isArray(); // false
console.log(Array.isArray());
const obj = {foo:123};
Array.isArray(obj); // false
console.log(Array.isArray(obj));
Array.isArray(undefined); // false
console.log(Array.isArray(undefined));
//                  Example end.....

//      array.valueof() example start.....
const fruits = ['Apple', 'Banana', 'Cherry'];
const fruitsValue = fruits.valueOf();
console.log(fruitsValue);  // ['Apple', 'Banana', 'Cherry']
//      array.valueof() example end.....

//                                         array.entries() example start.....
const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange', 'Pink', 'Brown', 'Black', 'White', 'Gray', 'Cyan', 'Magenta'];
const colorEntries = colors.entries();  
for (const [index, color] of colorEntries) {
    console.log(index, color);
}
//                                      array.entries() example end.....

//                                           Example end.....

//                          array.keys() example start.....
const animals = ['Dog', 'Cat', 'Elephant', 'Tiger', 'Lion', 'Giraffe', 'Zebra', 'Kangaroo', 'Panda', 'Koala'];
const animalKeys = animals.keys();  
for (const key of animalKeys) {
    console.log(key);
}
//                          array.keys() example end.....

//                                           Example end.....

//                          array.values() example start.....
const vehicles = ['Car', 'Bike', 'Truck', 'Bus', 'Train', 'Airplane', 'Boat', 'Scooter', 'Subway', 'Helicopter'];
const vehicleValues = vehicles.values();    
for (const value of vehicleValues) {
    console.log(value);
}   
//                          array.values() example end.....
//                                           Example end.....