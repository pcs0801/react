
function repeat2(count, callback) {
    for(let idx = 1; idx <= count; idx++) {
        let result = callback(idx, idx);
        console.log(`result = ${result}`)
    }
}


repeat2(5, (a, b) => a*b);
repeat2(5, (a, b) => a-b);
repeat2(5, (a, b) => a/b);
repeat2(5, (a, b) => a+b);
repeat2(5, (a, b) => a*b*3);






function repeat(count, callback) {
    for(let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat(5, (idx) => {
    console.log(idx);
});

repeat(5, (idx) => {
    console.log(idx * 2);
});
    
repeat(5, (idx) => {
    console.log(idx * 3);
});
    
