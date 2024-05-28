let pInfo = document.querySelectorAll(".pInfo")

let card = document.querySelectorAll(".card");
let cardImg = document.querySelectorAll(".card img");
let titels = document.querySelectorAll(".card>h4");
let prices = document.querySelectorAll(".price>span:first-child");


let dataUrl = "data.json";

let getData = (callBack)=>{
    fetch(dataUrl)
        .then(res => res.json())
        .then(data => {
            callBack(data)
        })
        .catch(err => err)
}
getData(insertData)

function insertData (e){
    for (let i = 0; i < pInfo.length; i++) {
        pInfo[i].innerText = e.pInfo[i]
    }
    for (let i = 0; i < cardImg.length; i++) {
        cardImg[i].src = e.cardImg[i]
    }
    for (let i = 0; i < titels.length; i++) {
        titels[i].innerHTML = e.titels[i]
    }
    for (let i = 0; i < prices.length; i++) {
        prices[i].innerHTML = e.prices[i]
    }
    for (let i = 0; i < prices.length; i++) {
        prices[i].innerHTML = e.price[i]
    }
}

