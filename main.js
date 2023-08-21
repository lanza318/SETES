function login(){
    var user, password

    user = document.getElementById("user").value;
    password = document.getElementById("password").value;

    if(user == "yeison" && password == "1234"){
        window.location ="enlace.html";
    } else{
        alert("Datos incorrectos")
    }
}
