async function searchMovie(){

    try {
        let movie = document.getElementById("query").value 
         let res = await fetch(`https://www.omdbapi.com/?apikey=76b4f1d6&s=${movie}`)

         let data = await res.json();

         return data.Search
         console.log("data:", data)
    } catch(err){
        console.log("err:", err)
    }
}

async function main(){

    let data = await searchMovie();

    if(data === undefined)
    {
        return false;
    }
    console.log("data:", data)
    appendData(data)
}

let movies_div = document.getElementById('movies')

function appendData(movies){
    movies_div.innerHTML = null;
    movies.forEach(function (el) {

        let p = document.createElement('p')
        p.innerText = el.Title

        movies_div.append(p)
        
    });
}

// debounce?

//"a"-> oninput. -> debounce().->.main("a")->setaTimeout(main,1000)
//"av"-> oninput. -> debounce().->.main("av")->setaTimeout(main,1000)
//"ave"-> oninput. -> debounce().->.main("ave")->setaTimeout(main,1000)

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