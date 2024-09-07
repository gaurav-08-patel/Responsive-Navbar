let navToggle=document.querySelector(".nav-toggle");
let sideBar=document.querySelector(".sidebar");
let closeToggle= document.querySelector(".material-symbols-outlined");


navToggle.addEventListener("click",()=>{
    sideBar.style.display="flex";
    sideBar.style.animation="1s ease-in-out  slidein";
})

closeToggle.addEventListener("click",()=>{
    const animationDuration = 1000;
    
    sideBar.style.animation="1s ease-in-out  slideout";
    setTimeout(()=>{
        sideBar.style.display="none";
    },animationDuration );
    
    
    
})

