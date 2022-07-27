// Sección carga de Usuario

class Usuario {
    constructor (nombre, apellido, documento, email, telefono){
        this.nombre = nombre
        this.apellido = apellido
        this.documento = documento
        this.email = email
        this.telefono = telefono
    }
}

usuarios = JSON.parse(localStorage.getItem("usuarios")) ?? [];



btnCargar.addEventListener("click", (e)=> {

    e.preventDefault();
     

    if ((document.getElementById("inputnombre").value !== "") && (document.getElementById("inputapellido").value !== "") && (document.getElementById("inputdni").value !== "") && (document.getElementById("inputmail").value !== "") && (document.getElementById("inputel").value !== "")){

      let usuario = new Usuario (


        nombre = document.getElementById("inputnombre").value, //Variable donde guardo nombre del usuario
        apellido = document.getElementById("inputapellido").value, //Variable donde guardo apellido del usuario
        documento = document.getElementById("inputdni").value, //Variable donde guardo documento personal del usuario
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
            usuarios.push(usuario)
            
            localStorage.setItem("usuarios", JSON.stringify(usuarios))
      
            Swal.fire(
              'LISTO! Has ingresado los siguientes datos', 
              nombre.toUpperCase() + " " + apellido.toUpperCase() + ", " + email + ", " + telefono,
              'success'
            )

            document.getElementById("inputnombre").value = ""
            document.getElementById("inputapellido").value = ""
            document.getElementById("inputdni").value = ""
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
    constructor (documentousuario, denominacion, digitocuit, mescierre, iva, ganancias){
        this.documento = documentousuario
        this.denominacion = denominacion
        this.digitocuit = digitocuit
        this.mescierre = mescierre
        this.iva = iva
        this.ganancias = ganancias
    }
}


clientesenLS = JSON.parse(localStorage.getItem("Clientes")) ?? [];





btncargarCliente.addEventListener("click", (e)=>{

  e.preventDefault();




  if ((document.getElementById("docupersonal").value !== "") &&(document.querySelector("#denominacion").value !== "") && (document.querySelector("#digitocuit").value !== "") && (document.querySelector("#mescierre").value !== "")){

        let cliente = new Cliente (
 
          documentousuario = document.getElementById("docupersonal").value,
          denominacion = document.querySelector("#denominacion").value, //Variable donde guardo denominacion social del cliente
          digitocuit = document.querySelector("#digitocuit").value, //Variable donde guardo el digito verificador de la CUIT
          mescierre = document.querySelector("#mescierre").value, //Variable donde guardo el numero de mes de cierre de Estados Contables
          iva = document.querySelector("#iva").value, //Variable donde guardo si esta o no inscripto en IVA
          ganancias = document.querySelector("#ganancias").value, //Variable donde guardo si esta o no inscripto en Ganancias
    
    )
        let validadocumento = usuarios.find ((el) => el.documento === document.getElementById("docupersonal").value);  
          
        
        if(validadocumento !== undefined){
          console.log(validadocumento.documento)

          clientesenLS.push(cliente)

          localStorage.setItem("Clientes", JSON.stringify(clientesenLS));
            
          console.log(clientesenLS) 
          
          
          // document.getElementById("inputnombre").value = ""
          document.querySelector("#denominacion").value = ""
          document.querySelector("#digitocuit").value = ""
          document.querySelector("#mescierre").value = ""
          document.querySelector("#iva").value = ""
          document.querySelector("#ganancias").value = ""

          Swal.fire(
            'INGRESASTE LOS SIGUIENTES DATOS:', 
            "DENOMINACION: " + cliente.denominacion.toUpperCase() +"-"+ "Digito CUIT: " + cliente.digitocuit + "-" + "Mes Cierre: " + cliente.mescierre + "-" + "Insc. IVA: " + cliente.iva +"-" + "Insc. Gcias.: " +cliente.ganancias,
            'success'
          )














        }else{
          Swal.fire({
            icon: 'warning',
            title: 'NO SE PUDO CUMPLIR TU PETICION!',
            text: 'PARA PODER INGRESAR CLIENTES A LA BASE, PRIMERO DEBES TENER TUS DATOS REGISTRADOS ',
          })
          console.log("OBJETO NO ENCONTRADO")
        }
        
        


    //     clientesenLS.push(cliente)

    //     localStorage.setItem("Clientes", JSON.stringify(clientesenLS));
          
    //     console.log(clientesenLS) 
        
        
    //     // document.getElementById("inputnombre").value = ""
    //     document.querySelector("#denominacion").value = ""
    //     document.querySelector("#digitocuit").value = ""
    //     document.querySelector("#mescierre").value = ""
    //     document.querySelector("#iva").value = ""
    //     document.querySelector("#ganancias").value = ""

    //     // document.getElementById("inputnombre").focus ()

            

          
    //     Swal.fire(
    //       'INGRESASTE LOS SIGUIENTES DATOS:', 
    //       "DENOMINACION: " + cliente.denominacion.toUpperCase() +"-"+ "Digito CUIT: " + cliente.digitocuit + "-" + "Mes Cierre: " + cliente.mescierre + "-" + "Insc. IVA: " + cliente.iva +"-" + "Insc. Gcias.: " +cliente.ganancias,
    //       'success'
    // )  
      

    }else{

      Swal.fire({
        icon: 'warning',
        title: 'NO SE PUDO CUMPLIR TU PETICION!',
        text: 'PARA PODER INGRESAR DATOS DE TUS CLIENTES, PRIMERO DEBES INGRESAR TU DOCUMENTO ',
      })

    }
  })

 


btnverClientes.addEventListener("click", (e) =>{

  e.preventDefault();

  listadoClientes = document.getElementById("listadodeClientes");


  listadoClientes.innerHTML = "";
    
    let muestraclientes = clientesenLS.filter((el) => el.documento === document.getElementById("docupersonal").value)
    console.log(muestraclientes)


    muestraclientes.forEach(({denominacion, digitocuit, mescierre, iva, ganancias}) => {
      let li = document.createElement("li");
      li.innerHTML = `
      
      <hr> 
      ${denominacion.toUpperCase()}
      ${"- IDCUIT N°: " + digitocuit}  
      ${"- MES CIERRE EECC: " + mescierre} 
      ${iva && "- INSC. IVA: "+ iva} 
      ${ganancias && "- INSC. GCIAS.: "+ ganancias}`;


    // clientesenLS.forEach(({denominacion, digitocuit, mescierre, iva, ganancias}) => {
    //   let li = document.createElement("li");
    //   li.innerHTML = `
      
    //   <hr> 
    //   ${denominacion.toUpperCase()}
    //   ${"- IDCUIT N°: " + digitocuit}  
    //   ${"- MES CIERRE EECC: " + mescierre} 
    //   ${iva && "- INSC. IVA: "+ iva} 
    //   ${ganancias && "- INSC. GCIAS.: "+ ganancias}`;
    
      listadoClientes.appendChild(li);
    });
  
  
  console.log(clientesenLS);
  })





































































