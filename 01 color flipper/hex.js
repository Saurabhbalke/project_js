const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const color=document.getElementById("color")
const btn=document.getElementById("btn")

btn.addEventListener("click",function   () {
    let element=document.getElementById("back")
    console.log("btn clicked")
    console.log(element)
    let randomcolor=randomNumber()
    // console.log(randomcolor)
    element.style.backgroundColor=  randomcolor
    color.textContent= randomcolor

})
function randomNumber() {
    
    let output="#"
    for(let i=0; i<6;i++){
        let x=Math.floor(Math.random()*hex.length)
        
        output+=hex[x]
    }
    return output
}