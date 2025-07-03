let date = new Date();
console.log(date);

let date2 = new Date(2025, 7 - 1, 2, 23, 59, 59);
console.log(date2);

let date3 = new Date();
let timeValue = date3.getTime();
console.log(timeValue);

let date4 = new Date(timeValue);
console.log(date4);

console.log(date2.toDateString());
console.log(date2.toLocaleString());