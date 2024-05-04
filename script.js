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
// console.log(cakeCheck);
///////// confirming with user if preferences are correct
const cakeForm = document.getElementById("flavorForm");
cakeForm.addEventListener("submit", event => {
    let text= "Are the preferences you selected correct?"
    if(confirm(text)==true){
        console.log(cakeCheck)
    }else{
        console.log(null)
    }
});