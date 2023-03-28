
const img = [
    "https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos.jpg","https://t4.ftcdn.net/jpg/01/12/22/67/360_F_112226742_1EEoC12dd6f9zST6qCFG3nBrPd4ciwZZ.jpg","https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg","https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
]



const consol = (div) => {
    cars1.forEach(e => e.classList.remove("active"))
    div.className = "cars active"
}

const cars = document.getElementById("container")

img.map(e => {
const div = document.createElement("div")
div.className = "cars"
div.style= `background-image: url('${e}')`
div.onclick = () => consol(div)
cars.appendChild(div)
} )

const cars1 = document.querySelectorAll('.cars')


 


 


console.log(cars)