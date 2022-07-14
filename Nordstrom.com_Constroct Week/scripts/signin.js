
   document.querySelector("form").addEventListener("submit", signin);
        
   var Registerd_Users = JSON.parse(localStorage.getItem("localstoragrAddData"))
   console.log(Registerd_Users)

   function signin(){
   event.preventDefault();

   var reg_email = document.querySelector("#email").value;
   var reg_pass = document.querySelector("#pass").value;


   for(var i = 0; i < Registerd_Users.length; i++ )
   {
       console.log(Registerd_Users[i].email, Registerd_Users[i].password);
  
       if(Registerd_Users[i].email == reg_email  &&  Registerd_Users[i].password == reg_pass)
    {
           alert("Login successful");
           window.location.href = "../homepage.html"  
       }
       else if(Registerd_Users[i].email == reg_email  &&  Registerd_Users[i].password !== reg_pass){
           alert("wrong password");
       }else{
        alert("You need to signup account");
        window.location.href = "./signup.html"   
       }
       break;
   }
}
