//// cake gif with event listener changing colors

const animImg = document.querySelector("img");


animImg.addEventListener("click", event => {
    event.target.style.backgroundColor = "gold";

});

animImg.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "hotpink";


});

////////////////////////////////////////////////
// const cakeCheck = document.querySelectorAll('input[value]:checked');
// console.log(cakeCheck);
///////// confirming with user if preferences are correct
const cakeForm = document.getElementById("flavorForm");
const values = [];
const elements = cakeForm.querySelectorAll('input[type="checkbox"]:checked');

cakeForm.addEventListener("submit", event => {
    event.preventDefault();
    elements.forEach(InputEvent =>{values.push(element.value)});

    let text= "Are the preferences you selected correct?"
    if(confirm(text)==true){
        console.log(values)
    }else{
        console.log(null)
    }
});