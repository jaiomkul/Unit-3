
async function searchMovie() {
    try
    {
        let x= document.getElementById("x").value;
        let res = await fetch(`https://www.omdbapi.com/?apikey=76b4f1d6&s=${x}`)
    
        let data = await res.json();
        movieData(data)
        console.log("data:", data)
    } 
    catch(err)
    {
        console.log("err:", err)
    }
} 

function movieData(data){
    if(data.Search==undefined)
    {
        container.innerHTML="";
        let div = document.createElement("div")
        div.setAttribute("class", "divId2")
        let image=document.createElement('img');
        image.src="https://c.tenor.com/0YTbbLG-4uIAAAAC/gazab-bezzati-hai-yaar-panchayat.gif";
        image.setAttribute("id","no-movie")
        let text=document.createElement('h3');
        text.setAttribute("id","sorry")
        text.innerText="Sorry No such Movie Found";
        div.append(image,text);
        container.append(div);
    }
    else{
        container.innerHTML = null;
        data.Search.forEach(function(el){

        let div = document.createElement("div")
        div.setAttribute("class", "divId")

        let img = document.createElement("img")
        img.src = el.Poster;

        let title = document.createElement("h3")
        title.innerText = el.Title;

        let year = document.createElement("h4")
        year.innerText = `Release year- ${el.Year}`;

        let rating=(Math.random()*9+1);
        let n = rating.toFixed(1);
        let rate = document.createElement("h4")
        rate.innerHTML = `Omdb rating- ${n}`;

        div.append(img,title,year,rate)
        if(n>8.5){
            let rem = document.createElement("h4")
            rem.innerHTML = "Recommended";
            div.append(rem);

        }
        container.append(div)
        });
    }
    
}


let timeId;

function debounce(func, delay){
    //main (aven)

    if(timeId)
    {
        clearTimeout(timeId); //main("ave")
    }

    timeId = setTimeout(function(){
        func();
    }, delay); //main("aven")
}