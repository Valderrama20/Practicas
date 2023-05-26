const textarea = document.getElementById("textarea")
const ul = document.getElementById("ul")


textarea.addEventListener("input", (e) => {



 const array = e.target.value
              .split(",")
              .filter(tag => tag.trim() !== '')
              .map(tag => tag.trim())
    
  ul.innerHTML = ''

  array.forEach(element => {

   const li = document.createElement("span")
   li.classList.add('tag')
   li.textContent = element
   ul.appendChild(li)
  });


})

window.addEventListener("keydown", (event) => {

  if(event.code === "Enter") {
    const tag = randonTag()
    tag.classList.add("active")
    console.log("active")
    console.log(tag)

    ul.appendChild(tag)


     
  }
})

const randonTag = () => {
    const tag = document.querySelectorAll(".tag")
    return tag[Math.floor(Math.random() * tag.length)] 
}