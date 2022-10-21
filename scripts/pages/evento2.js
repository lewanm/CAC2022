import detail from '../components/events/detailCard.js'
import map from '../components/events/mapCard.js'
import weather from '../components/events/weatherCard.js'
import image from '../components/events/imageCard.js'

import {formateDate} from '../utils/date.js'
import {obtainCoordinates} from '../utils/coordenates.js'

const imgData = {
    'url' : "https://www.buenosaires.gob.ar/sites/gcaba/files/field/image/conociendo_ba_2_0.jpg",
    'alt' : "placeholder event image"
}

const detailData = {
    'entrada' : true,
    'precio' : 450,
    'fecha' : "2022-10-07T21:00:00.000Z",
    'descripcion' : 'Desde la Fundación Cultural Argentino Japonesa que administra nuestro Jardín informamos que el sábado 5 de noviembre de 10 a 18:45 hs recibiremos donaciones y todo tipo de ayuda para enviar a Corrientes.'
}

const mapData = {
    'url' : null,
    'lugar' : 'Jardin Japones',
    'direccion' : 'Av. Casares 3450',
    'localidad' : 'PALERMO',
}

const weatherData = {
    'coordinates' : mapData.url ? obtainCoordinates(mapData.url) : "Error",
    'date' : formateDate(detailData.fecha),

}

document.getElementById("image").innerHTML= image(imgData)
document.getElementById("detail").innerHTML= detail(detailData)
document.getElementById("weather").innerHTML = await weather(weatherData)
document.getElementById("map").innerHTML = map(mapData)

