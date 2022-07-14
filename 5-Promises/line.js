let queue = ["Pablo","Syam","Babu Bhaiya","Raju"]


function registor() {

    let name = document.getElementById("name").value

    queue.push(name)

    let message = name+' your registration is successsful, Cheers!';

    alert(message);

    let promise = new Promise(function(resolve, reject){
        
        let x = setInterval(function(){
            
            if(queue[0] === name)
            {
                resolve(name+' its your turn now')
            }

        },1000)
    });

    promise.then(function(res){
        console.log('res', res)
    })
}


function vaccination_progress() {

    if(queue.length === 0)
    {
        clearInterval(id)
    }
    queue.shift();
    console.log("queue:", queue)
}

let id = setInterval(vaccination_progress, 2000)