// Men page Js ============================Mens---------------------





function myFunction(){
    var x = document.querySelector('.checkmark1').value
    console.log(x);
    if(x== "low"){
        meData.sort(function(a,b){
            return b.price - a.price;
        });
    }
    console.log(meData)
    showDataAll(meData)
}

function myFunction1(){
    var x = document.querySelector('.checkmark2').value
    console.log(x);
    if(x== "high"){
        meData.sort(function(a,b){
            return a.price - b.price;
        });
    }
    console.log(meData)
    showDataAll(meData)
}

// _------------------------FILTER----------------------
function bmyFunction1(){
    var x = document.querySelector('.b1').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.brand==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function bmyFunction2(){
    var x = document.querySelector('.b2').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.brand==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function bmyFunction3(){
    var x = document.querySelector('.b3').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.brand==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function bmyFunction4(){
    var x = document.querySelector('.b4').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.brand==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function bmyFunction5(){
    var x = document.querySelector('.b5').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.brand==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function bmyFunction6(){
    var x = document.querySelector('.b6').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.brand==x;
    })
    console.log(meData)
    showDataAll(bx)
}
// ===========COLOR FILTER===================================== //

function cmyFunction1(){
    var x = document.querySelector('.c1').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.color==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function cmyFunction2(){
    var x = document.querySelector('.c2').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.color==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function cmyFunction3(){
    var x = document.querySelector('.c3').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.color==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function cmyFunction4(){
    var x = document.querySelector('.c4').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.color==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function cmyFunction5(){
    var x = document.querySelector('.c5').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.color==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function cmyFunction6(){
    var x = document.querySelector('.c6').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.color==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function cmyFunction7(){
    var x = document.querySelector('.c7').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.color==x;
    })
    console.log(meData)
    showDataAll(bx)
}

function cmyFunction8(){
    var x = document.querySelector('.c8').value
    console.log(x);
    var bx = meData.filter(function(elem){
        return elem.color==x;
    })
    console.log(meData)
    showDataAll(bx)
}



// ---------------------------------------------------------------------------------------------------------
    // SideBar Filter
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }

    // sidebar filter end

    var meData = [
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008951217-White-White-1000008951217_01-2100.jpg",
    name: "Men Solid Regular Fit Band Collar T-shirt",
    brand: "dFAME",
    type: "TShirt",
    price: 500,
    stprice: 900,
    item: 16901,
    fabric: "Cotton",
    color: "white",
    discount: 40
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010656401-Green-1000010656401_01-2100.jpg",
    name: "Men Printed Crew Neck T-shirt",
    brand: "STATUS",
    type: "Tshirt",   
    price: 499,
    stprice: 900,
    item: 16901,
    fabric: "Cotton",
    color: "Brown",
    discount:40
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010616357-Blue-1000010616357_01-2100.jpg",
    name: "Men Printed Crew Neck T-shirt",
    brand: "PEPE_JEANS",
    type: "Tshirt",
    price: 839,
    stprice: 900,
    item: 16901,
    fabric: "Cotton",
    color: "Blue",
    discount: 30
},

{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009010365-Var8-Blue-Navy-1000009010365-Var8_01-2100.jpg",
    name: "Solid Slim Fit Polo T-shirt",
    brand: "INDIAN",
    type: "Tshirt",
    price: 1049,
    stprice: 1300,
    item: 16901,
    fabric: "Cotton",
    color: "Blue",
    discount: 20
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009971151-Blue-Navy-1000009971151_01-2100.jpg",
    name: "Printed Crew Neck T-Shirt",
    brand: "CELIO",
    type: "Tshirt",
    price: 699,
    stprice: 1199,
    item: 16901,
    fabric: "Cotton",
    color: "Blue",
    discount: 30
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000005319490-Caffire-Neu-Red-Red-1000005319490_01-2100.jpg",
    name: "Solid Crew Neck Tee",
    brand: "KAPPA",
    type: "Tshirt",
    price: 250,
    stprice: 300,
    item: 16901,
    fabric: "Cotton",
    color: "Red",
    discount: 10
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010753280-Red-Red-1000010753280_01-2100.jpg",
    name: "Men Striped Crew Neck T-shirt",
    brand: "JACK",
    type: "Tshirt",
    price: 899,
    stprice: 1099,
    item: 16901,
    fabric: "Cotton",
    color: "Red",
    discount: 20
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009929004-White-White-1000009929004_01-2100.jpg",
    name: "Men Printed Polo T-shirt",
    brand: "CODE",
    type: "Tshirt",
    price: 650,
    stprice: 850,
    item: 16901,
    fabric: "Cotton",
    color: "Pink",
    discount: 15
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000005319490-Caffire-Neu-Blue-Blue-1000005319490_01-2100.jpg",
    name: "Solid Crew Neck Tee",
    brand: "KAPPA",
    type: "Tshirt",
    price: 250,
    stprice: 350,
    item: 16901,
    fabric: "Cotton",
    color: "Blue",
    discount:10
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010038069-Grey-DarkGrey-1000010038069_01-2100.jpg",
    name: "Men Printed Regular Fit Crew Neck Sports T-shirt",
    brand: "PROLINE",
    type: "Tshirt",
    price: 799,
    stprice: 850,
    item: 16901,
    fabric: "Cotton",
    color: "Grey",
    discount:5
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010816184-Blue-Darkblue-1000010816184_01-2100.jpg",
    name: "Men Printed Regular Fit Polo T-shirt",
    brand: "COLORPLUS",
    type: "Tshirt",
    price: 1799,
    stprice: 2400,
    item: 16901,
    fabric: "Cotton",
    color: "Blue",
    discount:25
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010660437-Green-1000010660437_01-2100.jpg",
    name: "Men Solid V-Neck T-shirt",
    brand: "UNITED",
    type: "Tshirt",
    price: 769,
    stprice: 900,
    item: 16901,
    fabric: "Cotton",
    color: "Green",
    discount: 10
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009232313-Var7-White-White-1000009232313-Var7_01-2100.jpg",
    name: "Men Solid Regular Fit Formal Shirt with Short Sleeves",
    brand: "CODE",
    type: "Shirt",
    price: 1299,
    stprice: 1500,
    item: 16901,
    fabric: "Cotton",
    color: "White",
    discount:10
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010833586-Blue-Blue-1000010833586_01-2100.jpg",
    name: "Men Checked Slim Fit Formal Shirt",
    brand: "AMERICAN",
    type: "Shirt",
    price: 1300,
    stprice: 1600,
    item: 16901,
    fabric: "Cotton",
    color: "Blue",
    discount: 10
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010219393-Pink-Pink-1000010219393_01-2100.jpg",
    name: "Men Solid Slim Fit Formal Shirt",
    brand: "CODE",
    type: "Shirt",
    price: 580,
    stprice: 800,
    item: 16901,
    fabric: "Silk",
    color: "Pink",
    discount: 20
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009811796-Var78-Blue-1000009811796-Var78_01-2100.jpg",
    name: "Men Solid Slim Fit Formal Shirt with Mask",
    brand: "CODE",
    type: "Shirt",
    price: 580,
    stprice: 900,
    item: 16901,
    fabric: "Silk",
    color: "Blue",
    discount: 43
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010113393-Red-Red-1000010113393_01-2100.jpg",
    name: "Men Checked Full Sleeves Slim Fit Formal Shirt",
    brand: "CODE",
    type: "Shirt",
    price: 850,
    stprice: 1100,
    item: 16901,
    fabric: "Cotton",
    color: "White",
    discount: 23
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010815576-Red-1000010815576_01-2100.jpg",
    name: "Men Checked Regular Fit Casual Shirt",
    brand: "DENIMIZE",
    type: "Shirt",
    price: 909,
    stprice: 1200,
    item: 16901,
    fabric: "Cotton",
    color: "Red",
    discount: 20
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009980897-Var7-Orange-1000009980897-Var7_01-2100.jpg",
    name: "Men Solid Slim Fit Formal Shirt",
    brand: "CODE",
    type: "Shirt",
    price: 950,
    stprice: 1250,
    item: 16901,
    fabric: "Silk",
    color: "Orange",
    discount: 23
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010815598-Blue-1000010815598_01-2100.jpg",
    name: "Men Textured Regular Fit Casual Shirt",
    brand: "DENIMIZE",
    type: "Shirt",
    price: 909,
    stprice: 1300,
    item: 16901,
    fabric: "Cotton",
    color: "Blue",
    discount: 30
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009831068-Blue-MidBlue-1000009831068_01-2100.jpg",
    name: "Men Stonewashed Skinny Fit Jeans",
    brand: "DENIMIZE",
    type: "Trouser",
    price: 1050,
    stprice: 1100,
    item: 16901,
    fabric: "Jeans",
    color: "Blue",
    discount: 10
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009811994-Blue-DarkBlue-1000009811994_01-2100.jpg",
    name: "Men Stonewashed Skinny Fit Jeans",
    brand: "DENIMIZE",
    type: "Trouser",
    price: 1011,
    stprice: 1400,
    item: 16901,
    fabric: "Jeans",
    color: "Blue",
    discount: 29
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009812085-Blue-LightBlue-1000009812085_01-2100.jpg",
    name: "Men Stonewashed Skinny Fit Jeans",
    brand: "CODE",
    type: "Trouser",
    price: 1150,
    stprice: 1500,
    item: 16901,
    fabric: "Jeans",
    color: "Blue",
    discount: 30
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009830925-Grey-Grey-1000009830925_01-2100.jpg",
    name: "Men Stonewashed Skinny Fit Jeans",
    brand: "CODE",
    type: "Trouser",
    price: 1050,
    stprice: 1400,
    item: 16901,
    fabric: "Jeans",
    color: "Blue",
    discount: 30
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009812059-Grey-LightGrey-1000009812059_01-2100.jpg",
    name: "Men Stonewashed Skinny Fit Jeans",
    brand: "FORCA",
    type: "Trouser",
    price: 1025,
    stprice: 1200,
    item: 16901,
    fabric: "Jeans",
    color: "Grey",
    discount: 10
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010434998-Grey-1000010434998_01-2100.jpg",
    name: "Men Stonewashed Skinny Fit Jeans",
    brand: "CODE",
    type: "Trouser",
    price: 1022,
    stprice: 1400,
    item: 16901,
    fabric: "Jeans",
    color: "Grey",
    discount: 30
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010451290-Black-1000010451290_01-2100.jpg",
    name: "Men Washed Skinny Fit Jeans",
    brand: "DENIMIZE",
    type: "Trouser",
    price: 1329,
    stprice: 1600,
    item: 16901,
    fabric: "Jeans",
    color: "Black",
    discount: 15
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008443054-Black-BLACK-1000008443054_01-2100.jpg",
    name: "Men Stonewashed Skinny Fit Jeans",
    brand: "CODE",
    type: "Trouser",
    price: 1456,
    stprice: 1900,
    item: 16901,
    fabric: "Jeans",
    color: "Black",
    discount: 30
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010033044-Grey-Grey-1000010033044_01-2100.jpg",
    name: "Men Checked Super Slim Fit Formal Trousers",
    brand: "VAN",
    type: "Trouser",
    price: 1499,
    stprice: 1900,
    item: 16901,
    fabric: "Polyster",
    color: "Grey",
    discount: 30
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010887613-Green-Darkgreen-1000010887613_01-2100.jpg",
    name: "Men Solid Slim Tapered Formal Trousers",
    brand: "ARROW",
    type: "Trouser",
    price: 1299,
    stprice: 1600,
    item: 16901,
    fabric: "Polyster",
    color: "Black",
    discount: 20
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009677552-Grey-Grey-1000009677552_01-2100.jpg",
    name: "Men Printed Colourblock Sweater",
    brand: "SMILEYWORLD",
    type: "Winter_wear",
    price: 2001,
    stprice: 2500,
    item: 16901,
    fabric: "Woolen",
    color: "Multicolor",
    discount: 20
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010901148-Blue-1000010901148_01-2100.jpg",
    name: "Men Printed Crew Neck Sweater",
    brand: "PROLINE",
    type: "Winter_wear",
    price: 1359,
    stprice: 1600,
    item: 16901,
    fabric: "Woolen",
    color: "Multicolor",
    discount: 10
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010882064-Green-Green-1000010882064_01-2100.jpg",
    name: "Men Printed Crew Neck Sweatshirt",
    brand: "PARX",
    type: "Winter_wear",
    price: 1116,
    stprice: 1400,
    item: 16901,
    fabric: "Woolen",
    color: "Green",
    discount: 20
},
{
    img_url: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010548712-Blue-1000010548712_01-2100.jpg",
    name: "Men Solid Crew Neck Sweater",
    brand: "FAME",
    type: "Winter_wear",
    price: 1339,
    stprice: 1500,
    item: 16901,
    fabric: "Woolen",
    color: "Blue",
    discount: 10
},
];

    localStorage.setItem("dataAll",JSON.stringify(meData));
    var forAll = JSON.parse(localStorage.getItem("dataAll")) || [];
    
    function showDataAll(meData){
        document.querySelector("#prodivMa").innerHTML = "";

        meData.map(function(data){ 
        var div = document.createElement("div");
            div.setAttribute("class","menProDiv");

            var image1 = document.createElement("img");
            image1.setAttribute("src", data.img_url);
            image1.setAttribute("id","imgMainDiv");

            var divbutton = document.createElement("div");
            divbutton.setAttribute("id","divbutton");

            var x = document.createElement("div");
            // x.setAttribute("type", "radio");
            x.setAttribute("class","divb1");
            x.style.backgroundColor = "green";

            var y = document.createElement("div");
            // y.setAttribute("type", "radio");
            y.setAttribute("class","divb2");
            // y.style.backgroundColor = "red";

            var z = document.createElement("div");
            // z.setAttribute("type", "radio");
            z.setAttribute("class","divb3");
            z.style.backgroundColor = "red";

            divbutton.append(x,y,z)
            //end button

            var type = document.createElement("p");
            type.textContent = data.brand;
            type.setAttribute("id", "typeColth");

            var name1 = document.createElement("p");
            name1.textContent = data.name;
            name1.setAttribute("id", "name");

            var div2 = document.createElement("div");
            div2.setAttribute("id","mrpdivbar");

            var price1 = document.createElement("p"); 
            price1.setAttribute("id","mrpdivbar1");
            
            price1.textContent = `Now:INR ${data.price}`;
            
            var price2 = document.createElement("p");
            price2.setAttribute("id","mrpdivbar2");
            price2.textContent = `Was:INR  ${data.stprice} 30% off`;
            
            // div2.append(price1,price2);          

            div.append(image1,divbutton,type,name1,div2,price1,price2);

            div.onclick = function() {
            let x = [data]
            localStorage.setItem("allTerm",JSON.stringify(x));
            window.location.href= "productDetails.html";
        }

            document.querySelector("#prodivMa").append(div);
    });
    }
    showDataAll(meData);
