// console.log("hello");
// console.dir(document.body);

// dom methods :
// getElementById(idname);
// getElementByTagName(tagname);
// getElementByClassName(class name);
// quretSelector("#id";
// quretSelector(".Class");
// quretSelectorALL(".Class");
// quretSelector("tag name");
// quretSelectorAll("tag name");


// bt id
// let heading = document.getElementById("heading");
// console.log(heading);


// by tag name
// let heading = document.getElementsByTagName("h1");
// console.log(heading);
// console.log(heading[2])


// by tag name
// let heading = document.getElementsByClassName("heading");
// console.log(heading);
// console.log(heading[2]);


// queryselector:
// let heading = document.querySelectorAll(".heading");
// console.log(heading);
// console.log(heading[2]);


// 1. tagName :
// 2. InnerText : return the text of the content of the elements or its children.
// 3. InnerHTML : return the plain text or html content in the element.
// 4. textContent  : return textual content for the hidden element.


// let h1 = document.querySelector("#heading");
// let heading = h1.innerText.concat(" from heading");
// console.log(heading);
// h1.innerText = heading;

// // q. create 3 div box and add some unique textto each of them.

// let divs = document.querySelector(".box");
// // let divs = document.getElementsByClassName("box");
// console.log(divs);
// console.log(divs[0].innerText = "new unique value 1");
// console.log(divs[1].innerText = "new unique value 2");
// console.log(divs[2].innerText = "new unique value 3");

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";

// let i = 1;
// for(div of divs){
//     div.innerText = ⁠ new unique value ${i} ⁠;
//     i++;
// }


// to getAttributes("attribute") , setAttributes("attribute", "new value");

// let div = document.querySelector("div");
// console.log(div);
// console.log(div.getAttribute("class"));
// console.log(div.setAttribute("class", "set"));


// insert element:

// append : end of the node
// prepend : start of the node
// before : before node
// after : after node

// to create element : createElement();

const btn = document.createElement("button");
console.log(btn);
btn.innerText = "Click Me";
btn.style.backgroundColor = "red";
btn.style.color = "white";

let div = document.querySelector("div");
console.log(div);

// div.append(btn); // end of the node
// div.prepend(btn); /// start of the node 
// div.before(btn); // before node/ element/ object
div.after(btn); // after node/ element/ object

// to remove element or node : remove(); 

btn.remove();


// ----------------------------------------------------- events--------------------------------------


// single click event 


function showFun() {
    const myInput = document.querySelector("#myInput");
    const inputvalue = myInput.value;
    console.log(inputvalue);

    const li = document.createElement("li");
    li.innerText = inputvalue;



    document.querySelector("#output").appendChild(li);
    myInput.value = "";
}

