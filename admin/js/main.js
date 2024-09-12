
//function for listing items event

function listing(targ,list){
    targ.addEventListener("click",function(){
        let items=list.querySelectorAll(".item")
        targ.lastChild.classList.toggle("arrow-rot")
        console.log(items)
        items.forEach(item=>{
            console.log(item)
            item.classList.toggle("d-none")
        })
    }   
)
}

listing(head2,list1)
listing(head3,list2)




// for view all btn at all dest page

let vewBtn = document.querySelector("#view-all")
let contSec = document.querySelector("#cont")
vewBtn.addEventListener("click",()=>{
    let text = vewBtn.textContent
    contSec.classList.toggle("vall")
    if(text=="view all"){
        vewBtn.textContent="view less"
    }
    else vewBtn.textContent="view all"
})


