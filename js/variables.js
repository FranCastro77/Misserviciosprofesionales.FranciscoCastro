
//Seccion Usuario

class Usuario {
    constructor (nombre, apellido, documento, email, telefono){
        this.nombre = nombre
        this.apellido = apellido
        this.documento = documento
        this.email = email
        this.telefono = telefono
    }
}

let usuarios; //Variable donde guardo los datos de cada usuario a medida que los ingresa

const btnCargar = document.getElementById("btnusuario")

const nombreUsuario = []



//Seccion Clientes

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

let clientesenLS; //Variable donde guardo los datos de los clientes a medida que los ingresa cada usuario

const btncargarCliente = document.querySelector("#btnclientes")

const btnverClientes = document.querySelector("#btnverclientes")
