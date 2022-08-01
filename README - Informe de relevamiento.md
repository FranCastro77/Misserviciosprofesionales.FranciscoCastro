Aplicacion dedicada a profesionales de Ciencias Economicas, mediante la cual pueden acceder a informacion sobre cotizacion de USD y ademas generar una agenda simple con datos de sus clientes.


(a) Se quiere que los interesados puedan acceder a la cotizacion en tiempo real de los principales tipos de cambio de USD que existen en Argentina

(b) Se quiere que puedan ingresar sus datos principales (nombre, apellido, documento, mail, telefono) para registrarse en la base datos

(c) Aimismo, si lo desean, pueden ingresar los datos de sus clientes (denominacion, identificador de impuesto, mes de cierre comercial, entre otros) para poder tenerlos registrados en una agenda

(d) La informacion solo se muestra si hay datos cargados y, como requisito esencial, que tengan un usuario registrado

---------------------------------------------------------------------------------------------------------------------------------------------------------------´

(a) Se instrumento en la sección HOME del sitio (Index.html - a partir de la linea 56) operando con el archivo api.js. Se utiliza una API con un FETCH y en el html puede observarse al final antes del footer.

    Se utliza un location.reload para poder actualizar el html cada 5 minutos ya que las cotizaciones en Argentina varian permanentemente.
    

(b) Se aplica en la sección CONTACTO (contactoyconsultas.html - a partir de la linea 55) y opera junto a los archivos main.js y variables.js.

    Se crean arrays de USUARIO y CLIENTES, los cuale se cargan en LOCALSTORAGE. Se recorren los mismos para poder hacer comparacion y matcheo del numero de documento de cada usuario, para poder validar si esta previamente registrado y asi permitir la carga de los datos de clientes.

    Si un usuario esta previamente creado, puede ingresar su documento en la segunda seccion del html y podra seleccionar cargar clientes o visualizarlos mediante DOM.

    Los 3 botones que aparecen tienen eventos asociados que permiten ejecutar las funciones elegidas por el usuario.

    Si desea listar los clientes ya cargados, apareceran distintos mensajes mediante DOM dependiendo de si ingreso un documento, si no tiene clientes para mostrar, o si efectivamente hay informacion. En este último caso, ademas de listarse la informacion se le mostrara a continuacion de cada registro un boton con la opción de borrar el mismo. 
    
    En Argentina el TAX ID es un numero de 11 digitos, dividido en 3 bloques (2 digitos - 8 digitos - 1 digito) el cual no puede repetirse. Es uno solo por contribuyente fiscal. El ultimo digito (digito verificador) se utiliza para definir los vencimientos. Por ello es que se carga ese solo dato. Este número va de 0 a 9 y puede repetirse en los contribuyentes fiscales.

    En la formula eliminarcliente() se incorpora como parámetro "denominacion" pero es solo porque para efectos de esta proyecto no se incorporan todos los digitos de la clave fiscal. Si lo hiciera, ese seria un dato irrepetible. Pero como solo se incorpora el ultimo digito y ese puede ser repetido, pse deja como parámetro de la funcion la denominacion. 

    Se utliza la libreria de Sweet Alert para los mensajes asociados las acciones del usuario, a excepcion de los relaciondos a listar clientes que se generan a través del DOM.

    Se utilizan condicionales (if, if else) como así también ternarios y desestructuracion de objetos (esto último también en el archivo de API).

