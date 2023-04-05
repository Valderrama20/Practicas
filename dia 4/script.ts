const btn: any = document.querySelector(".btn")
const input:any = document.querySelector(".input")
const div:any = document.querySelector(".div")

 let es: any = true

btn.onclick = () => {
   boolean?(
   div.classList.add("active")
   input.classList.add("none"))
   :(
      div.classList.remove("active")
   input.classList.remove("none")
   )
   
   boolean = !boolean
}