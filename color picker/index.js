let colorpick = document.getElementById("colorPicker");

let boxcolor = document.getElementById("colorBox");

colorpick.addEventListener("input", function () {
  boxcolor.style.backgroundColor = colorpick.value;
});
