const person = {
    name: "홍길동",

    sayHi() {
        console.log("안녕!");
    },

    sayHi2: function () {
        console.log("안녕2!");
    },

    sayHi3: () => {
        console.log("안녕3!");
    },

    sayHi4() {
        console.log("안녕!");
    },
};

console.log(person);
person.sayHi2;