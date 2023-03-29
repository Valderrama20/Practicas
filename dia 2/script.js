const next = document.getElementById("next")
const prev = document.getElementById("prev")

let num = 1

num === 1 ? prev.disabled = true: prev.disabled = false
    
prev.onclick = () => {
    num--
    console.log(num)
    num === 1 ? prev.disabled = true: prev.disabled = false
}
next.onclick = () => {
    num++
    console.log(num)
    num === 1 ? prev.disabled = true: prev.disabled = false
}