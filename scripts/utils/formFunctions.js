//LAS FUNCIONES, OBTAIN RADIO VALUE, CREATE OPTION, Y MODIFY SELECT, SOLO SON PARA 
//MODIFICAR LAS OPCIONES QUE VIENEN AL HACER CLICK EN "CONSULTA, SUGERENCIA Y QUEJA"
//LO HICE AUNQUE TENGA COSAS QUE NO VIMOS EN EL CURSO; YA QUE REALMENTE NO SIRVE ES SOLO
//PARA QUE SE VEA UN POCO MEJOR.


//estos campos me hubiese gustado enviarlo como parametros desde otra funcion, pero al querer ejecutar funciones de un archivo JS importado, no supe hacerlo
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

function obtainRadioValue(){
    const radioSelector = document.getElementById('radio-selector')
    const radioArray = radioSelector.getElementsByTagName('input')
    
    let value = 0;
    for(let i = 0 ; i < radioArray.length ; i++){

        if (radioArray[i].checked == true) {
            value = radioArray[i].value 
        }
    }

    return parseInt(value)
}

function createOption(value){
    option = document.createElement('option')
    option.text = value
    option.value = value
    return option
}

function modifySelection(){
    const _select = 'reason-detail'
    const value = obtainRadioValue()

    select = document.getElementById(_select)

    select.innerHTML = ''

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
            throw new Error("si te llego este mensaje, contactacme para decirme como paso")
    }

}

