// //Se definen las constantes y variables

// const meses = [
//     { id: 1, mes: "ENERO" },
//     { id: 2, mes: "FEBRERO" },
//     { id: 3, mes: "MARZO" },
//     { id: 4, mes: "ABRIL" },
//     { id: 5, mes: "MAYO" },
//     { id: 6, mes: "JUNIO" },
//     { id: 7, mes: "JULIO" },
//     { id: 8, mes: "AGOSTO" },
//     { id: 9, mes: "SEPTIEMBRE" },
//     { id: 10, mes: "OCTUBRE" },
//     { id: 11, mes: "NOVIEMBRE" },
//     { id: 12, mes: "DICIEMBRE" },
//     { id: 13, mes: "ENERO" },
//     { id: 14, mes: "FEBRERO" },
//     { id: 15, mes: "MARZO" },
//     { id: 16, mes: "ABRIL" },
//     { id: 17, mes: "MAYO" },
// ];

// let vtoganancias = [];

// let mescierre = [];

// let reporte = [];  

// let denominacion = [];
// let digitocuit = [];
// let cierrecontable = [];
// let iva = [];
// let ganancias = [];
// let mesganancias = [];



// let nombreUsuario = [];
// let apellidoUsuario = [];
// let mailUsuario = [];
// let telUsuario = [];

// let datosUsuarios = [];


// //Se definen los eventos que corresponden a la primea parte del HTML

// //Evento que monitorea la accion del usuario sobre el botón "VERIFICAR DATOS INGRESADOS"
// let botonenvia = document.getElementById("enviadatos");

// botonenvia.addEventListener ("click", respuestaClick)
// function respuestaClick (){
//     nombreUsuario = document.getElementById("inputnombre").value;   
//     apellidoUsuario = document.getElementById("inputapellido").value;  
//     mailUsuario = document.getElementById("inputmail").value;  
//     telUsuario = document.getElementById("inputel").value;
    
//     alert("Nombre: " + nombreUsuario + " - " + "Apellido: " + apellidoUsuario + " - " + "Email: " + mailUsuario + " - " + "Teléfono: " + telUsuario + "\n");
// } 


// // ----------------------------------------------------------------------------------------

// //Se definen los eventos que corresponden a la segunda parte del HTML


    
// //Evento que monitorea la accion del usuario sobre el botón "RESUMEN DATOS CLIENTE"
// let botoncarga = document.getElementById("nuevacargadatos");

// botoncarga.addEventListener ("click", cargadatosClick)

// function cargadatosClick (){
//     denominacion = document.getElementById("denominacion").value;
//     digitocuit = document.getElementById("digitocuit").value;
//     mescierre = Number (document.getElementById("mescierre").value);
//     iva = document.getElementById("iva").value;
//     ganancias = document.getElementById("ganancias").value;
  
//     mescierre = meses.find((el) => el.id === (mescierre));
    
//     alert("Denominacion social: " + denominacion + " - " + "Último digito CUIT: " + digitocuit + " - " + "Inscripto en IVA: " + iva + " - " + "Inscripto en Ganancias: " + ganancias + " - " + "Cierre de Ejercicio: " + mescierre.mes + "\n");
// } 



// //Agrega elementos al HTML

// //Agrega titulo a la primera y segunda sección del HTML

// //Primera sección - ingreso datos ususario
// let titulo = document.getElementById("titulo");
// titulo.innerHTML = "<h2> Desea ingresar sus datos en nuestra base?</h2>"

// //Segunda sección - ingreso datos empresas
// let otrotitulo = document.getElementById("otrotitulo");
// otrotitulo.innerHTML = "<h2> Desea ingresar datos de algun cliente?</h2>"










