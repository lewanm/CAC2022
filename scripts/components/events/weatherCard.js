import promiseHandler from "../../utils/promises.js"; 
import {getWeatherIndex, getWeather} from "../../utils/weather/weatherCardUtils.js"

export default async function weather(weatherData){

const url = `https://api.open-meteo.com/v1/forecast?latitude=${weatherData.coordinates.lat}&longitude=${weatherData.coordinates.lon}&timezone=auto&daily=temperature_2m_max,temperature_2m_min,weathercode`

  function setWeatherData(min, max, weatherAndIcon){
    return(     
      `
      <div class="icon-weather-name-container">
      <img class="weather-img"src="${weatherAndIcon.icon}" alt="${weatherAndIcon.weather}">
      <p class="weather-name">${weatherAndIcon.weather}</p>
    </div>
    <div class="temperature-container">
      <p class="weather-max"> max: ${max} </p>
      <p class="weather-min"> min: ${min} </p>
    </div>
    `)
  }

  
  async function getData(url) {
    const [data,fetchError] = await promiseHandler(
      fetch(url)
    )
    if (fetchError) throw new Error(fetchError)
      //cambiar tambien este, leer de abajo para arriba
    const [finalData, jsonError] = await promiseHandler(
      data.json()
    )

    if (jsonError) throw new Error(jsonError)
      //por ultimo este, NO LEAS ESTE SEGUNDO

    //obtengo el indice del dia del evento
    const requestedWeatherIndex = getWeatherIndex(finalData,weatherData)
    if (!requestedWeatherIndex) alert("El dia seleccionado no existe")
    //cambiar por ventana modal

    const weatherAndIcon = getWeather(finalData.daily.weathercode[requestedWeatherIndex])
    const max = finalData.daily.temperature_2m_max[requestedWeatherIndex]
    const min = finalData.daily.temperature_2m_min[requestedWeatherIndex]

    return setWeatherData(min,max,weatherAndIcon)
  }
  return await getData(url)

 

  
}
