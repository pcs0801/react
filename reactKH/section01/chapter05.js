let num1 = 10;
let num2 = 3;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

let num3 = -Infinity;
console.log(num3);
console.log(typeof num3);

let str1 = "10";
let str1ToNum4 = Number(str1);
console.log(str1ToNum4);

let num5 = Number("20");
console.log(num5);

let num6 = parseInt("20test");
console.log(num6);

let nullTest;
let nullNum = 100;
nullTest = nullNum ?? 0;

console.log(`nullTest = ${nullTest}`);