//                  array.splice() start.....
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
months.splice();
console.log(months);        // no change
months.splice(0, 1); // delete January
console.log(months);// delete January
months.splice(0, 1, 'January');  // delete february and add January
console.log(months);
months.splice(5, 2, 'June', 'July');  // delete June and July and add June and July
console.log(months);
months.splice(10, 2);  // delete November and December
console.log(months);
months.splice(10, 0, 'November', 'December');  // add November and December
console.log(months);    
months.splice(4, 1, 'May', 'Midyear');  // delete May and add May and Midyear
console.log(months);    
//                  array.splice() end.....