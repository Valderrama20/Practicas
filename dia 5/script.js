const loading = document.querySelector(".loading")
const div = document.querySelector(".div")

let load = 0
let load2 =100




const loader = () => {

load++
load2--
if(load > 99) {
   
    clearInterval(init)
 loading.style.opacity = 0

}

loading.innerHTML = `${load}%`
div.style.filter = `blur(${load2 / 20}px)`

}

let init = setInterval(loader,30)


