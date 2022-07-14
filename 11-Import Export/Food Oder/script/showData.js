

async function getData(url){
   try{
    let res = await fetch(url);
    let data = await res.json();
    return data;
   } catch(error){
       console.log("error:", error)
   }
}


function appendData(data, parent){
    //console.log("data:", data);
    data.meals.forEach((el) => {
        //console.log("el:",el,data)
        let div = document.createElement("div");

        let p = document.createElement("p");
        p.innerHTML = el.strArea;

        let img = document.createElement("img");
        img.src = el.strMealThumb;

        div.append(p,img)
        parent.append(div)
    });
}

export {getData, appendData};
