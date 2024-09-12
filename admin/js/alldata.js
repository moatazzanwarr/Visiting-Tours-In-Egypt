
function getData(dataUrl,called){
    let uReq= new XMLHttpRequest()
    uReq.onreadystatechange= function(){
        if (this.readyState ==4 && this.status ==200) {
            return called(this.responseText)
        }
        else{
            console.log("ERROR");
        }
    }
    uReq.open("GET",dataUrl)
    uReq.send()
}







// ALL USERS DATA


let usersUrl = "https://jsonplaceholder.typicode.com/users"
getData(usersUrl,displayUsers)
function displayUsers(us){
    let usersArray=JSON.parse(us)

    let uTable=document.querySelector("#userstable")

    usersArray.forEach(ele =>
        {
            let id=ele.id
            let name=ele.name
            let mail=ele.email
            let addr=ele.address.city
            uTable.innerHTML+=`
            <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${mail}</td>
            <td>${addr}</td>
            <td><div>
            <i class="ri-eye-line"></i>
            <i class="ri-edit-box-line"></i>
            <i class="ri-delete-bin-5-line"></i>
            </div></td>
            </tr>   
            `
        })
    }










//ALL DESTINATIONS DATA

let destUrl ="../json/destinations.json"
getData(destUrl,displayDests)
function displayDests(dests){
    let destsArray=JSON.parse(dests)
    let destsTable=document.querySelector("#deststable")
    destsArray.forEach(ele => {
        let id=ele.id
        let name=ele.name
        let place=ele.place
        let duration=ele.duration
        let price=ele.price
        console.log(id,name);
        destsTable.innerHTML+=`
        <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${place}</td>
        <td>${duration} day</td>
        <td>$ ${price}</td>
        <td>
        <div>
        <i class="ri-eye-line"></i>
        <i class="ri-edit-box-line"></i>
        <i class="ri-delete-bin-5-line"></i>
        </div>
        </td>
        </tr>
        `
        
    });
    
}





















// DATA FOR DASHBOURD


//destinations data

getData(destUrl,dbDests)

function dbDests(dests){
    let destsArray=JSON.parse(dests)
    let destsCount=document.querySelector("#destcount")
    let topDests = document.querySelector("#topdest")
    let destsC=destsArray.length
        destsCount.textContent=destsC
        console.log(destsCount.textContent);
        for(i=0;i<=8;i++){
            let topDestName = destsArray[i].name
            let topDestPrice = destsArray[i].price
            topDests.innerHTML+=`
                            <div class="top-dest-data">
                                <span class="name">${topDestName}</span>
                                <span class="price">$${topDestPrice}</span>
                            </div>`
        }
    


}



getData(usersUrl,dbUsers)
function dbUsers(us){
    let usersArray=JSON.parse(us)
    let dashbAtiveUsers=document.querySelector("#activeuser")
    dashbAtiveUsers.innerHTML=usersArray.length
    }





//Recent Booking figure
let bookApi= "../json/booking.json"
getData(bookApi,dbfig)
function dbfig(book) {
    let monthCont =document.querySelectorAll(".month-cont div div")
    let bookArray=JSON.parse(book)
    for(i=0;i<monthCont.length;i++){
        let monthDidId=monthCont[i].id
        let monthBookCounts=0
        let monthBookprec=0
        for(let j =0;j<bookArray.length;j++){
            let month =bookArray[j].date.split(".")[1]
            if(monthDidId==month){
                monthBookCounts+=1
                monthBookprec=((monthBookCounts*100)/bookArray.length)
                // monthBookprec=50
                console.log(monthDidId,month,monthBookCounts,monthBookprec);
                monthCont[i].setAttribute("style",`height:${monthBookprec}%`)
                console.log(monthCont[i].getAttribute("style"));
                
                
            }
            
        }
    }
        
    }




// booking
let bookingTable=document.querySelector("#btable")
let totalOrders=document.querySelector("#totalbooking")
let dashbEarns=document.querySelector("#earns")

fetch(bookApi)
.then(res=>res.text())
.then(bData=>bDisplay(bData))

function bDisplay(d){
    let dObj=JSON.parse(d)
    let len=dObj.length
    let earn =0
    for(let i =len-1;i>=len-4;i--){
        let id=dObj[i].id
        let name=dObj[i].name
        let user=dObj[i].user
        let email=dObj[i].email
        let country=dObj[i].country
        let price=dObj[i].price
        earn+=price
        bookingTable.innerHTML+=`
                    <tr>
                        <td>${id}</td>
                        <td>${name}</td>
                        <td>${user}</td>
                        <td>${email}</td>
                        <td>${country}</td>
                        <td>$ ${price}</td>
                        
                        </tr>
        `
    };
    for(let j=0;j<len;j++){
        let price=dObj[j].price
        earn+=price

    };
    totalOrders.textContent=len
    dashbEarns.textContent=`$ ${earn}`
}
bDisplay()












// SEARCH FUNCTIONS

function userSearch(tar){
    getData(usersUrl,searching)
    function searching(us){
        if(tar!=''){
            let allUsers =JSON.parse(us)
            let res=[]
            for(let i=0;i<allUsers.length;i++){
                let target=tar.toLowerCase()
                if(allUsers[i].name.toLowerCase().includes(target)){
                    res.push(allUsers[i])
                }else{
                    let uTable=document.querySelector("#userstable")
                    uTable.innerHTML=""
                }
                let uTable=document.querySelector("#userstable")
                uTable.innerHTML=""
                res.forEach(ele =>
                    {
                        let id=ele.id
                        let name=ele.name
                        let mail=ele.email
                        let addr=ele.address.city

                        uTable.innerHTML+=`
                        <tr>
                        <td>${id}</td>
                        <td>${name}</td>
                        <td>${mail}</td>
                        <td>${addr}</td>
                        <td><div>
                        <i class="ri-eye-line"></i>
                        <i class="ri-edit-box-line"></i>
                        <i class="ri-delete-bin-5-line"></i>
                        </div></td>
                        </tr>   
                        `
                    })
            }

        }else{
            let uTable=document.querySelector("#userstable")
            uTable.innerHTML=""
            getData(usersUrl,displayUsers)
        }
    }
}

function destSearch(tar){
    getData(destUrl,searching)
    function searching(des){
        if(tar!=''){
            let allDests =JSON.parse(des)
            let res=[]
            for(let i=0;i<allDests.length;i++){
                let target=tar.toLowerCase()
                if(allDests[i].name.toLowerCase().includes(target)){
                    res.push(allDests[i])
                }else{
                    let dTable=document.querySelector("#deststable")
                    dTable.innerHTML=""
                }
                let dTable=document.querySelector("#deststable")
                    dTable.innerHTML=""
                    res.forEach(ele =>
                        {
                            let id=ele.id
                            let name=ele.name
                            let place=ele.place
                            let duration=ele.duration
                            let price=ele.price
                            dTable.innerHTML+=`
                            <tr>
                            <td>${id}</td>
                            <td>${name}</td>
                            <td>${place}</td>
                            <td>${duration} day</td>
                            <td>$ ${price}</td>
                            <td>
                            <div>
                            <i class="ri-eye-line"></i>
                            <i class="ri-edit-box-line"></i>
                            <i class="ri-delete-bin-5-line"></i>
                            </div>
                            </td>
                            </tr>
                            `


                })

            }

        }else{
            let dTable=document.querySelector("#deststable")
            dTable.innerHTML=""
            getData(destUrl,displayDests)
        }
    }
}