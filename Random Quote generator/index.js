const randomJokes = ["r", "o", "h", "a", "n"];

let btn = document.getElementById("generateQuote");

let display = document.getElementById("quoteDisplay");

btn.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * randomJokes.length);
  let joke = randomJokes[randomIndex];
  display.textContent = joke;
});
