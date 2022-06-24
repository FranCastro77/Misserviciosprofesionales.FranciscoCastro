//Se definen las constantes y variables

const meses = [
    { id: 1, mes: "ENERO" },
    { id: 2, mes: "FEBRERO" },
    { id: 3, mes: "MARZO" },
    { id: 4, mes: "ABRIL" },
    { id: 5, mes: "MAYO" },
    { id: 6, mes: "JUNIO" },
    { id: 7, mes: "JULIO" },
    { id: 8, mes: "AGOSTO" },
    { id: 9, mes: "SEPTIEMBRE" },
    { id: 10, mes: "OCTUBRE" },
    { id: 11, mes: "NOVIEMBRE" },
    { id: 12, mes: "DICIEMBRE" },
    { id: 13, mes: "ENERO" },
    { id: 14, mes: "FEBRERO" },
    { id: 15, mes: "MARZO" },
    { id: 16, mes: "ABRIL" },
    { id: 17, mes: "MAYO" },
];

let vtoganancias = [];

let mescierre = [];

let reporte = [];  

let denominacion = [];
let digitocuit = [];
let cierrecontable = [];
let iva = [];
let ganancias = [];
let mesganancias = [];



let nombreUsuario = [];
let apellidoUsuario = [];
let mailUsuario = [];
let telUsuario = [];

let datosUsuarios = [];


//Se definen los eventos que corresponden a la primea parte del HTML

//Evento que monitorea la accion del usuario sobre el botón "CONFIRMAR DATOS"
let botonenvia = document.getElementById("enviadatos");

botonenvia.addEventListener ("click", respuestaClick)
function respuestaClick (){
    nombreUsuario = document.getElementById("inputnombre").value;   
    apellidoUsuario = document.getElementById("inputapellido").value;  
    mailUsuario = document.getElementById("inputmail").value;  
    telUsuario = document.getElementById("inputel").value;
    
    alert("Nombre: " + nombreUsuario + " - " + "Apellido: " + apellidoUsuario + " - " + "Email: " + mailUsuario + " - " + "Teléfono: " + telUsuario + "\n");
} 


// ----------------------------------------------------------------

//Se definen los eventos que corresponden a la segunda parte del HTML

//Se define la clase que tiene por objetivo mostrar informacion fiscal resumida de un contribuyente
    

//Evento que monitorea la accion del usuario sobre el botón "CONFIRMAR DATOS"
let botoncarga = document.getElementById("nuevacargadatos");

botoncarga.addEventListener ("click", cargadatosClick)
function cargadatosClick (){
  
  class Resumenfiscal{

    constructor(resumen){
        this.vencimientoganancias;
        this.denominacion = resumen.denominacion;
        this.digitocuit = resumen.digitocuit;
          //Este dato será utilizado más adelante cuando pueda vincularlo con las base de datos de vencimientos fiscales
        this.mescierre = resumen.mescierre;
        this.iva = resumen.iva;
           //Este dato servirá más adelante, en combinacion con % para definir montos de IVA a ingresar
        this.ganancias = resumen.ganancias;
    }

    //Cumplidas las condiciones, calcula el mes de vencimiento de ganancias.
    Resumen(){

        if(this.mescierre !="" && this.mescierre <= 12){

          this.vencimientoganancias = this.mescierre + 5;
        
        }
        
        //Busca en meses el valor de id que coincide con el el mes de vencimiento de Ganancias (5 meses despues del de cierre).
        vtoganancias = meses.find((el) => el.id === (this.vencimientoganancias));


       //Busca en meses el valor de id que coincide con el el mes de cierre).
        mescierre = meses.find((el) => el.id === (this.mescierre));


        if(this.denominacion != "" && this.ganancias.toUpperCase() === "SI"){
			
          return this.denominacion.toUpperCase() + " se encuentra inscipta en el Impuesto a las Ganancias." + "\n" + "El vencimiento del impuesto opera en el mes de" + " " + vtoganancias.mes + "." + "\n" + "Su ejercicio comercial cierra el mes " +" " + mescierre.mes; 
    
            
            }else if (this.denominacion != "" && this.vencimimientoganancias != ""  && this.ganancias.toUpperCase() != "SI"){    
    
                return this.denominacion.toUpperCase() + " NO se encuentra inscipta en el Impuesto a las Ganancias." + "\n" + "Su ejercicio comercial cierra el mes " +" " + mescierre.mes; 
        }
    }

  
  


  let resumen = new Resumenfiscal({denominacion:"",digitocuit:"",mescierre:"",iva:"",ganancias:""});

    denominacion = document.getElementById("denominacion").value;
    digitocuit = document.getElementById("digitocuit").value;
    cierrecontable = document.getElementById("mescierre").value;
    iva = document.getElementById("iva").value;
    ganancias = document.getElementById("ganancias").value;
    
    //Genera un nuevo arrays "reporte" con los datos ingresados por el usuario
    reporte.push(resumen.denominacion.toUpperCase() + ": " + "DigitoCUIT: " + resumen.digitocuit + " / " + "Mes Cierre Ejercicio: " + resumen.mescierre + " / " +  "Inscripcion IVA: " + resumen.iva + " / " + "Inscripcion Ganancias: " + resumen.ganancias + " - " + "\n");         

    console.log(resumen.Resumen());

} 




    





//Agrega elementos al HTML

//Agrega titulo a la primera y segunda sección del HTML
//Primera sección - ingreso datos ususario
let titulo = document.getElementById("titulo");
titulo.innerHTML = "<h2> Desea ingresar sus datos en nuestra base?</h2>"

//Segunda sección - ingreso datos empresas
let otrotitulo = document.getElementById("otrotitulo");
otrotitulo.innerHTML = "<h2> Desea ingresar datos de algun cliente?</h2>"










