document.querySelector("form").addEventListener("submit", formSubmit);
//make function
    var userStack= JSON.parse(localStorage.getItem("userDataBase")) ||[];
    function formSubmit(event) {
        //store in variable
        event.preventDefault();
        var email = document.querySelector("#email").value;
        var pass = document.querySelector("#pass").value;
        var name = document.querySelector("#name").value;
        var num = document.querySelector("#num").value; 
        //console.log(email,pass,name,num)
//store in object
        var userData = {
            emailAdd: email,
            passWord: pass,
            userName: name,
            numBer: num,
        };
        //push data in array
        userStack.push(userData)
        //console.log(userStack)

        //store in local storeg using stringfy

        localStorage.setItem("userDataBase", JSON.stringify(userStack));
        alert("SingUp Success");
        window.location.href ="login.html";
    


    }