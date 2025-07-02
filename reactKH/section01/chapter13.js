let obj1 = new Object();
let obj2 = {};



console.log(obj1);
console.log(obj2);

let person = {
    name: "홍길동",
    age: 30,
    hobby: "축구",
    job: "Developer",
    extra: {},
    extra2: function () { },
    "like cat": true,
};
person.name = 30;
person.adddddd = 1;
console.log(person);
delete person.adddddd;
console.log(person);

let result1 = "adddddd" in person;
console.log(result1);