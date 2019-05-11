'use strict';

let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");

let loginObject = {
    email:"",
    password:""
}

let loginButton = document.querySelector("#logBtn");

loginButton.addEventListener("click", (e) =>{

    e.preventDefault();

    // fetching from local storage
    let key = localStorage.key(0);
    let fecthKeyValue = JSON.parse(localStorage.getItem(key));


    //  assigning values to the login object
    loginObject.email =  loginEmail.value;
    loginObject.password = loginPassword.value;

    // authenticate
    auth(fecthKeyValue);
})

// authenticate

let auth = (fetchFromLocalStorage) =>{
    if( loginObject.email === fetchFromLocalStorage.email && loginObject.password === fetchFromLocalStorage.password){
    //    alert
        swal("login successful");
        // clear input
        reset(loginEmail, loginPassword);

    }else{
        swal({
            text:"Incorrect username and password! try again",
            icon:"error",
        });
        reset(loginEmail, loginPassword);
    }
}


const reset = (email,password) => {
    email.value = "";
    password.value="";
   
   }