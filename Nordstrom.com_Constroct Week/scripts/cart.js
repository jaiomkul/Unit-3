var cartArr = JSON.parse(localStorage.getItem("CartItems"))
    // console.log(cartArr);

    appendarticles(cartArr);

    function appendarticles(data){
    data.forEach((elem,index) => {
        // console.log(elem.item);

        var showdetail = document.createElement("div");
        showdetail.setAttribute("id","showdetail");

        var brandinfo = document.createElement("div");
        brandinfo.setAttribute("id","brandinfo");

        var cartimg = document.createElement("div");
        cartimg.setAttribute("id","cartimg");

        var image = document.createElement("img");
        image.setAttribute("src",elem.img_url);
        cartimg.append(image);

        var info = document.createElement("div");
        info.setAttribute("id","info");

        var brand = document.createElement("p");
        brand.textContent = elem.brand;

        var type = document.createElement("p");
        type.textContent = elem.name;
        type.setAttribute("id","type")

        var size = document.createElement("p");
        size.textContent =  "Size: XL";

        var color = document.createElement("p");
        color.textContent = "Color: " +  elem.color;

        var itemno = document.createElement("p");
        itemno.textContent =  "Item: " + elem.item;

        var div2 = document.createElement("div");
        div2.setAttribute("id","div2");
        // div2.innerText = "jhsdbf"

        var remove  = document.createElement("div");
        remove.setAttribute("id","remove");
        remove.textContent = "Remove"
        remove.addEventListener("click",function(){   //remove
            removeItem(index);
        });

        var savelater  = document.createElement("div");
        savelater.setAttribute("id","later");
        savelater.textContent = "Save Later"
        savelater.addEventListener("click",function(){   //savelater
            saveLater(elem);
        });

        div2.append(remove,savelater);

        info.append(brand,type,size,color,itemno,div2)
        // console.log(info);

        brandinfo.append(cartimg,info);

        var quantity = document.createElement("div");
        quantity.setAttribute("id","quantity");


        var input = document.createElement("input");
        input.setAttribute("id","quan");
        input.placeholder = "QTY"
        input.setAttribute("type","number");

        // if(input.value){
        //     console.log("sharan");

        // }
        quantity.append(input);

        var price1 = document.createElement("div");
        price1.setAttribute("id","price");

        var price = document.createElement("h3");
        price.textContent = "$" + elem.price;

        var now = document.createElement("p");
        now.textContent = "Now: $ " + elem.price;

        var was = document.createElement("p");
        was.textContent = "Was: $ " + elem.stprice;

        price1.append(price,now,was);
        // console.log(price1);

        showdetail.append(brandinfo,quantity,price1);

        var main = document.getElementById("left");
        main.append(showdetail)

    });
    //total calculator
    var sum = 0;
    for(let i=0; i<cartArr.length; i++){
      sum += cartArr[i].price;
    }
    console.log(sum);
    localStorage.setItem("total",sum);
    document.querySelector("#total").textContent = "$ " + sum;

    document.querySelector("#items").textContent = `Shopping Bag (${cartArr.length})`;  
    
}


//remove function
function removeItem(index){
    document.getElementById("left").innerHTML = null;
    cartArr.splice(index,1);
    localStorage.setItem("CartItems",JSON.stringify(cartArr));
    appendarticles(cartArr);
}
//save later function
var savearr = [];
function saveLater(elem){
    savearr.push(elem);
    localStorage.setItem("savelaterItem",JSON.stringify(savearr));     
}
var data = JSON.parse(localStorage.getItem("savelaterItem"));
var savu = document.getElementById("savelater");
savu.innerText = "Save Later " + "(" + data.length + ")"; 





function appendRight(data1){
    data1.forEach(function(elem){
        // console.log(elem);

        var mainco = document.createElement("div");
        mainco.setAttribute("id","mainco");

        var imgdiv = document.createElement("div");
        imgdiv.setAttribute("id","ridiv");

        var smimg = document.createElement("img");
        smimg.setAttribute("src",elem.imgurl);

        imgdiv.append(smimg);

        var infodiv = document.createElement("div");
        infodiv.setAttribute("id","infodiv");

        var limdeal = document.createElement("h5");
        limdeal.textContent = "Limited Deal"

        var brname = document.createElement("p");
        brname.textContent = elem.brand;

        var price = document.createElement("h5");
        price.textContent = elem.price;

        var size = document.createElement("p");
        size.textContent = "Size Available";

        infodiv.append(limdeal,brname,price,size);

        mainco.append(imgdiv,infodiv)

        document.querySelector("#right").append(mainco);

        

    });

}


dummydata = [
    {
        imgurl: "https://n.nordstrommedia.com/id/sr3/cb3be8f0-1325-426a-9f6f-8d4898c6d572.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        brand:"DONAHUE",
        price: "$ 21"
    },
    {
        imgurl: "https://n.nordstrommedia.com/id/sr3/ea37fe11-b33a-423f-940a-63387d628d15.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        brand: "ZELLA",
        price: "$ 32"
    },
    {
        imgurl: "https://n.nordstrommedia.com/id/sr3/9671ef93-13df-411d-b45a-a5e2c2ac04cf.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        brand: "TOPMAN",
        price: "$ 12"

    },
    {
        imgurl: "https://n.nordstrommedia.com/id/sr3/f6d27119-baca-4d91-973c-eca527adb6c3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        brand: "WISDOM",
        price: "$ 35"
    }

]
appendRight(dummydata)
