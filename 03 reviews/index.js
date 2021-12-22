const reviwer=[
    {author :"smith",
     job: "solftware developer",
     img:"./01.jpg",
     info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aspernatur! Consequatur repudiandae eum asperiores beatae?"
    },
    {author :"susan",
     job: "full stack developer",
     img:"./02.jpg",
     info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aspernatur! Consequatur repudiandae eum asperiores beatae?"
    },
    {author :"james",
     job: "software intern",
     img:"./03.jpg",
     info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aspernatur! Consequatur repudiandae eum asperiores beatae?"
    },
    {author :"sara jones",
     job: "frontend developer",
     img:"./04.jpg",
     info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aspernatur! Consequatur repudiandae eum asperiores beatae?"
    }

]

let count=0
const btns=document.querySelectorAll(".btn");
const img=document.querySelector(".img-container")
const author=document.getElementById("author")
const job=document.getElementById("job")
const info=document.getElementById("info")
console.log(img)
// img.innerHTML=`<img src="./02.jpg" alt=""  srcset="">`
console.log(img)
// onload 

window.addEventListener("DOMContentLoaded",function () {
    showPerson(0)
})

btns.forEach(function (item) {
    item.addEventListener("click",function (e) {
        let style=e.currentTarget.classList
        console.log(style)
        if(style.contains("next")){
            count++
            if(count>=reviwer.length)
            {
                count=0
            }
            showPerson(count)
        }
        else if(style.contains("previous")){
            count--
            if(count<0)
            {
                count=reviwer.length-1
            }
            showPerson(count)
        }
        else if(style.contains("random")){
            count=Math.floor(Math.random()*reviwer.length)
            showPerson(count)
            
        }
    })
})

function showPerson(item){

    let x=reviwer[item]
    img.innerHTML=`<img src="${x.img}" alt=""  srcset="">`
    author.textContent=x.author
    job.textContent=x.job
    info.textContent=x.info    
}
