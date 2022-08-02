let input=document.querySelector(".input")
let button=document.querySelector(".button")
let tab=document.querySelector(".tab")

button.addEventListener("click", function() {
    let addMore=document.createElement("div")
    addMore.classList.add("addMore")
    tab.appendChild(addMore)
    let par=document.createElement("p")
    addMore.appendChild(par)
    par.innerHTML=input.value
    par.classList.add("par")
    let button1=document.createElement("button")
    button1.innerHTML="Delete"
    addMore.appendChild(button1)
    input.value=""

    button1.addEventListener("click", function(){
        addMore.style.display="none"
    })
})

