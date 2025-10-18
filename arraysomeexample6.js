//                      Array.some()

const food = ['carrot', 'apple', 'mango', 'banana', 'goa', 'potato', 'cabbage',];
const hasBanana = food.some((item) => item === 'banana');
console.log('Contains Banana:', hasBanana);

const hasspinach = food.some((item) => item === 'spinach');
console.log('Contains spinach:', hasspinach);

//                      Array.some() ends here

//                      Array.every()

const allBananas = food.every((item) => item === 'banana');
console.log('All are Bananas:', allBananas);

//                      Array.every() ends here

//                      Array.includes()

const food1 = ['carrot', 'apple', 'mango', 'banana', 'goa', 'potato', 'cabbage',];
const hasBanana1 = food.includes('banana');
console.log('Contains Banana:', hasBanana1);
const hasSpinach1 = food.includes('spinach');
console.log('Contains Spinach:', hasSpinach1);

//                      Array.includes() ends here

//                      Array.push()

const food2 = ['carrot', 'apple', 'mango' , 'banana', 'goa' , 'potato', 'cabbage' ,'orange', 'grape' , 'peach' , 'pear' , 'plum' , 'kiwi' ];
const newLength = food2.push('watermelon', 'papaya');
const newLength1 = food2.push('onion', 'garlic');
console.log('New Length after push:', newLength);
console.log('New Length after push:', newLength1);
console.log('Updated food array:', food2);

//                      Array.push() ends here

//                      Array.unshift()

const food3 = ['carrot', 'apple', 'mango' , 'banana', 'goa' , 'potato', 'cabbage' ,'orange', 'grape' , 'peach' , 'pear' , 'plum' , 'kiwi' ];
const newLength2 = food3.unshift('onion', 'garlic');
console.log('New Length after unshift:', newLength2);
console.log('Updated food array after unshift:', food3);

//                      Array.unshift() ends here

//                      Array.pop()
const food4 = ['carrot', 'apple', 'mango' , 'banana', 'goa' , 'potato', 'cabbage' ,'orange', 'grape' , 'peach' , 'pear' , 'plum' , 'kiwi' ];
const removedItem = food4.pop();
console.log('Removed Item after pop:', removedItem);
console.log('Updated food array after pop:', food4);
//                      Array.pop() ends here

//                      Array.shift()
const food5 = ['carrot', 'apple', 'mango' , 'banana', 'goa' , 'potato', 'cabbage' ,'orange', 'grape' , 'peach' , 'pear' , 'plum' , 'kiwi' ];
const removedItem1 = food5.shift();
console.log('Removed Item after shift:', removedItem1);
console.log('Updated food array after shift:', food5);
//                      Array.shift() ends here
