let key = "229f80e454a0317e95b55bb2c756a1d6";

async function getWheatherData(){

    try 
    {
        let city = document.getElementById("city").value // accepting data
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
    
        let data = await res.json();
        showWeather(data)
        console.log("data:", data);
    }
    catch (err){
        console.log("err:", err)
    }
} 

let container = document.getElementById("container")
 
function showWeather(d){
    container.innerHTML = null;
    console.log("d:", d)

    let name = document.createElement("p")
    name.innerHTML = d.name;

    let temp = document.createElement("p")
    temp.innerHTML = `Temp- ${d.main.temp} °C`;

    let humidity = document.createElement("p")
    humidity.innerHTML = `Humidity- ${d.main.humidity}`;

    let pressure = document.createElement("p");
    pressure.innerHTML =`Pressure- ${d.main.pressure}`;

    container.append(name,temp,pressure,humidity)
}