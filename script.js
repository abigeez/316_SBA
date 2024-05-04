//// cake gif with event listener changing colors

const animImg = document.querySelector("img");


animImg.addEventListener("click", event => {
    event.target.style.backgroundColor = "gold";

});

animImg.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "hotpink";


});

////////////////////////////////////////////////
const cakeCheck = document.querySelectorAll('input[type="checkbox"]:checked');


function myFunction() {
    let text= "Are the preferences you selected correct?"
    if(confirm(text)==true){
        console.log()
    }else{
        console.log()
    }
}