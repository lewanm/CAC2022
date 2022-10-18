export default function Reason(data){

    const labels = `
    <p>
    Motivo: 
    <div class="option-container" id="radio-selector" ONCHANGE="modifySelection()">
        <div>
            <input type="radio" name="motivo" id="consulta"  value="1"> 
            <label for="consulta">${data.first}</label>
            
        </div>

        <div>
            <input type="radio" name="motivo" id="sugerencia" value="2"> 
            <label for="sugerencia">${data.second}</label>
        </div>

        <div>
            <input type="radio" name="motivo" id="queja"  value="3">
            <label for="queja">${data.third}</label>
        </div>
    </div>
    </p>
    `
    return(labels)
}