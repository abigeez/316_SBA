const animImg = document.querySelector("img");

function changeImg (event) {
event.target.style.backgroundColor = "aliceblue";
}

animImg.addEventListener("click",changeImg);