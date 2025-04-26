let increment = document.getElementById("incrementBtn");
let decrement = document.getElementById("decrementBtn");
let reset = document.getElementById("resetBtn");
let display = document.getElementById("counterDisplay");
let counter = 0;

increment.addEventListener("click", function () {
  counter++;
  display.textContent = counter;
});

decrement.addEventListener("click", function () {
  if (counter > 0) {
    counter--;
    display.textContent = counter;
  }
});

reset.addEventListener("click", function () {
  counter = 0;
  display.textContent = counter;
});
