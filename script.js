const animBox = document.getElementsByClassName("animCake");

function changeBox (event) {
console.log(event);
}

animBox.addEventListener("click",changeBox);