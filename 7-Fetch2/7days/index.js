// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${key}//


let key = "229f80e454a0317e95b55bb2c756a1d6";

async function getWheatherData(){

    try 
    {
        let city = document.getElementById("city").value // accepting data
        let res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${key}&units=metric`)
                            
    
        let data = await res.json();
        showWeather(data)
        console.log("data:", data);
    }
    catch (err){
        console.log("err:", err)
    }
} 

let container = document.getElementById("container")
 
function showWeather(data){
    container.innerHTML = null;

    if(data.list==undefined)
    {
        container.innerHTML="";
        let div = document.createElement("div")
        div.setAttribute("class", "divId2")

        let image=document.createElement('img');
        image.src="https://c.tenor.com/0YTbbLG-4uIAAAAC/gazab-bezzati-hai-yaar-panchayat.gif";
        image.setAttribute("id","n-movie")
        
        let text=document.createElement('h3');
        text.setAttribute("id","sorry")
        text.innerText="Sorry No such Data Found";

        div.append(image,text);
        container.append(div);
    }
    else{
        data.list.forEach(function(d) {   
        console.log("d:", d)
        let div = document.createElement("div")
        div.setAttribute("class", "divId")

        let image=document.createElement('img');
        image.src="https://cdn2.iconfinder.com/data/icons/save-for-a-rainy-day-1/60/cloud-sun-wind-512.png";
        image.setAttribute("id","no-movie")

        // let name = document.createElement("p")
        // name.innerHTML = d.name;

        let time = document.createElement('h3');
        const zone = new Date();
        zone.setDate(zone.getDate() + 1);
        time.innerHTML = zone;

        let temp = document.createElement("h4")
        temp.innerHTML = `Temp- ${d.main.temp} °C`;

        let humidity = document.createElement("h4")
        humidity.innerHTML = `Humidity- ${d.main.humidity}`;

        let pressure = document.createElement("h4");
        pressure.innerHTML =`Pressure- ${d.main.pressure}`;

        div.append(image,name,time,temp,pressure,humidity)
        container.append(div)

        });
    }
}