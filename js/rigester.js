var userName=document.querySelector("#username")
var email=document.querySelector("#email")
var password=document.querySelector("#password")

var submit=document.querySelector("#sign_up")

submit.onclick=function(e){
e.preventDefault()
    if(userName.value==="" ||email.value==="" ||password.value===""){
        alert("please enter your data")
    }else{
        localStorage.setItem("username",userName.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)
setTimeout(()=>{
window.location= "login.html"
},1500)

    }
}