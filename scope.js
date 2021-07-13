let extra = 2;

function multiply(num1, num2) {
    let multiplication = num1 * num2 * extra;
    // console.log(extra)
    if (multiplication > 10) {
        const comment = 'Its nice'
        console.log(comment);
    }
    return multiplication;
}

const result = multiply(5, 3);
// console.log(extra);
console.log(result);