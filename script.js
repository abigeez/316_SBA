//// cake gif with event listener changing colors

const animImg = document.querySelector("img");


animImg.addEventListener("click", event => {
    event.target.style.backgroundColor = "gold";

});

animImg.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "hotpink";


});

////////////////////////////////////////////////

///////// confirming with user if preferences are correct
const cakeForm = document.getElementById("flavorForm");
cakeForm.addEventListener("submit", event => {
    event.preventDefault();
    let text= "Are the preferences you selected correct?"
    if(confirm(text)==true){
        alert("Thank you for your order!")
    }else{
        console.log(null)
    }
});

///attempted to write the function below that would console log each result but couldn't find
//out which way to concatenate them together 


// function getAllChecked(){
//   let checkboxes= document.getElementsByName('flavors');
//   let result=[];
//   for (let i=0; i < checkboxes.length; i++){
// if (checkboxes[i].checked){
//      result += checkboxes[i].value + " ";
//     console.log(result);
// }
//   }
  
// }

//form validation 
//// making the input of the phone number text field allow numbers only
const numInput =document.getElementById("cellU");

numInput.onkeydown = function numFunction(event){
let text = "Please enter numbers only";
    if(isNaN(event.key) && event.key !== 'Backspace'){
        event.preventDefault();
        document.getElementById("demo").innerHTML = text;
    }

};