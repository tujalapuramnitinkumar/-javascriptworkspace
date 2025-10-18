           // 03 • Array.filter()
const food = ['carrot', 'apple', 'mango', 'banana', 'goa', 'potato', 'cabbage'];
const fruits = food.filter((item) => ['apple', 'mango', 'banana', 'goa'].includes(item));
console.log("Fruits:", fruits);
const vegetables = food.filter((item) => !['apple', 'mango', 'banana', 'goa'].includes(item));
console.log("Vegetables:", vegetables);

