// alert("connected");

// Example 1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let para = document.getElementById("myParagraph");
    para.textContent = "The paragraph is changed";
  });

// example 2
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let city = document.getElementById("citiesList");
    city.firstElementChild.classList.add("highlight");
  });

// example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffe = document.getElementById("coffeType");
  coffe.textContent = "Espresso";
  coffe.style.backgroundColor = "blue";
  coffe.style.padding = "5px";
});

// example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

// example 5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let allTask = document.getElementById("taskList");
    allTask.lastElementChild.remove();
  });

// example 6
document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("chaicode");
  });

// example 7
document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selected : " + event.target.textContent);
  }
});

// example 8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // // isliye likha gaya taaki page reload na ho
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is: ${feedback}`;
  });

// example 9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "Dom fully loaded";
});

// example 10
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("description-text");
    // descriptionText.classList.toggle("highlight");
    if (descriptionText.classList.contains("highlight")) {
      descriptionText.classList.remove("highlight");
    } else {
      descriptionText.classList.add("highlight");
    }
  });
