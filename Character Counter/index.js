let input = document.getElementById("userInput");
let count = document.getElementById("charCount");

input.addEventListener("input", function () {
  //   count.textContent = input.value;
  count.textContent = input.value.length;
});
