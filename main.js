const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-nav");


navToggle.addEventListener("click", ()=>{
    // console.log("hello");
    primaryNav.hasAttribute("data-visible")?
    navToggle.setAttribute("aria-expanded",false)
    : navToggle.setAttribute("aria-expanded",false);
    primaryNav.toggleAttribute("data-visible");
})