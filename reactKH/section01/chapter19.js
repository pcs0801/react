const arr = [1, 2, 3, 4];
const newArr = [];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};

arr.forEach((e) => {
    console.log(e);
    newArr.push(e + 1);
});

console.log(newArr);

const newMapArr = arr.map((e) => e - 1);

console.log(newMapArr);

arr.forEach((e) => {
    if (e === 2) {
        console.log(e)
    } else {
        console.log("없음")
    }
});

console.log(`있나요? ${arr.includes(4)}`);

console.log(`4번 어디있나요? ${arr.indexOf(4)}번째요`);

const indexResult = arr.findIndex(e => e === 4);

console.log(`4의 findIndex : ${indexResult}`);

let arr5 = [
    { name: "가가가" },
    { name: "나나나" }
]


const resultArray = arr5.find(e => e.name === "가가가");

console.log(resultArray);

let arr6 = [
    { name: "가가가", hobby: "텔레토비" },
    { name: "나나나", hobby: "텔레토비" },
    { name: "다다다", hobby: "보라돌이" },
]
const resultArray2 = arr6.filter(e => e.hobby === "텔레토비");
console.log(resultArray2);

const resultArray3 = arr6.map((e) => {
    return e.name;
});
console.log(resultArray3);
