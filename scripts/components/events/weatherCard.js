import promiseHandler from "../../utils/promises.js"; 

export default async function weather(weatherData){

const url = `http://www.7timer.info/bin/civillight.php?lon=[${weatherData.coordinates.lon}]&lat=[${weatherData.coordinates.lat}]&ac=0&unit=metric&output=json`

  const options = {
    method: 'GET',
  };


  function setWeatherData(min, max, weather){
    return(     
      `
    <img class="weather-img"src="https://cdn-icons-png.flaticon.com/512/14/14868.png" alt="WEA">
    <p class="weather-name"> ${weather}</p>
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
    const requestedWeather = finalData.dataseries.find( weather => weather.date == weatherData.date)
    if (!requestedWeather) alert("El dia seleccionado no existe")
    //cambiar por ventana modal

    const min = requestedWeather.temp2m.min
    const max = requestedWeather.temp2m.max
    const weather = requestedWeather.weather

    return setWeatherData(min,max,weather)
  }
  return await getData(url)

 

  
}
