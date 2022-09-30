import detail from '../components/detailCard.js'
import map from '../components/mapCard.js'
import weather from '../components/weatherCard.js'
import image from '../components/imageCard.js'

const imgData = {
    'url' : "https://upload.wikimedia.org/wikipedia/commons/d/db/Abasto_de_Buenos_Aires.jpg",
    'alt' : "placeholder event image"
}

const detailData = {
    'entrada' : false,
    'precio' : null,
    'fecha' : '25/10',
    'hora' : '9:00pm',
    'descripcion' : 'Te invitamos a subir al Mirador de la Galería Güemes. Nos encontramos minutos antes en la Entrada Mitre. Florida 165 debajo de la primer Cúpula frente a los ascensores. Costo por persona 700 pesos, duración 40 minutos y cupo máximo 20 personas'
}

const mapData = {
    'url' : 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13136.160209054275!2d-58.410841!3d-34.6031487!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfc0cf5c054da4aa1!2sAbasto%20Shopping!5e0!3m2!1ses-419!2sar!4v1664474654293!5m2!1ses-419!2sar',
    'lugar' : 'Abasto Shopping',
    'direccion' : 'Av. corrientes 3247',
    'localidad' : 'CABA',
}

const weatherData = {}

document.getElementById("image").innerHTML= image(imgData)
document.getElementById("detail").innerHTML= detail(detailData)
document.getElementById("weather").innerHTML = weather(weatherData)
document.getElementById("map").innerHTML = map(mapData)

