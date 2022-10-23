import detail from '../components/events/detailCard.js'
import map from '../components/events/mapCard.js'
import weather from '../components/events/weatherCard.js'
import image from '../components/events/imageCard.js'

import {formateDate} from '../utils/weather/date.js'
import {obtainCoordinates} from '../utils/weather/coordenates.js'

function getDate(days){
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + days )
    return tomorrow.toISOString()
}

const imgData = {
    'url' : "https://www.buenosaires.gob.ar/sites/gcaba/files/field/image/conociendo_ba_2_0.jpg",
    'alt' : "placeholder event image"
}

const detailData = {
    'entrada' : true,
    'precio' : 450,
    'fecha' : getDate(3),
    'descripcion' : 'Desde la Fundación Cultural Argentino Japonesa que administra nuestro Jardín informamos que el sábado 5 de noviembre de 10 a 18:45 hs recibiremos donaciones y todo tipo de ayuda para enviar a Corrientes.'
}

const mapData = {
    'url' : null,
    'lugar' : 'Jardin Japones',
    'direccion' : 'Av. Casares 3450',
    'localidad' : 'PALERMO',
}

const placeHolderMap = "https://www.google.com/maps/place/Nigeria/@9.0338725,8.677457,6z/data=!4m5!3m4!1s0x104e0baf7da48d0d:0x99a8fe4168c50bc8!8m2!3d9.081999!4d8.675277"

const mapDataError = {
    'url' : null,
    'lugar' : 'Jardin Japones',
    'direccion' : 'Av. Casares 3450',
    'localidad' : 'PALERMO',
}


const weatherData = {
    'coordinates' : mapData.url ? obtainCoordinates(mapData.url) : obtainCoordinates(placeHolderMap),
    'date' : formateDate(detailData.fecha),

}

//const a = mapData.url ? mapData : mapDataError

document.getElementById("image").innerHTML= image(imgData)
document.getElementById("detail").innerHTML= detail(detailData)
//document.getElementById("weather").innerHTML = await weather(weatherData)
document.getElementById("map").innerHTML = map(mapData)

