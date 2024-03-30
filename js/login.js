var userName=document.querySelector("#username")
var password=document.querySelector("#password")
var loginSubmit=document.querySelector("#sign_in")

var getusername=localStorage.getItem("username")
var getpassword=localStorage.getItem("password")
 
loginSubmit.addEventListener("click",function(e){
    e.preventDefault()
    if(userName.value==="" || password.value===""){
        alert("enter your data")
    }else{
        if(getusername&&getusername.trim()===userName.value.trim() &&getpassword&&getpassword.trim()===password.value.trim()){
setTimeout(() => {
    window.location="index.html"
}, 1500);
        }else{
            alert("username or password is wrong")
        }
    }
})
