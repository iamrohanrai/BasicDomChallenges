let input = document.getElementById("textArea");
let count = document.getElementById("charCount");
let wordCount = document.getElementById("wordCount");

input.addEventListener("input", function () {
  let text = input.value.trim();
  count.textContent = text.length;

  let words = text === "" ? 0 : text.split(/\s+/).length;
  wordCount.textContent = words;
});
