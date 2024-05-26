const menu_open = document.querySelector("#menu_open");
const menu_close = document.querySelector("#menu_close");
const mobNav = document.querySelector("#mobNav");

menu_open.addEventListener("click",()=>{
    mobNav.style.top = "120px";
    menu_close.style.display = "block"
    menu_open.style.display = "none"
});
menu_close.addEventListener("click",()=>{
    mobNav.style.top = "-100vh";
    menu_close.style.display = "none"
    menu_open.style.display = "block"
});

