function tapMe(){
    var myEmail = document.getElementById("emailInput").value;

    if(myEmail !==''){
       
        window.location.href='/Netflix/account/index.html';
       
        // email.style.border = "3px solid red";
        // document.getElementById("myemail").style.visibility="visible"
        return false;
    }else{
        alert("Please Enter Email");
    }
}

// function checkAndRedirect() {
//     var enteredEmail = document.getElementById("emailInput").value;
  
//     if (enteredEmail !== '') {
//       // Redirect to the next page
//       window.location.href = '';
//     } else {
//       // Display an alert if no email is entered
//       alert('Please enter an email.');
//     }
//   }