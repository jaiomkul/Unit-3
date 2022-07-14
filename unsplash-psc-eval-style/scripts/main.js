async function makeApiCall(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
        console.log("data:", data)
    } catch(error){
        console.log("error:", error)
    }
}

function appendData(data, Location){
    data.forEach((element) => {
        
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = element.urls.small;

        let p = document.createElement("p")
        p.innerHTML = element.user.name;

        div.append(image, p)
        
        div.onclick = function() {
            let x = [element]
            localStorage.setItem("search_term",JSON.stringify(x));
            window.location.href= "photo.html";
        }

        Location.append(div)
    });
}
export {makeApiCall, appendData}