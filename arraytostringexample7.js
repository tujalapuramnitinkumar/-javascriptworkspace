//           07 • Array.toString()
const food = ['carrot', 'apple', 'mango', 'banana', 'goa', 'potato', 'cabbage',' orange', 'grape' , 'peach' , 'pear' , 'plum' , 'kiwi' , 'watermelon', 'papaya', 'onion', 'garlic' , 'spinach' ];
const foodString = food.toString();
console.log('Array to String:', foodString);
//           Array.toString() end.....

//           Array.join()
const foodStr = food.join(' - ');
console.log('Array Join with - :', foodStr);
//           Array.join() end.....

//                  array.fil() example

const food1 = ['carrot', 'apple', 'mango', 'banana', 'goa', 'potato', 'cabbage',' orange', 'grape' , 'peach' , 'pear' , 'plum' , 'kiwi' , 'watermelon', 'papaya', 'onion', 'garlic' , 'spinach' ];
food1.fill('apple', 3, 7, 10, 15, 18,);
food1.fill('apple', 12, 14);
console.log('Array fill with apple :', food1);
//                  array.fill() end.....

//                  array.copywithin()

const food2 = ['carrot', 'apple', 'mango', 'banana', 'goa', 'potato' ];
food2.copyWithin(2,4,7);
console.log('Array copyWithin :', food2);

//                  array.copywithin() end.....

//           Array.slice()

const food3 = ['carrot', 'apple', 'mango', 'banana', 'goa', 'potato' ];
food3.slice = food3.slice( );
console.log('Sliced Array food3:', food3.slice);
const food4 = ['carrot', 'apple', 'mango', 'banana', 'goa', 'potato' ];
food4.slice = food4.slice( 2);
console.log('Sliced Array food4:', food4.slice);
const food5 = ['carrot', 'apple', 'mango', 'banana', 'goa', 'potato' ];
food5.slice = food5.slice( 2,4);
console.log('Sliced Array food5:', food5.slice);

//           Array.slice() end.....

