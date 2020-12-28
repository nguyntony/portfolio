const hambuger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")
const links = document.querySelectorAll(".nav-links li")

hambuger.addEventListener("click", () => {
    navLinks.classList.toggle("open")
})