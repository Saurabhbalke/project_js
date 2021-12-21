const colors = ["red", "green", "blue", "yellow","#87cfeb59"]
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
    return Math.floor(Math.random()*colors.length)
}