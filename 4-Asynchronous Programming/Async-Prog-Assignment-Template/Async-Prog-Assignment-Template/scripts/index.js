var x;

let images_arr = ["https://www.townandcountrymag.com/leisure/arts-and-culture/g3133/best-summer-movies/",
"https://image.shutterstock.com/image-vector/online-cinema-art-movie-watching-260nw-700366096.jpg",
"https://www.cnet.com/a/img/E-FVmLn16iYLCcnb4RvGDVNokXs=/940x528/2020/07/09/ccbe4c91-404b-4811-be6f-c5b48c9db9dc/vudu-free-movies-july-2020.jpg",
"https://assets1.ignimgs.com/2019/02/26/starwarsmovies-blogroll-1551142053134_160w.jpg?width=775&crop=16%3A9",
"https://thevideoink.com/wp-content/uploads/2020/09/netflix-1.jpg"]


function start(images_arr) {
    //let images_arr = JSON.parse(localStorage.getItem('images'))

    let slider_img = document.getElementById("slider")

    let i=0

     x = setInterval(function (){

        if(i==images_arr.length)
        {
            i=0
        }
        slider_img.src = images_arr[i]
        i = i+1;
        console.log('i', i)
    }, 2000)

}
start(images_arr)



let url = "https://fake-movie-database-api.herokuapp.com/api?s=batman";
const container = document.getElementById('movies')

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
    data.Search.map(function(el){
        let div = document.createElement("div")

        let img = document.createElement("img")

        img.src = el.Poster;

        let title = document.createElement("p")

        title.innerText = el.Title;

        let price = document.createElement("p")

        price.innerText = `Year-${el.Year}`;

        div.append(img,title,price)

        container.append(div);
        console.log(container)
    })
}