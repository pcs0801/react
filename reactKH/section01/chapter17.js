let falseFunc = () => {
    console.log("false 함수");
    return false;
};

let trueFunc = () => {
    console.log("true 함수");
    return true;
};

console.log(trueFunc() && falseFunc());

function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "홍길동" });
