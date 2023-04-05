var btn = document.querySelector(".btn");
var input = document.querySelector(".input");
var div = document.querySelector(".div");
btn.onclick = function () {
    div.classList.add("active");
    input.classList.add("none");
};
