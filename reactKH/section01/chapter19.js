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

console.log("============");
for (let e of arr) {
    console.log(e);
}


let arr7 = [
    { name: "가가가", hobby: "영화" },
    { name: "나나나", hobby: "영화" },
    { name: "다다다", hobby: "노래" },
    { name: "라라라", hobby: "게임" },
    { name: "마마마", hobby: "축구" }
];

let arr8 = [
    { name: "바바바", hobby: "독서" },
    { name: "사사사", hobby: "테니스" },
];

console.log(arr7.slice(2, 5));

console.log(arr7.concat(arr8));


let charArray = ["보라돌이", "뚜비", "나나", "뽀"];
console.log(charArray.sort());
console.log(charArray.sort().reverse());

let numArray = [11, 1, 2, 5];
console.log(numArray.sort());
console.log(numArray.sort().reverse());


// numArray.sort((a, b) => b - a);
// console.log(numArray);

const sortedArray = numArray.toSorted((a, b) => b - a);
console.log(numArray);
console.log(sortedArray);


const arr9 = ["보라돌이", "뚜비", "나나", "뽀", "텔레토비"];
const resultStr = arr9.join(" ");
console.log(resultStr);