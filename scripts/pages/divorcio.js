import detail from '../components/events/detailCard.js'
import map from '../components/events/mapCard.js'
import weather from '../components/events/weatherCard.js'
import image from '../components/events/imageCard.js'

import {formateDate,getDate} from '../utils/weather/date.js'
import {obtainCoordinates} from '../utils/weather/coordenates.js'


const imgData = {
    'url' : "/resources/images/events/divorcio.jpg",
    'alt' : "placeholder event image"
}

const detailData = {
    'entrada' : true,
    'precio' : '4000',
    'fecha' : getDate(6),
    'descripcion' : `Con preestrenos previstos para este fin de semana en Rosario y el próximo en Mendoza, entre otros destinos, antes de su desembarco en la temporada de verano en Mar del Plata el 27 de diciembre, y después de una serie de idas y vueltas que incluyeron la mediatizada y nunca del todo aclarada salida de la talentosa Leticia Bredice que formaba parte de elenco original de El Divorcio y que en medio de los ensayos fue reemplaza por Carla Conte, la obra, con dramaturgia y dirección de Nelson Valente, se presenta este viernes y sábado en el Broadway.
    `
}

const mapData = {
    'url' : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13401.686011624817!2d-68.8366354!3d-32.8870223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe2eb6e07654c4cb3!2sTeatro%20Mendoza!5e0!3m2!1ses-419!2sar!4v1666668367313!5m2!1ses-419!2sar',
    'completeUrl': 'https://www.google.com/maps/place/Teatro+Mendoza/@-32.8870223,-68.8366354,15z/data=!4m5!3m4!1s0x0:0xe2eb6e07654c4cb3!8m2!3d-32.8870221!4d-68.8367092',
    'lugar' : 'Teatro Mendoza',
    'direccion' : 'San Juan 1427',
    'localidad' : 'M5500 Mendoza',
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

