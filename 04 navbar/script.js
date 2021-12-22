const btn=document.querySelector(".toggle")
const link=document.querySelector(".link")
console.log(link)

btn.addEventListener("click",function () {
    console.log("btn clicked")
    // if(link.classList.contains("show-link"))
    // {

    //     link.classList.remove("show-link")
    // }
    // else
    // link.classList.add("show-link")
    link.classList.toggle("show-link")
})