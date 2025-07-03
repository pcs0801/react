// function task() {
//     setTimeout(() => {
//         console.log("hello");
//     }, 3000);
// }
// task();

// function add(a, b) {
//     setTimeout(() => {
//         const sum = a + b;
//         console.log(sum);
//     }, 3000);
// }
// add(1, 2);

// function add2(a, b, callback) {
//     setTimeout(() => {
//         const sum = a + b;
//         callback(sum);
//     }, 3000);
// }

// add(1, 2, sum => console.log(sum));


function orderFood(food, callback) {
    console.log(food + "음식주문");
    setTimeout(() => { callback(food) }, 3000);
};

// // orderFood("백숙", (food) => {
// //     console.log(food + "주문완료");
// // });


function coldFood(food, callback) {
    console.log(food + "찬 음식주문");
    setTimeout(() => { callback(food) }, 3000);
};

// coldFood("백숙", (food) => {
//     console.log(food + "찬 음식 주문완료");
// });

function freezeFood(food, callback) {
    console.log(food + "냉동요청");
    setTimeout(() => { callback(food) }, 2000);
};

orderFood("백숙", (food) => {
    console.log(food + "주문완료");
    coldFood("백숙", (food) => {
        console.log(food + "차게 완료");
        freezeFood("백숙", (food) => {
            console.log(food + "냉동완료");
        });
    });
});