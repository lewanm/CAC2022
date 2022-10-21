import detail from '../components/events/detailCard.js'
import map from '../components/events/mapCard.js'
import weather from '../components/events/weatherCard.js'
import image from '../components/events/imageCard.js'

import {formateDate} from '../utils/weather/date.js'
import {obtainCoordinates} from '../utils/weather/coordenates.js'


const imgData = {
    'url' : "https://upload.wikimedia.org/wikipedia/commons/d/db/Abasto_de_Buenos_Aires.jpg",
    'alt' : "placeholder event image"
}

//aca voy a indicar el dia a "MAÑANA" ya que la API que use tiene hasta 7 dias, para no seguir modificando este archivo
//preferi dejarlo de esta forma

function getDate(days){
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + days )
    return tomorrow.toISOString()
}

const detailData = {
    'entrada' : false,
    'precio' : null,
    'fecha' : getDate(4),
    'descripcion' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in ea sapiente soluta debitis, repudiandae maiores nostrum, amet quasi qui exercitationem odit saepe magni provident repellat molestiae, commodi asperiores corporis? Exercitationem eum dicta quibusdam harum nulla sapiente porro voluptate perspiciatis, tempore natus magnam vel ducimus blanditiis um dicta quibusdam harum nulla sapiente porro voluptate perspiciatis, tempore natus magnam vel ducimus blanditiis.'
}

const mapData = {
    'url' : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13136.160209054275!2d-58.410841!3d-34.6031487!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfc0cf5c054da4aa1!2sAbasto%20Shopping!5e0!3m2!1ses-419!2sar!4v1664474654293!5m2!1ses-419!2sar',
    'lugar' : 'Abasto Shopping',
    'direccion' : 'Av. corrientes 3247',
    'localidad' : 'CABA',
}

const weatherData = {
    'coordinates' : mapData.url  ? obtainCoordinates(mapData.url) : "Error",
    'date' : formateDate(detailData.fecha)
}

document.getElementById("image").innerHTML= image(imgData)
document.getElementById("detail").innerHTML= detail(detailData)
document.getElementById("weather").innerHTML = await weather(weatherData)
document.getElementById("map").innerHTML = map(mapData)

