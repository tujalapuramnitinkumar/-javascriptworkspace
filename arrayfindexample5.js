//                       Array.find()

const food = [{ color: 'red', name: 'apple' },
    { color: 'yellow', name: 'banana' },
    { color: 'green', name: 'mango' },
    { color: 'purple', name: 'grape' },
    { color: 'orange', name: 'orange' },
    { color: 'pink', name: 'watermelon' }
];
const fruits = food.find(item => item.color === 'purple');
console.log(fruits);
const watermelon = food.find( (item) => item === 'pink watermelon');
console.log(watermelon);
//                        Array.find() end.....

//                          array.findIndex()

const fruitsIndex = food.findIndex(item => item.color === 'green');
console.log(fruitsIndex);

const watermelonindex = food.findIndex( (item) => item === 'pink watermelon');
console.log(watermelonindex);
//                          array.findIndex() end....


//                                        array.indexof()

const colors = ['red', 'yellow', 'green', 'blue', 'green', 'orange', 'pink', 'purple', 'brown', 'black', 'white', 'gray', 'cyan', 'magenta', 'lime', 'teal', 'navy', 'maroon', 'olive', 'silver', 'gold', 'beige', 'coral', 'indigo', 'ivory', 'khaki', 'lavender', 'mustard', 'peach', 'salmon', 'turquoise','red', 'yellow', 'green', 'blue', 'green'];
console.log(colors.indexOf('green'));
console.log(colors.indexOf('blue'));
 //                                      array.indexof() end.....




//                       Array.lastIndexOf()
console.log(colors.lastIndexOf('green'));
//                        array.lastindexof() end.....






