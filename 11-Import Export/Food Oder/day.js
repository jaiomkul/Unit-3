import navbar from "./component/navbar.js";
console.log("navbar:", navbar)

let navbar_container = document.getElementById('navbar-container')
navbar_container.innerHTML = navbar();