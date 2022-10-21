export default function detail(data){
    const date = new Date(data.fecha)

    const year = date.getFullYear()
    const month = ("0"+(date.getMonth() + 1 )).slice(-2)
    const day = ("0"+(date.getDate())).slice(-2)

    return(

`        <table class="table-detail">
            <tbody>
                <caption><p class="detail-tittle">Detalle</p></caption>
                <tr>
                    <td><p class="detail-ticket">Con entrada: ${data.entrada? 'si' : ' no' }</p></td>
                    <td><p class="detail-price">Precio: ${data.entrada? '$'+data.precio : 'sin costo' }</p></td>
                </tr>
                <tr>
                    <td><p class="detail-date">El dia: ${day}/${month}/${year} </p></td>
                    <td><p class="detail-time">A las: ${data.hora}</p></td>
                </tr>
                <tr>
                    <td class="detail" colspan="2"><p class="detail-description">${data.descripcion}</p></td>
                </tr>
            </tbody>
        </table>`


/*     `<p class="detail-tittle">Detalle</p>
    <p class="detail-ticket">Con entrada: ${data.entrada? 'si' : ' no' }</p>
    <p class="detail-price">Precio: ${data.entrada? '$'+data.precio : 'sin costo' }</p>
    <p class="detail-date">El dia: ${data.fecha.dia}/${data.fecha.mes}/${data.fecha.anio} </p>
    <p class="detail-time">A las: ${data.hora}</p>
    <p class="detail-description">${data.descripcion}</p>
    ` */
    )
}
