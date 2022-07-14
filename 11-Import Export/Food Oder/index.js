import navbar from "./component/navbar.js";
console.log("navbar:", navbar)

import {getData, appendData} from "./script/showData.js";

//reference to div
let navbar_container = document.getElementById('navbar-container')

//div setting
navbar_container.innerHTML = navbar();


let x= document.getElementById("x").value;
let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`;

let res = await getData(url);
console.log(res)

let parent = document.getElementById("data");

appendData(res, parent)