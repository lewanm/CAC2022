import detail from '../components/events/detailCard.js'
import map from '../components/events/mapCard.js'
import weather from '../components/events/weatherCard.js'
import image from '../components/events/imageCard.js'

import {formateDate,getDate} from '../utils/weather/date.js'
import {obtainCoordinates} from '../utils/weather/coordenates.js'


const imgData = {
    'url' : "/resources/images/events/aspicia.jpg",
    'alt' : "placeholder event image"
}

const detailData = {
    'entrada' : true,
    'precio' : '500',
    'fecha' : getDate(2),
    'descripcion' : `La dirección general es de Yanina D’Acunto, la adaptación y reposición coreográfica es de Eliana Llamedo, los bailarines son Ananda Storino,Fabio Roblejo Quintana, Giuliana Guerrero Scorpaniti, Nicolás Insfran, Facundo Serrano, Julio Villalba, Efraín Rada, Emanuel Estrada y el Cuerpo de Baile.
    Basada en “La Hija del Faraón” una trama egipcia concebida por Saint-Georges y coreografiada por Marius Petipa en 1862. Reconstruida por Pierre Lacotte para el ballet del Teatro Bolshoi de Moscú. Música de Cesare Pugni.`
}

const mapData = {
    'url' : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52491.599266139696!2d-58.39502687596873!3d-34.6868906073746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3334e29f5e105%3A0xb602406f3c8b1864!2sTeatro%20Municipal%20Roma!5e0!3m2!1ses-419!2sar!4v1666662902289!5m2!1ses-419!2sar',
    'completeUrl': 'https://www.google.com.ar/maps/place/Teatro+Municipal+Roma/@-34.6868906,-58.3950269,13z/data=!4m9!1m2!2m1!1steatro+roma!3m5!1s0x95a3334e29f5e105:0xb602406f3c8b1864!8m2!3d-34.6621046!4d-58.3632765!15sCgt0ZWF0cm8gcm9tYZIBF3BlcmZvcm1pbmdfYXJ0c190aGVhdGVy4AEA',
    'lugar' : 'Teatro Municipal Roma ',
    'direccion' : 'Sarmiento 109',
    'localidad' : 'Avellaneda, Provincia de Buenos Aires',
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

