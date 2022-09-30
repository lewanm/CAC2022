export default function prueba(data){
    return(
    `<p class="detail-tittle">Detalle</p>
    <p class="detail-ticket">Con entrada: ${data.entrada? 'si' : ' no' }</p>
    <p class="detail-price">Precio: ${data.entrada? '$'+data.precio : 'sin costo' }</p>
    <p class="detail-date">El dia: ${data.fecha}</p>
    <p class="detail-time">A las: ${data.hora}</p>
    <p class="detail-description">${data.descripcion}</p>
    `
    )
}
