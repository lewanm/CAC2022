import detail from '../components/events/detailCard.js'
import map from '../components/events/mapCard.js'
import weather from '../components/events/weatherCard.js'
import image from '../components/events/imageCard.js'

import {formateDate,getDate} from '../utils/weather/date.js'
import {obtainCoordinates} from '../utils/weather/coordenates.js'


const imgData = {
    'url' : "/resources/images/events/pailoneta.jpg",
    'alt' : "placeholder event image"
}

const detailData = {
    'entrada' : true,
    'precio' : '2700',
    'fecha' : getDate(5),
    'descripcion' : `Buenas a todos, el "1 de noviembre " nos volvemos a reunir para disfrazarnos y alborotarnos. Como siempre lo hacemos en el boliche PETRA. por supuesto A DISFRAZARSE TODO EL MUNDO.`
}

const mapData = {
    'url' : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13128.493678143146!2d-58.6205327!3d-34.6515859!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xba69bce6b86d6592!2sTeatro%20Mor%C3%B3n!5e0!3m2!1ses-419!2sar!4v1666668503332!5m2!1ses-419!2sar',
    'completeUrl': 'https://www.google.com/maps/place/Teatro+Mor%C3%B3n/@-34.6515859,-58.6205327,15z/data=!4m2!3m1!1s0x0:0xba69bce6b86d6592?sa=X&ved=2ahUKEwjyyq74t_r6AhWkqpUCHRZ9CPcQ_BJ6BAhnEAU',
    'lugar' : 'TEATRO MORON ',
    'direccion' : 'Balcarce 277',
    'localidad' : 'M5570CCP San Martín, Mendoza,',
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

