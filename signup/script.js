function validate(){
    var firstName = document.getElementById("fname");
    var lastName = document.getElementById("lname");
    var email = document.getElementById("email");
    var number = document.getElementById("number");
    var password = document.getElementById("pass");

    firstName.addEventListener("input",function(){
        firstName.style.border = "";
        document.getElementById("myfname").style.visibility="hidden"
    })
    lastName.addEventListener("input",function(){
        lastName.style.border = "";
        document.getElementById("mylname").style.visibility="hidden"
    })
    email.addEventListener("input",function(){
        email.style.border = "";
        document.getElementById("myemail").style.visibility="hidden"
    })
    number.addEventListener("input",function(){
        number.style.border = "";
        document.getElementById("mynumber").style.visibility="hidden"
    })
    password.addEventListener("input",function(){
        password.style.border = "";
        document.getElementById("mypass").style.visibility="hidden"
    })
    





    if(firstName.value ==""){
        // alert("Blank username");
        firstName.style.border = "2px solid red"; 
        document.getElementById("myfname").style.visibility="visible"
        return false;
    }
    else if(lastName.value ==""){
        // alert("Blank lastname");
        lastName.style.border = "2px solid red"; 
        document.getElementById("mylname").style.visibility="visible"
        return false;
    }
    else if(email.value ==""){
        email.style.border = "3px solid red";
        document.getElementById("myemail").style.visibility="visible"
        return false;
     

    }
    else if(number.value ==""){
        number.style.border = "3px solid red";
        document.getElementById("mynumber").style.visibility="visible"
        return false;
     

    }
    else if(number.value.length<10 || number.value.length>10){
        // alert("Number is too short");
        number.style.border = "3px solid red";
        document.getElementById("mynumber").style.visibility="visible"
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