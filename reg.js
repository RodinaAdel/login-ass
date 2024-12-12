var nameInput = document.getElementById("name")
var emailInput = document.getElementById("email")
var passwordInput = document.getElementById("password")


function login(){
    var login ={
        name: nameInput.value,
        email: emailInput.value,
        password:passwordInput.value

    }
    window.localStorage.setItem("signUp",JSON.stringify(signUp));
    console.log(localStorage.getItem("signUp"));
    console.log(JSON.parse(localStorage.getItem("signUp")));    
}

function validation(id){
var myElement= document.getElementById(id)
var regexes ={
    name:/^[A-Z][a-zA-Z0-9]{2,10}$/,
email:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
password: /^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/
}
var testString =myElement.value
if (regexes[id].test(testString)){
        myElement.classList.add("is-valid")
        myElement.classList.remove("is-invalid")

     }else{
        myElement.classList.add("is-invalid")
        myElement.classList.remove("is-valid")
        return false
    }
    
}




