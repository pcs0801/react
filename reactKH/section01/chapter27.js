let arr1 = [1, 2, 3];
let arr2 = [5, ...arr1, 6];
let arr3 = [...arr1];

console.log(arr1);
arr3[2] = 10;
console.log(arr3);

let obj1 = { a: 1, b: 2 };
console.log(obj1);

let obj2 = { ...obj1, c: 3, d: 4 };
console.log(obj2);

let obj3 = { ...obj2 };
console.log(obj3);

obj3.d = 10;
console.log(obj2);
console.log(obj3);

let arr4 = [1, 2, 3];
function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

funcA(...arr4);



arr5 = [1, 2, 3];
function funcB(one, ...ds) {
    console.log(ds);
}
funcB(...arr5);


let o1 = { name: "보라돌이" };
let o2 = { ...o1 };
let o3 = o1;


console.log(o1 === o2);
console.log(JSON.stringify(o1) === JSON.stringify(o2));