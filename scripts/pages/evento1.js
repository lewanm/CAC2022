import detail from '../components/events/detailCard.js'
import map from '../components/events/mapCard.js'
import weather from '../components/events/weatherCard.js'
import image from '../components/events/imageCard.js'

import {formateDate} from '../utils/weather/date.js'
import {obtainCoordinates} from '../utils/weather/coordenates.js'


const imgData = {
    'url' : "/resources/images/events/asado.webp",
    'alt' : "placeholder event image"
}

//hice esta funcion para no tener que dar un dia especifico, ya que todas las api que encontre
//dan el pronostico a maximo 7 dias, entonces, mas facil que sea automatico
//por lo tanto tambien el horario sera automatico, pero queda facil de reemplaza por una api que traiga los datos de eventos reales

function getDate(days){
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + days )
    return tomorrow.toISOString()
}

const detailData = {
    'entrada' : false,
    'precio' : null,
    'fecha' : getDate(6),
    'descripcion' : 'El Hipódromo de Palermo llevará a cabo el próximo sábado 20 y domingo 21 de agosto una nueva edición de la feria gastronómica CARNE! dedicada a los amantes del asado y las parrilladas.'
}

const mapData = {
    'url' : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13141.715059708573!2d-58.4276466!3d-34.568016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x289b0f07f03e748b!2sHip%C3%B3dromo%20de%20Palermo!5e0!3m2!1ses-419!2sar!4v1666571354808!5m2!1ses-419!2sar',
    'completeUrl': 'https://www.google.com/maps/place/Hip%C3%B3dromo+de+Palermo/@-34.568016,-58.4276466,15z/data=!4m5!3m4!1s0x0:0x289b0f07f03e748b!8m2!3d-34.568016!4d-58.4276466',
    'lugar' : 'Hipodromo Palermo',
    'direccion' : 'Av. del Libertador 4101, ',
    'localidad' : 'C1426 CABA',
}

const weatherData = {
    'coordinates' : mapData.url  ? obtainCoordinates(mapData.completeUrl) : placeHolderCoordinates,
    'date' : formateDate(detailData.fecha)
}

document.getElementById("image").innerHTML= image(imgData)
document.getElementById("detail").innerHTML= detail(detailData)
document.getElementById("weather").innerHTML = await weather(weatherData)
document.getElementById("map").innerHTML = map(mapData)

