// let mypromise = new Promise(function(resolve, reject){

//     resolve("I wonS")

//     reject("BreakUp Party, I tried")
// })


    let passexam = false;

    let mypromise = new Promise(function(resolve, reject){

        if(passexam === true)
        {
            resolve("You get a Watch");
        }

        else {
            reject("You get Chappal")
        }
    });

    console.log("mypromise:", mypromise)

    mypromise.then(function(res){
        console.log("res:", res);
    });

    mypromise.catch(function(err){
        console.log("err:", err);
    });

    // line.html

    