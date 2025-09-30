const image = document.getElementById("postImg");
const heart = document.getElementById("heartBtn");
const likeCount = document.getElementById("likeCount");

let liked = false;
let count = 0;


function updateLikeDisplay() {
  likeCount.textContent = `${count} ${count === 1 ? "like" : "likes"}`;
  if (liked) {
    heart.textContent = "❤️";
    heart.classList.add("liked");
  } else {
    heart.textContent = "♡";
    heart.classList.remove("liked");
  }
}


function toggleLike() {
  // liked ko toggle kiyaa (true se false ya false se true)
  liked = !liked;

  // liked ke basis par count update kiya
  if (liked) {
    count = count +  1; // agar liked hai to 1 badhao
  } else {
    count = count - 1; // agar liked nahi hai to 1 ghatado
  }

  // UI ko update kiya (heart icon aur like count text)
  updateLikeDisplay();
}


image.addEventListener("dblclick", () => {
  if (!liked) toggleLike();
});


heart.addEventListener("click", () => {
  toggleLike();
});
