//LAS FUNCIONES, OBTAIN RADIO VALUE, CREATE OPTION, Y MODIFY SELECT, SOLO SON PARA 
//MODIFICAR LAS OPCIONES QUE VIENEN AL HACER CLICK EN "CONSULTA, SUGERENCIA Y QUEJA"
//LO HICE AUNQUE TENGA COSAS QUE NO VIMOS EN EL CURSO; YA QUE REALMENTE NO SIRVE ES SOLO
//PARA QUE SE VEA UN POCO MEJOR.
export function obtainRadioValue(){
    radioSelector = document.getElementById('radio-selector')
    radioArray = radioSelector.getElementsByTagName('input')
    
    for(let i = 0 ; i < radioArray.length ; i++){

        if (radioArray[i].checked == true) {
            value = radioArray[i].value 
        }
    }
    return parseInt(value)
}

export function createOption(value){
    option = document.createElement('option')
    option.text = value
    option.value = value
    return option
}

export function modifySelection(){
    const _select = 'completar'
    const value = obtainRadioValue()

    select = document.getElementById(_select)

    select.innerHTML = ''

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

export default {obtainRadioValue,createOption, modifySelection}