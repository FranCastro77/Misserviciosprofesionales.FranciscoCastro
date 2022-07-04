//Se definen las clases 

class Usuario {
    constructor (nombre, apellido, email, telefono) {
        this.nombre = nombre
        this.apellido = apellido
        this.email = email 
        this.telefono = telefono
    }
}





btnCargar.addEventListener ("click", ()=>{
    usuarios = new Usuario (
        usuarios.nombre = document.getElementById("inputnombre").value,   
        usuarios.apellido = document.getElementById("inputapellido").value,  
        usuarios.email = document.getElementById("inputmail").value,  
        usuarios.telefono = document.getElementById("inputel").value, 
    )    
    usuariosGlobal.push(usuarios);
    alert(usuariosGlobal);
    nombre.focus()
    localStorage.setItem("usuarios", JSON.stringify(usuariosGlobal))

})

    






