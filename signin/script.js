function validate(){
    var email = document.getElementById("email");
    
    var password = document.getElementById("pass");


    email.addEventListener("input",function(){
        email.style.border = "";
        document.getElementById("myemail").style.visibility="hidden"
    })

    password.addEventListener("input",function(){
        password.style.border = "";
        document.getElementById("mypass").style.visibility="hidden"
    })
    
    
    
     if(email.value ==""){
        email.style.border = "3px solid red";
        document.getElementById("myemail").style.visibility="visible"
        return false;
     

    }
    else if(password.value ==""){
        password.style.border = "3px solid red";
        document.getElementById("mypass").style.visibility="visible"
        return false;
     

    }
    else if(password.value.length<8){
        alert("password too short");
        password.style.border = "3px solid red";
        return false;
    }
 
}