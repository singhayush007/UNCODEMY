// Q: 1 Create a button that, when clicked, changes the background color of the entire page.
let button = document.querySelector("button");
let body = document.querySelector("body");

button.addEventListener("click", () => {
  body.classList.toggle("dark");
  console.log(body.classList);
});

// Q: 2 Select an <h1> element using getElementById and change its color to red.

let h1 = document.getElementById('#heading');
h1.style.color = 'red'


// Q: 3 Change the font size of all <h2> elements to 24px using JavaScript.


let h2 = document.getElementById('#textStyle')
h2.style.fontSize = '24px'

