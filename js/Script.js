//Registro de Usuarios

//Defino las var
let usuarioindividual = [];
let usuariosglobal = [];


//Evento que monitorea la accion del usuario sobre el botón "CONFIRMAR DATOS"
let botonenvia = document.getElementById("enviadatos");

botonenvia.addEventListener ("click", respuestaClick)
function respuestaClick (){
    usuarioindividual = document.getElementById("inputnombre").value;   
    usuarioindividual = document.getElementById("inputapellido").value;  
    usuarioindividual = document.getElementById("inputmail").value;  
    usuarioindividual = document.getElementById("inputel").value;

    alert("Nombre: " + usuarioindividual + " - " + "Apellido: " + usuarioindividual + " - " + "Email: " + usuarioindividual + " - " + "Teléfono: " + usuarioindividual + "\n");

    usuariosglobal.concat("Nombre: " + usuarioindividual + " - " + "Apellido: " + usuarioindividual + " - " + "Email: " + usuarioindividual + " - " + "Teléfono: " + usuarioindividual);

    console.log(usuariosglobal);
}






