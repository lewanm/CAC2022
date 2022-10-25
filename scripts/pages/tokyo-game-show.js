import detail from '../components/events/detailCard.js'
import map from '../components/events/mapCard.js'
import weather from '../components/events/weatherCard.js'
import image from '../components/events/imageCard.js'

import {formateDate,getDate} from '../utils/weather/date.js'
import {obtainCoordinates} from '../utils/weather/coordenates.js'


const imgData = {
    'url' : "/resources/images/events/tgs.jpeg",
    'alt' : "placeholder event image"
}

const detailData = {
    'entrada' : true,
    'precio' :' ¥2,300',
    'fecha' : getDate(2),
    'descripcion' : `La mayor feria de videojuegos en Asía se celebrar durante estos días en la capital de Japón. Tokyo Game Show 2022 tendrá lugar entre el jueves 15 de septiembre y el domingo 18. Durante estos días, las grandes desarrolladoras niponas expondrán muchos de sus juegos.`
}

const mapData = {
    'url' : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.1960452579256!2d140.03320735109884!3d35.64754123932857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022821fd52ebfdf%3A0xcec0c09c4bed45e0!2sMakuhari%20Messe!5e0!3m2!1ses-419!2sar!4v1666573211683!5m2!1ses-419!2sar',
    'completeUrl': 'https://www.google.com/maps/place/Makuhari+Messe/@35.6475412,140.0332074,17z/data=!3m2!4b1!5s0x602281f5cd7bb0e9:0x5abe79654716ea10!4m5!3m4!1s0x6022821fd52ebfdf:0xcec0c09c4bed45e0!8m2!3d35.6475369!4d140.0354014',
    'lugar' : 'Makuhari Messe',
    'direccion' : '2 Chome-1 Nakase, Mihama Ward',
    'localidad' : 'Chiba, 261-0023, Japón',
}

const placeHolderCoordinates = {'lat':'9.0338725', 'lon': '8.677457'}
//en este puse las coordenadas a mano, ya que al ser de otro pais era distinto el formato.
const weatherData = {
    'coordinates' : {'lat':35.6475412,'lon':140.0332074},
    'date' : formateDate(detailData.fecha)
}

document.getElementById("image").innerHTML= image(imgData)
document.getElementById("detail").innerHTML= detail(detailData)
document.getElementById("weather").innerHTML = await weather(weatherData)
document.getElementById("map").innerHTML = map(mapData)

