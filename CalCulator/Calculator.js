console.log("Hello World!");

let result = document.getElementById("input");


function btns(a) {
    let value = a;
    result.value += value;
};

function Equals(e) {
    if (result.value === '') {
        result.value = 'Please Enter a Value';
    } else {
        let answer = eval(result.value);
        result.value = answer;
    }
}

function Clear(e) {
    result.value = '';
}
