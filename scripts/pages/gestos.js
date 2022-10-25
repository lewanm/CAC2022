import detail from '../components/events/detailCard.js'
import map from '../components/events/mapCard.js'
import weather from '../components/events/weatherCard.js'
import image from '../components/events/imageCard.js'

import {formateDate,getDate} from '../utils/weather/date.js'
import {obtainCoordinates} from '../utils/weather/coordenates.js'


const imgData = {
    'url' : "/resources/images/events/gestos.jpg",
    'alt' : "placeholder event image"
}

const detailData = {
    'entrada' : true,
    'precio' : '2400',
    'fecha' : getDate(1),
    'descripcion' : `Emilia vuelve a su casa familiar después de muchos años a partir de un inexplicable accidente que le dejó algunas secuelas. No puede recordar.
    Todo va a ser un proceso, dijo el médico. Sus propios recuerdos se mezclan con la muerte del padre. El reencuentro con su familia será el motor para que ella pueda volver o quedarse ¿Por qué nos traemos el colchón arriba del auto? Los gestos bárbaros es una variación sobre los vínculos familiares, un intento de entender el amor y el horror de ser familia.`
}

const mapData = {
    'url' : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13136.061028871298!2d-58.3933812!3d-34.6037757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1477d6912068173!2sTeatro%20Picadero!5e0!3m2!1ses-419!2sar!4v1666670210011!5m2!1ses-419!2sar',
    'completeUrl': 'https://www.google.com/maps/place/Teatro+Picadero/@-34.6037757,-58.3933812,15z/data=!4m5!3m4!1s0x0:0xd1477d6912068173!8m2!3d-34.6037685!4d-58.3932616',
    'lugar' : 'Petra ',
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

