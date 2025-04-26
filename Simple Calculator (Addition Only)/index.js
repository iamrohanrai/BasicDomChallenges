let firstNum = document.getElementById("num1");
let secondNum = document.getElementById("num2");

let btn = document.getElementById("calculateBtn");
let result = document.getElementById("result");

btn.addEventListener("click", function () {
  let sum = parseFloat(num1.value) + parseFloat(num2.value);
  result.textContent = sum;
});
