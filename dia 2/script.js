const next = document.getElementById("next")
const prev = document.getElementById("prev")
const circle = document.querySelectorAll(".number")
const progress = document.getElementById("progress")
let actives = document.querySelectorAll('.active')

let num = 1


const onclick = (value) => {
    value ? num++ : num--
    
    progress.value =  actives.length * 100 /circle.length

    num === 1 ? prev.disabled = true: prev.disabled = false
    num === 4 ? next.disabled = true: next.disabled = false
    

    circle.forEach((element, index) => {
        num > index
        ?element.classList.add("active")
        :element.classList.remove("active")

}) 

}

next.onclick =() => onclick(true)
prev.onclick = () => onclick(false)


