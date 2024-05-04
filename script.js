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
const elements = cakeForm.querySelectorAll(':checked');
elements.forEach(InputEvent =>{values.push(element.value)});

function getAllChecked(){
  let checkboxes= document.getElementsByName('flavors');
  let result="";
  for (let i=0; i < checkboxes.length; i++){

if (checkboxes[i].checked){
     result += checkboxes[i].value + " ";
    console.log(result);
}
  }
  
}

cakeForm.addEventListener("submit", event => {
    event.preventDefault();
    let text= "Are the preferences you selected correct?"
    if(confirm(text)==true){
        alert("Thank you for your order!")
    }else{
        console.log(null)
    }
});