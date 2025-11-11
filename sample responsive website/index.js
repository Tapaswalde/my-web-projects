const hamburgerElement=document.getElementById("hamburger");
const listElements=document.getElementById("list");
hamburgerElement.addEventListener("click",function(){
    listElements.classList.toggle("navlist-active");
})