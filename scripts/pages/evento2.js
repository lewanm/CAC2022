import detail from '../components/events/detailCard.js'
import map from '../components/events/mapCard.js'
import weather from '../components/events/weatherCard.js'
import image from '../components/events/imageCard.js'

const imgData = {
    'url' : "https://www.buenosaires.gob.ar/sites/gcaba/files/field/image/conociendo_ba_2_0.jpg",
    'alt' : "placeholder event image"
}

const detailData = {
    'entrada' : true,
    'precio' : 450,
    'fecha' : '5/11',
    'hora' : '10:00hs a 18:45hs',
    'descripcion' : 'Desde la Fundación Cultural Argentino Japonesa que administra nuestro Jardín informamos que el sábado 5 de noviembre de 10 a 18:45 hs recibiremos donaciones y todo tipo de ayuda para enviar a Corrientes.'
}

const mapData = {
    'url' : null,
    'lugar' : 'Jardin Japones',
    'direccion' : 'Av. Casares 3450',
    'localidad' : 'PALERMO',
}

const weatherData = {}

document.getElementById("image").innerHTML= image(imgData)
document.getElementById("detail").innerHTML= detail(detailData)
document.getElementById("weather").innerHTML = weather(weatherData)
document.getElementById("map").innerHTML = map(mapData)

