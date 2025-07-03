let person = [{
    name: "보라돌이",
    age: 129,
    hobby: "TV보기"
}, {
    name: "뚜비",
    age: 140,
    hobby: "단팥빵먹기",
}];

for (let a of person) {
    console.log(a);
    for (let b in a) {
        console.log(`${b} = ${a[b]}`);
    }

};