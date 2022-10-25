import detail from '../components/events/detailCard.js'
import map from '../components/events/mapCard.js'
import weather from '../components/events/weatherCard.js'
import image from '../components/events/imageCard.js'

import {formateDate,getDate} from '../utils/weather/date.js'
import {obtainCoordinates} from '../utils/weather/coordenates.js'


const imgData = {
    'url' : "/resources/images/events/halloween.jpg",
    'alt' : "placeholder event image"
}

const detailData = {
    'entrada' : true,
    'precio' : '2700',
    'fecha' : getDate(5),
    'descripcion' : `Buenas a todos, el "1 de noviembre " nos volvemos a reunir para disfrazarnos y alborotarnos. Como siempre lo hacemos en el boliche PETRA. por supuesto A DISFRAZARSE TODO EL MUNDO.`
}

const mapData = {
    'url' : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3343.093624790012!2d-68.4694806!3d-33.0803214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e4304664888db%3A0xa43a70b2edbcca9f!2sBalcarce%20277%2C%20M5570CCP%20San%20Mart%C3%ADn%2C%20Mendoza!5e0!3m2!1ses-419!2sar!4v1666573706968!5m2!1ses-419!2sar',
    'completeUrl': 'https://www.google.com/maps/place/Balcarce+277,+M5570CCP+San+Mart%C3%ADn,+Mendoza/@-33.0803214,-68.4694806,17z/data=!4m5!3m4!1s0x967e4304664888db:0xa43a70b2edbcca9f!8m2!3d-33.0803214!4d-68.4694806',
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

