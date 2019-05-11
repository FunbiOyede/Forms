'use strict';

let username = document.getElementById("name");
let userEmail = document.getElementById('email');
let userPassword = document.getElementById('password');
let getUser = document.querySelector('#register');
let checkbox = document.querySelector('#checkbox');

let user = {
    name:"",
    email:"",
    password:""
}

getUser.addEventListener("click", function(e){
    e.preventDefault();

    user.name = username.value;
    user.email = userEmail.value;
    user.password = userPassword.value;

    let User = JSON.stringify(user);

    localStorage.setItem(user.name,User);

    swal({
        text:"Registration Successful",
        icon:"success"
    });

    reset(username,userEmail,userPassword,checkbox);
});



 // clear input
const reset = (username,email,password,checkInput) => {
    username.value=""
    email.value = "";
    password.value="";
    checkInput.value = "off";
   
   }