// Sección carga de Usuario

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
          title: 'Confirmas?',
          text: 'Los datos que estas a punto de ingresar son: ' + nombre.toUpperCase() + " " + apellido.toUpperCase() + ", " + documento + "," + email + ", " + telefono,
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'CONFIRMO',
          denyButtonText: `DESCARTAR`,
        }).then((result) => {
          
          if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')

            let validausuario = usuarios.find ((el) => el.documento === document.getElementById("inputdni").value);  

            if(validausuario === undefined){

            usuarios.push(usuario)
            
            localStorage.setItem("usuarios", JSON.stringify(usuarios))
      
            Swal.fire({
              text: 'LISTO! Tus datos han sido registrados correctamente', 
              icon: 'success',
            })

            document.getElementById("inputnombre").value = ""
            document.getElementById("inputapellido").value = ""
            document.getElementById("inputdni").value = ""
            document.getElementById("inputmail").value = ""
            document.getElementById("inputel").value = ""
        
            document.getElementById("inputnombre").focus ()


            console.log(usuarios)


            }else{

              Swal.fire({
                icon: 'error',
                title: 'ERROR!',
                text: 'EL DOCUMENTO QUE DESEAS INGRESAR YA SE ENCUENTRA REGISTRADO',
              })
            }


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


clientesenLS = JSON.parse(localStorage.getItem("Clientes")) ?? [];

listadoClientes = document.getElementById("listadodeClientes");



btncargarCliente.addEventListener("click", (e)=>{

  e.preventDefault();


  listadoClientes.innerHTML = "";

  
  if ((document.getElementById("docupersonal").value !== "")){
  
    if ((document.querySelector("#denominacion").value !== "") && (document.querySelector("#digitocuit").value !== "") && (document.querySelector("#mescierre").value !== "")){

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


  
  }else{

    Swal.fire({
      icon: 'warning',
      title: 'ERROR!',
      text: 'NO HAS INGRESADO DATOS DE CLIENTES PARA CARGAR. ',
    })

  }


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


  listadoClientes.innerHTML = "";
    
  let muestraclientes = clientesenLS.filter((el) => el.documento === document.getElementById("docupersonal").value)


  if ((document.getElementById("docupersonal").value !== "")){

    if(muestraclientes.length === 0){
      console.log(muestraclientes);
      listadoClientes.innerHTML = "<h1> Aun no tienes clientes guardados. </h1><hr><h2> Recuerda que para poder hacerlo, primero debes registrar tus datos.</h2>"


    }else{
    
      muestraclientes.forEach(({denominacion, digitocuit, mescierre, iva, ganancias}) => {
        let li = document.createElement("li");
        li.innerHTML = `
        
        <hr> 
        ${denominacion.toUpperCase()}
        ${"- IDCUIT N°: " + digitocuit}  
        ${"- MES CIERRE EECC: " + mescierre} 
        ${iva && "- INSC. IVA: "+ iva} 
        ${ganancias && "- INSC. GCIAS.: "+ ganancias}`;


      let botonBorrar = document.createElement("button");
      botonBorrar.innerText = "Borrar";
        
      botonBorrar.addEventListener("click", () => {
          eliminarcliente(digitocuit);

          
      })

      li.appendChild(botonBorrar);   

      listadoClientes.appendChild(li);
      });

    }


  }else{
    listadoClientes.innerHTML = "<h1> DEBES INGRESAR UN DOCUMENTO PARA PODER LISTAR TUS CLIENTES. </h1>"
  }












      // if(muestraclientes.length === 0){
      //   console.log(muestraclientes);
      //   listadoClientes.innerHTML = "<h1> Aun no tienes clientes guardados. </h1><hr><h2> Recuerda que para poder hacerlo, primero debes registrar tus datos.</h2>"


      // }else{
      
      //   muestraclientes.forEach(({denominacion, digitocuit, mescierre, iva, ganancias}) => {
      //     let li = document.createElement("li");
      //     li.innerHTML = `
          
      //     <hr> 
      //     ${denominacion.toUpperCase()}
      //     ${"- IDCUIT N°: " + digitocuit}  
      //     ${"- MES CIERRE EECC: " + mescierre} 
      //     ${iva && "- INSC. IVA: "+ iva} 
      //     ${ganancias && "- INSC. GCIAS.: "+ ganancias}`;


      //   let botonBorrar = document.createElement("button");
      //   botonBorrar.innerText = "Borrar";
          
      //   botonBorrar.addEventListener("click", () => {
      //       eliminarcliente(digitocuit);

            
      //   })

      //   li.appendChild(botonBorrar);   

      //   listadoClientes.appendChild(li);
      //   });

      // }

      })

      

  
  function eliminarcliente (digitocuit) {

    Swal.fire({
      title: 'Esta seguro?',
      text: "No podras recuperar el dato una vez borrado!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK Borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        clientesenLS = clientesenLS.filter((el) => el.digitocuit !== digitocuit);
        localStorage.setItem("Clientes", JSON.stringify(clientesenLS));

        listadoClientes.innerHTML = "";
    
        let muestraclientes = clientesenLS.filter((el) => el.documento === document.getElementById("docupersonal").value)


        if(muestraclientes.length === 0){
          console.log(muestraclientes);
          listadoClientes.innerHTML = "<h1> Aun no tienes clientes guardados. </h1><hr><h2> Recuerda que para poder hacerlo, primero debes registrar tus datos.</h2>"


        }else{
        
          muestraclientes.forEach(({denominacion, digitocuit, mescierre, iva, ganancias}) => {
            let li = document.createElement("li");
            li.innerHTML = `
            
            <hr> 
            ${denominacion.toUpperCase()}
            ${"- IDCUIT N°: " + digitocuit}  
            ${"- MES CIERRE EECC: " + mescierre} 
            ${iva && "- INSC. IVA: "+ iva} 
            ${ganancias && "- INSC. GCIAS.: "+ ganancias}`;


          let botonBorrar = document.createElement("button");
          botonBorrar.innerText = "Borrar";
            
          botonBorrar.addEventListener("click", () => {
              eliminarcliente(digitocuit);

              
          })

          li.appendChild(botonBorrar);   

          listadoClientes.appendChild(li);
          });

      }


























        Swal.fire(
          'BORRADO!',
          'El registro ha sido eliminado.',
          'success'
        )
      }
    })

  }






































































