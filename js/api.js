
let date = new Date();
let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
// console.log(output);

let infousd = document.getElementById("cotizaciondolar")

let titulo = document.createElement("titulo")
titulo.innerHTML = `
<h5> ${"COTIZACIONES DOLAR ESTADOUNIDENSE AL DIA: " + output} </h5>
`;
infousd.insertAdjacentElement("afterbegin", titulo);





const cotizacionesusd = []  

const vercotizaciones = async () => {
    
    try{
        const UsdOficial = await fetch('https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
        
        // console.log(UsdOficial)

        const dataOfi = await UsdOficial.json();
        cotizacionesusd.push(dataOfi)
        console.log(cotizacionesusd);


        const Usdblue = await fetch('https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/dolarblue')
        
        // console.log(Usdblue)

        const datablue = await Usdblue.json();
        cotizacionesusd.push(datablue)
        console.log(cotizacionesusd);


        const Usdccl = await fetch('https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/contadoliqui')
        
        // console.log(Usdccl)

        const dataccl = await Usdccl.json();
        cotizacionesusd.push(dataccl)
        console.log(cotizacionesusd);


        const Usdturista = await fetch('https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/dolarturista')
        
        // console.log(Usdturista)

        const dataturista = await Usdturista.json();
        cotizacionesusd.push(dataturista)
        console.log(cotizacionesusd);


        cotizacionesusd[0].fecha = "OFICIAL"
        cotizacionesusd[1].fecha = "BLUE"
        cotizacionesusd[2].fecha = "CCL"
        cotizacionesusd[3].fecha = "TURISTA"




        cotizacionesusd.forEach(({fecha, compra, venta}) => {

            let li = document.createElement("li");
            li.innerHTML = `


            
       

            ${fecha}

            <hr>
            ${"- COMPRA: " + compra}  
            ${"- VENTA: " + venta}`;

            infousd.appendChild(li);

        });

    }catch(error){
        console.log(error);
    }



}


vercotizaciones ();
