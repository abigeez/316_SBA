//// cake gif with event listener changing colors

const animImg = document.querySelector("img");


animImg.addEventListener("click",event => {
    event.target.style.backgroundColor = "powderblue";

});

animImg.addEventListener("mouseout",event => {
event.target.style.backgroundColor = "hotpink";


});

////////////////////////////////////////////////

