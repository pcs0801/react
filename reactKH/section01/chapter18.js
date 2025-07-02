const person = {
    name: "가가가",
    age: 22,
    height: 222,
    name2: "나나나",
    age2: 33,
    height2: 333,
    name3: "다다다",
    age3: 44,
    height3: 444,
};

let keyArray = Object.keys(person);
let valArray = Object.values(person);

console.log(keyArray);
console.log(valArray);

for (let i = 0; i < keyArray.length; i++) {
    console.log(`${keyArray[i]} : ${valArray[i]}`);
};

