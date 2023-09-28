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

// Selecting Individual divs from a view

const divs = view1.querySelectorAll("div");
console.log(divs);

const samedivs = view1.getElementsByTagName("div");
console.log(samedivs);

// Selecting Even divs specifically

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

// Changing the look/appearance of our page
for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "darkblue";
  /* evenDivs[i].style.width = "200px";
  evenDivs[i].style.height = "200px"; */
}

// Changing the text inside our nav bar i.e. h1

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World!";

// Adding new elements inside our html using DOM

const navBar = document.querySelector("nav");
navBar.innerHTML = `<h1>Hello!</h1> <p>This should align right</p>`;
console.log(navBar);

// Changing the justifyContent of the flex of our nav

navBar.style.justifyContent = "space-between";
