
class Usuario {
    constructor (nombre, apellido, email, telefono){
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.telefono = telefono
    }   
}

btnCargar.addEventListener("click", ()=> {

    // let usuario = new Usuario (1,2,3,4)

    // // alert(usuario.nombre)
    
    let usuario = new Usuario (

        nombre = document.getElementById("inputnombre").value, //Variable donde guardo nombre del usuario
        apellido = document.getElementById("inputapellido").value, //Variable donde guardo apellido del usuario
        email = document.getElementById("inputmail").value, //Variable donde guardo email del usuario
        telefono = document.getElementById("inputel").value, //Variable donde guardo telefono del usuario

    )
    // localStorage.setItem("Usuarios", JSON.stringify(usuario))    
    
    listaUsuarios.push(usuario)                
    
    // console.log(listaUsuarios)
    // localStorage.setItem("ListaUsuarios", JSON.stringify(listaUsuarios))    
    
    
    
    
    
    alert(listaUsuarios.nombre)
    
})

























//     if ( usuario !== '' ) {
//         listaUsuarios.push(usuario)
//     }
//     usuario.value = ''
//     localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios))

// }) 








    








