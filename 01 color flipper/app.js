const colors = ["red", "green", "blue", "yellow"]
const btn =document.getElementById("btn")
const color=document.getElementById("color")
// console.log(btn)

btn.addEventListener("click",function () {
    
    let element=document.getElementById("back")
    let random=randomNumber()
    element.style.backgroundColor=colors[random]
    color.textContent=colors[random]
})

function randomNumber() {
    return Math.floor(Math.random()*3)
}