function submitLogin(){
    var inUsername = document.getElementById("username").value;
    var inPassword = document.getElementById("password").value;

    if(inUsername == "admin" && inPassword == "12345"){
        document.getElementById("loginForm").innerHTML = "Login Confirmed!"
    }else{
        document.getElementById("loginForm").innerHTML = "Login Failed!"
    }
}