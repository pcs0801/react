let arr = [1, 2, 3];
let arr2 = arr;

let [first, second, third = 4, fourth = 5] = arr;

console.log(arr);
console.log(first, second, third, fourth);



let person = {
    name: "보라돌이",
    age: 30,
    hobby: "TV보기"
};

let personCopy = person;
let names = personCopy.name;

let { age, hobby, name, extra = "hello" } = personCopy;
console.log(age, hobby, name, extra);


let person2 = {
    name: "보라돌이",
    age: 30,
    hobby: "TV보기"
};

const func = (name, age, hobby, extra = "hello") => { console.log(name, age, hobby, extra) };

func(person2);