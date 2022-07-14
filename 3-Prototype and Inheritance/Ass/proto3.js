function myArray(){

    for(let i = 0; i < arguments.length; i++)
    {
        this[i] = arguments[i]
    }
    }
    let y = new myArray("Ram" , "Syam", "babubhaiya")
    console.log('x:',Object.values(y) )

    
    myArray.prototype.ad = function(){
        console.log("Flipkart Big Billon Sale")
    }

