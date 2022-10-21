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
        data.icon = 'https://cdn-icons-png.flaticon.com/512/1163/1163662.png'
        break;
      case 1:
      case 2:
        data.weather = "Parcialmente nublado"
        data.icon = 'https://cdn-icons-png.flaticon.com/512/1163/1163661.png'
        break;
      case 3:
        data.weather = "Nublado"
        data.icon = 'https://cdn-icons-png.flaticon.com/512/1163/1163624.png'
        break;
      case 45:
      case 48:
        data.weather = "Neblina"
        data.icon = 'https://cdn-icons-png.flaticon.com/512/1163/1163640.png'
        break;
      case 51:
        data.weather = "Llovizna suave"
        data.icon = 'https://cdn-icons-png.flaticon.com/512/1163/1163657.png'
        break;
      case 53:
        data.weather = "Lñovizna moderada"
        data.icon = 'https://cdn-icons-png.flaticon.com/512/1163/1163657.png'
        break;
      case 54:
        data.weather = "Llovizna fuerte"
        data.icon = 'https://cdn-icons-png.flaticon.com/512/1163/1163657.png'
        break;
      case 61:
        data.weather = "Lluvia suave"
        data.icon = 'https://cdn-icons-png.flaticon.com/512/1163/1163626.png'
        break;
      case 63:
        data.weather = "Lluvia moderada"
        data.icon = 'https://cdn-icons-png.flaticon.com/512/1163/1163626.png'
        break;
      case 63:
        data.weather = "Lluvia intensa"
        data.icon = 'https://cdn-icons-png.flaticon.com/512/1163/1163626.png'
        break;
      case 80:
        data.weather = "modificar texto"
        data.icon = 'https://cdn-icons-png.flaticon.com/512/1163/1163632.png'
        break;
      case 81:
        data.weather = "modificar texto"
        data.icon = 'https://cdn-icons-png.flaticon.com/512/1163/1163632.png'
        break;
      case 82:
        data.weather = "modificar texto"
        data.icon = 'https://cdn-icons-png.flaticon.com/512/1163/1163632.png'
        break;
      case 95: 
        data.weather = "Tormenta electrica"
        data.icon = 'https://cdn-icons-png.flaticon.com/512/1163/1163636.png'
        break;

        
      default:
        data.weather = "Error"
        break;
    }

    return data
  }

export default {getWeatherIndex, getWeather }