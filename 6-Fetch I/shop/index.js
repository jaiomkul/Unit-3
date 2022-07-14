


//let url = "https://fakestoreapi.com/products/1";

// let myRequest = fetch(url);
// //console.log("x", x)

// myRequest.then(function(res){
//     return res.json();
// });

// .then(function(res){
//     console.log("res:", res)
// });
// .catch(function(err){
//     console.log("err:", err)
// });

let url = "https://fakestoreapi.com/products";
const container = document.getElementById('container')

async function getData() {

    try{
        let res = await fetch(url);

        let data = await res.json();
        appendProducts(data)

        console.log("data:", data)
    } catch (err) {
        console.log("err:", err)
    }
}

getData();

function appendProducts(data) {
    data.map(function(el){
        let div = document.createElement("div")

        let img = document.createElement("img")

        img.src = el.image;

        let title = document.createElement("p")

        title.innerText = el.title;

        let price = document.createElement("p")

        price.innerText = el.price;

        div.append(img,title,price)

        container.append(div);
        console.log(container)
    })
}