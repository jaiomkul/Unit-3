let  url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";
let container = document.getElementById('menu')



async function dataBase(){
    try {
        let result = await fetch(url);

        let data = await result.json();
        appendData(data)
        
        console.log("data:", data)
    } catch (err) {
        console.log("err", err)
    }
}
dataBase();

function appendData(data) {
    data.meals.map(function(el){
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = el.strMealThumb;

        let title = document.createElement("p")
        title.textContent = el.strMeal;

        let price = Math.round(Math.random() * 500)
        let rprice = document.createElement("p")
        rprice.textContent = "$"+price

        let but = document.createElement("button")
        but.innerText = "Add Cart"

        div.append(img,title,rprice,but)

        container.append(div)

        console.log(container)
    })
}