var cartArr = JSON.parse(localStorage.getItem("CartItems"));
// console.log(cartArr);
appendRight(cartArr);
var total = localStorage.getItem("total");
console.log(total);
document.querySelector("#totalshow").textContent =  "$ " + total;
document.querySelector("#totalp").textContent = "$ " +  total;

function appendRight(data1){
data1.forEach(function(elem){
    // console.log(elem);

    var mainco = document.createElement("div");
    mainco.setAttribute("id","mainco");

    var imgdiv = document.createElement("div");
    imgdiv.setAttribute("id","ridiv");

    var smimg = document.createElement("img");
    smimg.setAttribute("src",elem.img_url);

    imgdiv.append(smimg);

    var infodiv = document.createElement("div");
    infodiv.setAttribute("id","infodiv");

    var limdeal = document.createElement("h5");
    limdeal.textContent = elem.brand
    limdeal.id = "limdeal"

    var brname = document.createElement("p");
    brname.textContent = elem.name;
    brname.id = "namebr"

    var price = document.createElement("h5");
    price.textContent = elem.price;

    var size = document.createElement("p");
    size.textContent = "Size Available";

    infodiv.append(limdeal,brname,price,size);

    mainco.append(imgdiv,infodiv)

    document.querySelector("#cartappend").append(mainco);

});

}
// var num = document.getElementById("cardnumber").value;
// console.log(num);

function place(){
var num = document.getElementById("cardnumber").value;
var date = document.getElementById("datecard").value;
var cvv = document.getElementById("cvv").value;
if(num.length===0 || date.length===0 || cvv.length===0){
    alert("Enter Correct Card Details")

}else{
    setTimeout(function(){
       alert("proceeding to OTP Page");
       window.location.href = "otp.html"
    },3000);

}


}
function adresssaved(){
var n1 = document.getElementById("n1").value;
var n2 = document.getElementById("n2").value;
var n4 = document.getElementById("n4").value;
var n5 = document.getElementById("n5").value;
var n7 = document.getElementById("n7").value;
var n8 = document.getElementById("n8").value;
var m1 = document.getElementById("m1").value;
var m2 = document.getElementById("m2").value;
if (n1.length===0 || n2.length===0 || n4.length===0 || n5.length===0 || n7.length===0 || n8.length===0 || m1.length===0 || m2.length===0) {
    alert("Missing Shipping details. PLease Enter all the mandatory credientials")
} else {
    alert("Adress saved, Proceed to Payment Options");
}

}

function promo(){
var input = document.getElementById("promotag").value;
if(input==="masai30" || input==="Masai30" || input==="MASAI30"){
    var tot = document.getElementById("totalp");
    tot.textContent = (total*0.7);
    alert("Promocode Applied Successfully")
    console.log(total*0.7)
}
}