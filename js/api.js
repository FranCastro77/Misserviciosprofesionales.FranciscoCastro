
let titulo = document.createElement("titulo")
titulo.innerHTML = `
<h5> ${"COTIZACIONES DOLAR ESTADOUNIDENSE AL DIA: " + output} </h5>
`;
infousd.insertAdjacentElement("afterbegin", titulo);



const vercotizaciones = async () => {

    setInterval("location.reload()",30000);
    
    try{
        const UsdOficial = await fetch('https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
        


        const dataOfi = await UsdOficial.json();
        cotizacionesusd.push(dataOfi)
        console.log(cotizacionesusd);


        const Usdblue = await fetch('https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/dolarblue')
        
 

        const datablue = await Usdblue.json();
        cotizacionesusd.push(datablue)
        console.log(cotizacionesusd);


        const Usdccl = await fetch('https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/contadoliqui')
        
  

        const dataccl = await Usdccl.json();
        cotizacionesusd.push(dataccl)
        console.log(cotizacionesusd);


        const Usdturista = await fetch('https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/dolarturista')
        
  

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
