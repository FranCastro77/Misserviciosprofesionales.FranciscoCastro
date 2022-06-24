//Se definen las constantes

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

  //Se define la clase que tiene por objetivo mostrar informacion fiscal resumida de un contribuyente
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

        }else {

          alert ("El valor ingresado para cierre comercial no es un mes") ;
      }
        

        //Busca en meses el valor de id que coincide con el el mes de vencimiento de Ganancias (5 meses despues del de cierre).
        vtoganancias = meses.find((el) => el.id === (this.vencimientoganancias));


       //Busca en meses el valor de id que coincide con el el mes de cierre).
        mescierre = meses.find((el) => el.id === (this.mescierre));


        if(this.denominacion != "" && this.ganancias.toUpperCase() === "SI"){
			
          return this.denominacion.toUpperCase() + " se encuentra inscipta en el Impuesto a las Ganancias." + "\n" + "El vencimiento del impuesto opera en el mes de" + " " + vtoganancias.mes + "." + "\n" + "Su ejercicio comercial cierra el mes " +" " + mescierre.mes; 
    
            
            }else if (this.denominacion != "" && this.vencimimientoganancias != ""  && this.ganancias.toUpperCase() != "SI"){    
    
                return this.denominacion.toUpperCase() + " NO se encuentra inscipta en el Impuesto a las Ganancias." + "\n" + "Su ejercicio comercial cierra el mes " +" " + mescierre.mes; 
    
            
        }else{
    
          alert("Datos imcompletos. Por favor verificar") ; 
    
        }
      }
}


    let resumen = new Resumenfiscal({denominacion:"",digitocuit:"",mescierre:"",iva:"",ganancias:""});
    do{
        //Repite con do While hasta que el usuario conteste "NO" desea ingresar otro contribuyente
        denominacion = document.getElementById("denominacion").value;
        digitocuit = document.getElementById("digitocuit").value;
        cierrecontable = document.getElementById("mescierre").value;
        iva = document.getElementById("iva").value;
        ganancias = document.getElementById("ganancias").value;

        // resumen.denominacion = prompt(" Ingrese denominacion social");
        // resumen.digitocuit = prompt(" Ingrese ultimo digito verificdor de su CUIT");
        // resumen.mescierre = Number (prompt(" Indique numero de mes de su cierre comercial "));
        // resumen.iva = prompt(" Se encuentra inscripto en IVA? ");
        // resumen.ganancias = prompt(" Se encuentra inscripto en el Impuesto a las Ganancias? ");
 
        
        //Genera un nuevo arrays "reporte" con los datos ingresados por el usuario
        reporte.push(resumen.denominacion.toUpperCase() + ": " + "DigitoCUIT: " + resumen.digitocuit + " / " + "Mes Cierre Ejercicio: " + resumen.mescierre + " / " +  "Inscripcion IVA: " + resumen.iva + " / " + "Inscripcion Ganancias: " + resumen.ganancias + " - " + "\n");         
        
        
        alert(resumen.Resumen());



        //Evento que monitorea la acción del usuariio sobre el botón "NUEVO INGRESO"
        let botonnuevoingreso = document.getElementById("nuevacargadatos");

        botonnuevoingreso.addEventListener ("click", nuevacarga)
        function nuevacarga (){
    
    
    
    
    
        document.getElementById("inputnombre").value=""; 
        apellidoUsuario = document.getElementById("inputapellido").value=""; 
        mailUsuario = document.getElementById("inputmail").value="";  
        telUsuario = document.getElementById("inputel").value=""; 
        }




        //Vuelve a consultar al usuario
        entrada = prompt ("Desea ingresar un nuevo contribuyente? SI /NO");
          

    }while (entrada.toUpperCase() != "NO" );


        //Vuelvo a consultar al usuario si desea ahora un registro de los datos ingresados y repite con While hasta que el usuario conteste "NO"
    let informe = prompt("Desea obtener un resumen de los datos ingresados? SI / NO");
     
    do{


        alert(reporte.join("\n"));

    }while (entrada.toUpperCase() != "NO" );


    

