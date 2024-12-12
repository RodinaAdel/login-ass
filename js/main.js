

var emailInput = document.getElementById("userEmail")
var passwordInput = document.getElementById("userPassword")
// var searchInput = document.getElementById("search")



function validation(id){
    var myElement= document.getElementById(id)
    var regexes ={
        userEmail:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        userPassword: /^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/
    }
    var testString =myElement.value
    if (regexes[id].test(testString)){
            myElement.classList.add("is-valid")
            myElement.classList.remove("is-invalid")
        return true
        
         }else{
            myElement.classList.add("is-invalid")
            myElement.classList.remove("is-valid") 
            return false       
        }
    }

function signUp(){
    var signUp ={
        userEmail:emailInput.value,
        userPassword:passwordInput.value,
    }
    window.localStorage.setItem("signUp",JSON.stringify(signUp));
    console.log(localStorage.getItem("signUp"));
    console.log(JSON.parse(localStorage.getItem("signUp")));
}
    

    