// alert("Hello World")
var card=document.querySelectorAll(".cards");

card.forEach(card =>{
    card.addEventListener("click",()=>{
        removeActiveClass();
        card.classList.add("active");
    });
});
function removeActiveClass(){
    card.forEach(card =>{
        card.classList.remove("active");
    });
} 