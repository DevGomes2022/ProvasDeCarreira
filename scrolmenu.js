const cor = document.getElementById("cor")
const linka = document.getElementById("link-a")
const linkb = document.getElementById("link-b")
const linkc = document.getElementById("link-c")
const loga = document.getElementById("log-a")
const logb = document.getElementById("log-b")

document.addEventListener('scroll',ocultar)

function ocultar(){
    if(window.scrollY > 50){
        cor.style.backgroundColor = "#06254e"
        cor.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.4)"
    }
    else{
        cor.style.backgroundColor = "transparent"
        cor.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0)"
    }
}

ocultar()