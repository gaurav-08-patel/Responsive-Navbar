let navToggle=document.querySelector(".nav-toggle");
let sideBar=document.querySelector(".sidebar");
let closeToggle= document.querySelector(".material-symbols-outlined");


navToggle.addEventListener("click",()=>{
    sideBar.style.display="flex";
})

closeToggle.addEventListener("click",()=>{
    sideBar.style.display="none";
})

