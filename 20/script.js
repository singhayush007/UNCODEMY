/*
let caraousel = document.querySelector(".caraousel");
let slide = document.getElementById("slide");
let arrowLeft = document.querySelector(".fa-arrow-left")
let arrowRight = document.querySelector(".fa-arrow-right")
let pagination = document.querySelector(".pagination")  
let next = document.querySelector(".next")
let prev = document.querySelector(".prev")
let dots = document.querySelectorAll(".dot");

const images = [
      "https://m.media-amazon.com/images/I/71yz+cOKE8L.jpg",
      "https://m.media-amazon.com/images/I/8157ug7+K+L.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7AUQ1ap545wJq1Op_9GPLFAV15boesLoyZA&s",
      "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/I/A11DlZLBe7S.jpg"
    ];





function showImage (index){
  const img = document.querySelector("#slide");
  img.src = images[index];
}


let currentIndex = 0;

function nextImage(){
    currentIndex++;
    if(currentIndex >= images.length){
        currentIndex = 0;
    }
    showImage(currentIndex);
}

function prevImage(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
}


function prevBtn(){
    prevImage();
}

function nextBtn(){
    nextImage();
}




function updateDots(index) {
  dots.forEach((dot, i) => {
    dot.classList.remove("active");
    if (i === index) {
      dot.classList.add("active");
    }
  });
}

function currentSlide(index) {
  currentIndex = index - 1; 
  showImage(currentIndex);
  updateDots(currentIndex);
}
*/


let caraousel = document.querySelector(".caraousel");
let slide = document.getElementById("slide");
let arrowLeft = document.querySelector(".fa-arrow-left");
let arrowRight = document.querySelector(".fa-arrow-right");
let pagination = document.querySelector(".pagination");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

const images = [
      "https://m.media-amazon.com/images/I/71yz+cOKE8L.jpg",
      "https://m.media-amazon.com/images/I/8157ug7+K+L.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7AUQ1ap545wJq1Op_9GPLFAV15boesLoyZA&s",
      "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "https://m.media-amazon.com/images/I/A11DlZLBe7S.jpg"
    ];

function showImage(index){
    const img = document.querySelector("#slide");
    img.src = images[index];
}


let currentIndex = 0;

function nextImage(){
    currentIndex ++;
    if(currentIndex >= images.length){
       currentIndex = 0;
    }
    showImage(currentIndex);
}

function prevImage(){
    currentIndex --;
    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
}

function prevBtn(){
    prevImage();
}

function nextBtn(){
    nextImage();
}

// Create dots dynamically

function createDots(){
    const dotContainer = document.getElementById("dots");
    for(let i = 0; i < images.length; i++){
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click" , () => {
            currentIndex = i;
            showImage(currentIndex);
        });
        dotContainer.appendChild(dot);
    }
}

function updateDots(index) {
    const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.remove("active");
    if (i === index) {
      dot.classList.add("active");
    }
  });
}

createDots();
showImage(currentIndex);


setInterval(() => {
    nextImage();
    updateDots(currentIndex);
}, 3000);


