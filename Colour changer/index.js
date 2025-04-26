document
  .getElementById("changeColorBtn")
  .addEventListener("click", function () {
    let randomColour = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColour);
    document.body.style.backgroundColor = randomColour;
  });
