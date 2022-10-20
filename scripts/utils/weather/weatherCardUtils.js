export function getWeatherIndex(data,eventData){
    return data.daily.time.findIndex(i => i == eventData.date)
}

export function getWeather(_data){
    const weathercode = _data
    let data = {
        'weather' : '',
        'icon':''
    }



    //los datos lo saco de la misma pagina de la API https://open-meteo.com/en/docs#latitude=-34.6118&longitude=-58.4173&hourly=weathercode
    switch (weathercode) {
      case 0:
        data.weather = "Despejado"
        break;
      case 1:
      case 2:
        data.weather = "Parcialmente nublado"
        break;
      case 3:
        data.weather = "Nublado"
        data.icon = 'https://cdn-icons-png.flaticon.com/512/2204/2204344.png'
        break;
      case 45:
      case 48:
        data.weather = "Neblina"
        break;
      case 51:
        data.weather = "Loovizna suave"
        break;
      case 53:
        data.weather = "Loovizna moderada"
        break;
      case 54:
        data.weather = "Loovizna fuerte"
        break;
      case 61:
        data.weather = "Lluvia suave"
        break;
      case 63:
        data.weather = "Lluvia moderada"
        break;
      case 63:
        data.weather = "Lluvia intensa"
        break;
      case 80:
        data.weather = "modificar texto"
        break;
      case 81:
        data.weather = "modificar texto"
        break;
      case 82:
        data.weather = "modificar texto"
        break;
      case 95: 
        data.weather = "Tormenta electrica"
        break;

        
      default:
        data.weather = "Error"
        break;
    }

    return data
  }

export default {getWeatherIndex, getWeather }