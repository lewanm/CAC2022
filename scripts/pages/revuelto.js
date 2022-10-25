import detail from '../components/events/detailCard.js'
import map from '../components/events/mapCard.js'
import weather from '../components/events/weatherCard.js'
import image from '../components/events/imageCard.js'

import {formateDate,getDate} from '../utils/weather/date.js'
import {obtainCoordinates} from '../utils/weather/coordenates.js'


const imgData = {
    'url' : "/resources/images/events/revuelto.jpg",
    'alt' : "placeholder event image"
}

const detailData = {
    'entrada' : true,
    'precio' : '2750',
    'fecha' : getDate(5),
    'descripcion' : `Luego de agotar dos Teatros Ópera y en el marco de una gran Gira Nacional que lo llevará por los principales escenarios del país, Soy Rada presenta Revuelto el 26 de agosto en el Estadio Luna Park. Revuelto llega en un tiempo bisagra del multifacético Soy Rada: un tiempo trampolín, un tiempo tobogán, un tiempo de cierres y aperturas. Un camino hecho de pasos. Un camino hecho de andar. Soy Rada nos pasea por las instantáneas de este camino, por los hitos que le hicieron saltar una y otra vez a nuevos trazos, nuevos lenguajes, nuevos vértigos, nuevas historias para contar.`
}

const mapData = {
    'url' : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13136.317185764849!2d-58.3684163!3d-34.6021563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd34b93fba734a98!2sLuna%20Park!5e0!3m2!1ses-419!2sar!4v1666660950493!5m2!1ses-419!2sar',
    'completeUrl': 'https://www.google.com/maps/place/Luna+Park/@-34.6021563,-58.3684163,15z/data=!4m2!3m1!1s0x0:0xfd34b93fba734a98?sa=X&ved=2ahUKEwiP_N3Rm_r6AhXKGLkGHTUJDYsQ_BJ6BAhrEAU',
    'lugar' : 'Luna Park ',
    'direccion' : 'Av. Eduardo Madero 470',
    'localidad' : 'C1106 CABA',
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

