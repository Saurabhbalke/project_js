
let count =0

const value=document.getElementById("value")
const btns=document.querySelectorAll(".btn")

console.log(btns)

btns.forEach(function (item) {
    item.addEventListener("click",function (e) {
        console.log(e.currentTarget.classList)
        let style =e.currentTarget.classList
        if(style.contains('decrease'))
        {
            count--
        }
        else if(style.contains('increase'))
        {
            count++
        }
        else
        {
            count=0
        }
        value.innerText=count
        if(count<0){
            value.style.color="red"
            
        }
        else if(count>0){
            value.style.color="green"
        }
        else{
            value.style.color="black"
        }
        
    })
})