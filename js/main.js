  // Sección carga de Usuario

class Usuario {
    constructor (nombre, apellido, email, telefono){
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.telefono = telefono
    }
}

btnCargar.addEventListener("click", (e)=> {

    e.preventDefault();

    if ((document.getElementById("inputnombre").value !== "") && (document.getElementById("inputapellido").value !== "") && (document.getElementById("inputmail").value !== "") && (document.getElementById("inputel").value !== "")){

      let usuario = new Usuario (

        nombre = document.getElementById("inputnombre").value, //Variable donde guardo nombre del usuario
        apellido = document.getElementById("inputapellido").value, //Variable donde guardo apellido del usuario
        email = document.getElementById("inputmail").value, //Variable donde guardo email del usuario
        telefono = document.getElementById("inputel").value, //Variable donde guardo telefono del usuario

    )

      listaUsuarios.push(usuario)

      localStorage.setItem("ListaUsuarios", JSON.stringify(listaUsuarios))

      console.log(listaUsuarios)

    } else {
      alert ("INGRESA PRIMERO DATOS DEL USUARIO")
    }

    document.getElementById("inputnombre").value = ""
    document.getElementById("inputapellido").value = ""
    document.getElementById("inputmail").value = ""
    document.getElementById("inputel").value = ""

    document.getElementById("inputnombre").focus ()
    })




// --------------------------------------------------------------------------

//   Sección carga de datos clientes y listado


class Cliente {
    constructor (usuarionombre, denominacion, digitocuit, mescierre, iva, ganancias){
        this.usuario = usuarionombre
        this.denominacion = denominacion
        this.digitocuit = digitocuit
        this.mescierre = mescierre
        this.iva = iva
        this.ganancias = ganancias
    }
}


let nombredeusuario

btnverClientes.addEventListener("click", (e)=>{

  e.preventDefault();

  nombredeusuario = document.getElementById(usuarionombre.value);
  
  listadoClientes = document.getElementById("listadodeClientes");
  const clientes = JSON.parse(localStorage.getItem(nombredeusuario));

  console.log(clientes)
  
//   if (clientes.length === 0){

//     listadoClientes.innerHTML = "<h1>Por favor ingresa un nombre de usuario</h1>"
    
//   }else{
//     mostrarInfoclientes(clientes);
//   }
// })
})





function mostrarInfoclientes(clientes) {
 let listadoClientes = document.getElementById("listadodeClientes");
listadoClientes.innerHTML = "";
clientes.forEach(cliente => {
  let li = document.createElement("li");
  li.innerHTML = `
  <hr> ${cliente.denominacion.toUpperCase()} - IDCUIT N°: ${cliente.digitocuit} - MES CIERRE EECC: ${cliente.mescierre} - INSC. IVA: ${cliente.iva} - INSC. GCIAS.:${cliente.ganancias}`;

  listadoClientes.appendChild(li);
});
}













btncargarCliente.addEventListener("click", (e)=>{

    e.preventDefault();

    if ((document.getElementById("inputnombre").value !== "") && (document.querySelector("#denominacion").value !== "") && (document.querySelector("#digitocuit").value !== "") && (document.querySelector("#mescierre").value !== "")&& (document.querySelector("#iva").value !== "")&& (document.querySelector("#ganancias").value !== "")){

      let cliente = new Cliente (
        usuarionombre = document.getElementById("inputnombre").value, //Toma el dato ingresado en la sección anterior
        denominacion = document.querySelector("#denominacion").value, //Variable donde guardo denominacion social del cliente
        digitocuit = document.querySelector("#digitocuit").value, //Variable donde guardo el digito verificador de la CUIT
        mescierre = document.querySelector("#mescierre").value, //Variable donde guardo el numero de mes de cierre de Estados Contables
        iva = document.querySelector("#iva").value, //Variable donde guardo si esta o no inscripto en IVA
        ganancias = document.querySelector("#ganancias").value, //Variable donde guardo si esta o no inscripto en Ganancias

  )

      listadoClientes.push(cliente)

      localStorage.setItem(nombredeusuario, JSON.stringify(listadoClientes))

      console.log(listadoClientes)

      alert("USUARIO: " + usuarionombre + "\n" + "DATOS INGRESADOS: " + cliente.denominacion.toUpperCase() +"-"+ "Digito CUIT: " + cliente.digitocuit + "-" + "Mes Cierre: " + cliente.mescierre + "-" + "Insc. IVA: " + cliente.iva +"-" + "Insc. Gcias.: " +cliente.ganancias)
      
      document.getElementById("inputnombre").value = ""
      document.querySelector("#denominacion").value = ""
      document.querySelector("#digitocuit").value = ""
      document.querySelector("#mescierre").value = ""
      document.querySelector("#iva").value = ""
      document.querySelector("#ganancias").value = ""

      document.getElementById("inputnombre").focus ()
    

    }else{
      alert ("POR FAVOR INGRESAR USUARIO Y DATOS CLIENTE PARA CONTINUAR")
    }

  })





















































