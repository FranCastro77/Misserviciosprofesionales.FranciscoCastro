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


        Swal.fire({
          title: 'Confirmas que deseas registrar los datos ingresados?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'CONFIRMO',
          denyButtonText: `DESCARTAR`,
        }).then((result) => {
          
          if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
            listaUsuarios.push(usuario)

            // usuarios =  JSON.parse(localStorage.getItem("ListaUsuarios"));
            // usuarios.push(usuario)
            
            // localStorage.setItem("ListaUsuarios", JSON.stringify(usuarios))
            
            // console.log (usuarios)

            localStorage.setItem("ListaUsuarios", JSON.stringify(listaUsuarios))
      
            Swal.fire(
              'LISTO! Has ingresado los siguientes datos', 
              nombre.toUpperCase() + " " + apellido.toUpperCase() + ", " + email + ", " + telefono,
              'success'
            )


            // nombreUsuario  [{nombre}] = listaUsuarios

            // console.log (nombreUsuario)


            document.getElementById("inputnombre").value = ""
            document.getElementById("inputapellido").value = ""
            document.getElementById("inputmail").value = ""
            document.getElementById("inputel").value = ""
        
            document.getElementById("inputnombre").focus ()


            console.log(usuarios)

          

          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })


    } else {
      
      Swal.fire({
        icon: 'error',
        title: 'ERROR!',
        text: 'RECUERDA INGRESAR DATOS DE UN USUARIO',
      })

      }

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


btncargarCliente.addEventListener("click", (e)=>{

  e.preventDefault();

  listadoClientes = document.getElementById("listadodeClientes");

  usuarios =  JSON.parse(localStorage.getItem("ListaUsuarios"));

  console.log (usuarios)

  if ((document.getElementById("inputnombre").value !== "") && (document.querySelector("#denominacion").value !== "") && (document.querySelector("#digitocuit").value !== "") && (document.querySelector("#mescierre").value !== "")&& (document.querySelector("#iva").value !== "")&& (document.querySelector("#ganancias").value !== "")){

 
        const cliente = new Cliente (

          usuarionombre = document.getElementById("inputnombre").value, //Toma el dato ingresado en la sección anterior
          denominacion = document.querySelector("#denominacion").value, //Variable donde guardo denominacion social del cliente
          digitocuit = document.querySelector("#digitocuit").value, //Variable donde guardo el digito verificador de la CUIT
          mescierre = document.querySelector("#mescierre").value, //Variable donde guardo el numero de mes de cierre de Estados Contables
          iva = document.querySelector("#iva").value, //Variable donde guardo si esta o no inscripto en IVA
          ganancias = document.querySelector("#ganancias").value, //Variable donde guardo si esta o no inscripto en Ganancias
    
    )
        
        Swal.fire(
          'INGRESASTE LOS SIGUIENTES DATOS:', 
          "USUARIO: " + usuarionombre + "\n" + "DATOS INGRESADOS: " + cliente.denominacion.toUpperCase() +"-"+ "Digito CUIT: " + cliente.digitocuit + "-" + "Mes Cierre: " + cliente.mescierre + "-" + "Insc. IVA: " + cliente.iva +"-" + "Insc. Gcias.: " +cliente.ganancias,
          'success'
    )  
      
        clientesenLS.push(cliente);
    
        localStorage.setItem("Clientes", JSON.stringify(clientesenLS));
        
    
        document.getElementById("inputnombre").value = ""
        document.querySelector("#denominacion").value = ""
        document.querySelector("#digitocuit").value = ""
        document.querySelector("#mescierre").value = ""
        document.querySelector("#iva").value = ""
        document.querySelector("#ganancias").value = ""
    
        document.getElementById("inputnombre").focus ()
        
          



    }else{

      Swal.fire({
        icon: 'warning',
        title: 'NO SE PUDO CUMPLIR TU PETICION!',
        text: 'POR FAVOR, ASEGURA QUE EL USUARIO Y TODOS LOS CAMPOS DEL CLIENTE ESTEN COMPLETOS ',
      })

    }
  })

  


btnverClientes.addEventListener("click", (e) =>{

  e.preventDefault();

  listadoClientes = document.getElementById("listadodeClientes");

  let clientes = JSON.parse(localStorage.getItem("Clientes"));

  listadoClientes.innerHTML = "";
    
  clientes.forEach(cliente => {
      let li = document.createElement("li");
      li.innerHTML = `
      
      <hr> ${cliente.denominacion.toUpperCase()} - IDCUIT N°: ${cliente.digitocuit} - MES CIERRE EECC: ${cliente.mescierre} - INSC. IVA: ${cliente.iva} - INSC. GCIAS.:${cliente.ganancias}`;
    
      listadoClientes.appendChild(li);
    });
  
  
  console.log(clientes);
  })


 


































































