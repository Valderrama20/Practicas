var btn = document.querySelector(".btn");
var input = document.querySelector(".input");
var div = document.querySelector(".div");

let view = true

btn.onclick = function () {
    if(view){
    
    div.classList.add("active");
    input.classList.add("none");
    view = !view
    
}
    else if(!view) {
        
        div.classList.remove("active");
    input.classList.remove("none");
    view = !view
   

}

    
    }

