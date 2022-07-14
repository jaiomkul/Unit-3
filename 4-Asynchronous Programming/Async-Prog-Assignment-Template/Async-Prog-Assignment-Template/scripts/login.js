document.querySelector("form").addEventListener("submit", signIn);

    var regUser = JSON.parse(localStorage.getItem("userDataBase"));

    function signIn(event) {
        event.preventDefault();
        var name = document.querySelector("#name").value;
        var pass = document.querySelector("#pass").value;

        for(var i=0; i<regUser.length; i++)
        {
            console.log(regUser[i].userName,regUser[i].passWord);
            if(regUser[i].userName==name && regUser[i].passWord==pass){
            window.location.href="index.html"
            }
        }
        


    }