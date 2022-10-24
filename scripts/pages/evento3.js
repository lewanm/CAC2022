import detail from '../components/events/detailCard.js'
import map from '../components/events/mapCard.js'
import weather from '../components/events/weatherCard.js'
import image from '../components/events/imageCard.js'

import {formateDate} from '../utils/weather/date.js'
import {obtainCoordinates} from '../utils/weather/coordenates.js'


const imgData = {
    'url' : "/resources/images/events/planetario.jpg",
    'alt' : "placeholder event image"
}

function getDate(days){
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + days )
    return tomorrow.toISOString()
}

const detailData = {
    'entrada' : false,
    'precio' : null,
    'fecha' : getDate(4),
    'descripcion' : `El 13 de junio es nuestro aniversario número 55 y queremos festejar toda la semana, por eso los invitamos a ver la función

    El Nacimiento de la Tierra: Origen y evolución de nuestro planeta
    Propuesta  inmersiva para público general con animaciones y visualizaciones de gran calidad cinematográfica, basadas en datos de alto rigor científico.`
}

const mapData = {
    'url' : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.3633403033855!2d-58.413819848689!3d-34.569671863109804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb57475fd5245%3A0x5eefd3cd753143d7!2sPlanetario%20Galileo%20Galilei!5e0!3m2!1ses-419!2sar!4v1666572089272!5m2!1ses-419!2sar',
    'completeUrl': 'https://www.google.com/maps/place/Planetario+Galileo+Galilei/@-34.5696719,-58.4138198,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcb57475fd5245:0x5eefd3cd753143d7!8m2!3d-34.5696763!4d-58.4116258',
    'lugar' : 'Planetario',
    'direccion' : 'Av. Sarmiento s/n',
    'localidad' : 'C1425 CABA',
}

const placeHolderCoordinates = {'lat':'9.0338725', 'lon': '8.677457'}

const weatherData = {
    'coordinates' : mapData.url  ? obtainCoordinates(mapData.completeUrl) : placeHolderCoordinates,
    'date' : formateDate(detailData.fecha)
}

document.getElementById("image").innerHTML= image(imgData)
document.getElementById("detail").innerHTML= detail(detailData)
document.getElementById("weather").innerHTML = await weather(weatherData)
document.getElementById("map").innerHTML = map(mapData)

