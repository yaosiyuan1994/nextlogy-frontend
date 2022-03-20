// 折叠按钮
const headerEl = document.querySelector(".headTop")
const burgerEl = document.querySelector(".burger");
burgerEl.addEventListener("click",()=>{
    headerEl.classList.toggle("open");
})