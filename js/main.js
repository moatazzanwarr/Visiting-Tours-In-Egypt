// function plusMinus(arr) {
//     // Write your code here
//     arr=[1,1,0,-1,-1]; // يتم الحذف في Hacker rank
//     let sum = [];
//     let sum_2 = [];
//     let sum_3 = [];
//     arr.map((e)=>{
//         if(e > 0){
//             sum.push(e)
//         }else if(e < 0){
//             sum_2.push(e)
//         }else if(e == 0){
//             sum_3.push(e)
//         }
//     })
//     console.log(sum.length / arr.length);
//     console.log(sum_2.length / arr.length);
//     console.log(sum_3.length / arr.length);
// }

// plusMinus()

// ////////////////////////////////////

// function miniMaxSum(arr) {
//     // Write your code here
//     arr = [1,3,5,7,9];
//     let max = Math.max.apply(null, arr);
//     let sum ;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     console.log(sum);
    
// }
// miniMaxSum()

// API //////////////////////
let cards = document.querySelectorAll(".card")
let image = document.querySelectorAll(".image")
let title = document.querySelectorAll(".title")
let price = document.querySelectorAll(".price")
let description = document.querySelectorAll(".description")
let dataUrl = "https://fakestoreapi.com/products"

let getData = (callBack) =>{
    fetch(dataUrl)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < cards.length; i++) {
                image[i].src = data[i].image;
                title[i].innerText = data[i].title;
                price[i].innerText = data[i].price;
                description[i].innerText = data[i].description;
            }
        })
        .catch(err => err)
}

getData()

/////////////////////////////////////

let dataUrl2 = "../data.json";
let getInfo = (callBack)=>{
    fetch(dataUrl2)
        .then(res => res.json())
        .then(data => {
            callBack(data)
        })
        .catch(err => err)
}
getInfo(addData)

function addData(e){
    for (let i = 0; i < dataUrl2.length; i++) {
        console.log(e[i].name);
        console.log(e[i].age);
        console.log(e[i].skills);
        console.log("-----------------");
    }
}

////////////////////////////

async function getDataa(){
    let res = await fetch(dataUrl2)
    let data = await res.json()
    for (let i = 0; i < dataUrl2.length; i++) {
        console.log(data[i].name);
        console.log("------------");
        
    }
}
getDataa()