export default function Reason(data){

    const labels = `
    <p id="radio-selector" ONCHANGE="modifySelection()">
    Seleccione un motivo: 
    <input type="radio" name="motivo" value="1"> ${data.first}
    <input type="radio" name="motivo" value="2"> ${data.second}
    <input type="radio" name="motivo" value="3"> ${data.third}
    </p>
    `
    return(labels)
}