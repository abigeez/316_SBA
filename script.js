//// cake gif with event listener changing colors

const animImg = document.querySelector("img");


animImg.addEventListener("click", event => {
    event.target.style.backgroundColor = "gold";

});

animImg.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "hotpink";


});

////////////////////////////////////////////////


const firstForm = document.getElementById("flavorForm");

// firstForm.addEventListener("submit"),(e) => {
//     e.preventDefault();
//     alert(`You submitted these preferences:
//    ${fl.querySelector("input").value}`)
// }
console.log(firstForm)
