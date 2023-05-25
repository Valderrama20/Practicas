const textarea = document.getElementById("textarea")
const ul = document.getElementById("ul")

textarea.addEventListener("input", (e) => {

 const array = e.target.value.split(",").filter(tag => tag.trim() !== '').map(tag => tag.trim())
  
 ul.innerHTML = ''

  array.forEach(element => {
    console.log(element)
  const li = document.createElement("li")
   li.textContent = element
   ul.appendChild(li)
  });


})