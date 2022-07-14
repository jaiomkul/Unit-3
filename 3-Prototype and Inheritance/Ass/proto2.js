    
function Array(){

    Object.defineProperty(this, "length",{

        writable: true,
        enumerable: false
    })


    for(let i = 0; i < arguments.length; i++)
    {
        this[i] = arguments[i]
    }
}
    let onjOk = new Array("Ram" , "Syam", "babubhaiya")
    console.log('x:',Object.values(onjOk) )

