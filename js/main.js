// DOM: Document Object Model

// Selecting Element by ID

const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

// Changing Style to Show or Hide different views

view1.style.display = "flex";
view2.style.display = "none";

// Selecting Elements by Class names

const views = document.getElementsByClassName("view");
console.log(views);

const sameviews = document.querySelectorAll(".view");
console.log(sameviews);
