console.log("Hola mundo!")
//LAS FUNCIONES, OBTAIN RADIO VALUE, CREATE OPTION, Y MODIFY SELECT, SOLO SON PARA 
//MODIFICAR LAS OPCIONES QUE VIENEN AL HACER CLICK EN "CONSULTA, SUGERENCIA Y QUEJA"
//LO HICE AUNQUE TENGA COSAS QUE NO VIMOS EN EL CURSO; YA QUE REALMENTE NO SIRVE ES SOLO
//PARA QUE SE VEA UN POCO MEJOR.
function obtainRadioValue(){
    //se obtiene el componente padre "<p id="radio-selector" 
    radioSelector = document.getElementById('radio-selector')
    //y del componente padre, obtenemos una lista con todos los input
    //en este caso quedaria asi
    // radioArray = [consulta, sugerencia, queja]
    radioArray = radioSelector.getElementsByTagName('input')
    
    for(let i = 0 ; i < radioArray.length ; i++){
        //recorro el array, en busqueda del item que este seleccionado y lo guardo en "VALUE"
        //seria esta parte del codigo HTML, necesito saber cual de los 3 esta "checkeado"
/*      <input type="radio" name="motivo" value="1"> Consulta
        <br>
        <input type="radio" name="motivo" value="2"> Sugerencia
        <br>
        <input type="radio" name="motivo" value="3"> Queja */

        if (radioArray[i].checked == true) {
            value = radioArray[i].value //value va a tener el value 1, 2 o 3 de 
        }
    }
    //devuelvo el valor, si esta seleccionado "Consulta" aca devuelve 1 por ejemplo.
    return parseInt(value)
}

//esta funcion es para no repetir codigo, cada vez que se quiere crear una nueva etiqueta
//se utiliza document.createElement('el tipo de etiqueta') ejemplo, option, p, ul, li, span, div, etc
function createOption(value){
    option = document.createElement('option')
    //le asigno un valor al texto de esta etiqueta, y un value
    option.text = value
    option.value = value
    //en el HTML se veria asi
    //<option value = "value">text</option>
    //y lo retorno para poder crearlo luego.
    return option
}

function modifySelect(){
    //estos 2 queria tenerlos como parametros, pero no super mandarlo desde el HTML
    const _select = 'completar'
    const value = obtainRadioValue()

    //obtengo el tag padre
    select = document.getElementById(_select)

    //aca borro todo lo anterior para poder reemplazarlo despues en el switch
    select.innerHTML = ''

    //estas 3 son simplemente las listas para despues "Mapearlas" dentro del switch y ahorrar codigo, y que sea mas legible
    const consultas = [
        "cual es el costo de un evento",
        "consulta generica, para completar",
        "Otra, completar texto abajo"
    ]

    const sugerencias = [
        "agregar informacion",
        "sugerencia generica, para completar",
        "Otra, completar texto abajo"
    ]

    const quejas = [
        "problema de organizacion",
        "queja generica, para completar",
        "Otra, completar texto abajo"
    ]

    //select = document.getElementById("ejemplo")
    //select.appendChild() lo que hace es agregar un hijo

    //si el codigo estaba asi:
    //<select id="ejemplo">
    //  <option>opcion 1</option>
    //</select>

    //creo una tag que voy a agregar a select
    //nuevaOpcion = document.createElement('option')
    //nuevaOpcion.text = "Nueva opcion!"
    //al usar select.appendChild(nuevaOpcion)

    //el HTML quedaria asi:
    //<select id="ejemplo">
    //  <option>opcion 1</option>
    //  <option>Nueva opcion!</option>
    //</select>

    //dentro del switch, hago esto mismo, pero uso la funcion creada mas arriba para poder dejar el codigo mas prolijo
    switch (value) {
        case 1:
            consultas.map(unaConsulta => {
                select.appendChild(createOption(unaConsulta))
            })
            break;

        case 2:
            sugerencias.map(unaSugerencia => {
                select.appendChild(createOption(unaSugerencia))
            })
            break;

        case 3:
            quejas.map(unaQueja => {
                select.appendChild(createOption(unaQueja))

            })
            break;

        default:
            break;
    }

}

