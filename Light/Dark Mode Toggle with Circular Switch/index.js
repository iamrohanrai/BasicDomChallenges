let button = document.querySelector(".switch");
let textChange = document.getElementById("modeStatus");

button.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  button.classList.toggle("active");
  if (document.body.classList.contains("dark-mode")) {
    textChange.textContent = "Dark Mode is ON";
  } else {
    textChange.textContent = "Light Mode is ON";
  }
});
