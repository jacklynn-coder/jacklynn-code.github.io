let firstNumber  = document.getElementById("firstNum");
let secondNumber = document.getElementById("secNum");

let operator = document.getElementById("operator");

let calculateBtn = document.getElementById("calculateBtn");
let result       = document.getElementById("result");


calculateBtn.addEventListener("click",calculate);


function calculate() {

    let answer;

    let num1 = firstNumber.value;
    let num2 = secondNumber.value;
    if(operator.value==="+")
    {
        answer = parseFloat(num1) + parseFloat(num2);
    }
    else if(operator.value==="-")
    {
        answer = parseFloat(num1) - parseFloat(num2);
    }
    else if(operator.value==="*")
    {
        answer = parseFloat(num1) * parseFloat(num2);
    }
    else if(operator.value==="/")
    {
        answer = parseFloat(num1) / parseFloat(num2);
    }
    result.innerText = answer;
}