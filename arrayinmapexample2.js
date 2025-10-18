           // 02 • Array.map()
const food = ['rice', 'bread' , 'pasta' , 'beans' ];
const breads = food.map( (item) => 'pasta ');
console.log(breads);

const duplications = food.map((any) => any +  ' ' + any);
console.log(duplications);
