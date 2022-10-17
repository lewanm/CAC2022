export default function Reason(){

    const labels = `
    <p id="radio-selector" ONCHANGE="modifySelect()">
    Seleccione un motivo: 
    <input type="radio" name="motivo" value="1"> Consulta
    <input type="radio" name="motivo" value="2"> Sugerencia
    <input type="radio" name="motivo" value="3"> Queja
</p>
    `


    return(labels)
}