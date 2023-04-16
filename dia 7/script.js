const left = document.querySelector(".left")
const right = document.querySelector(".right")
const content = document.querySelector(".content")

right.addEventListener("mouseenter", () => {content.classList.add("hover-right")})
right.addEventListener("mouseleave", () => {content.classList.remove("hover-right")})

left.addEventListener("mouseenter", () => {content.classList.add("hover-left")})
left.addEventListener("mouseleave", () => {content.classList.remove("hover-left")})