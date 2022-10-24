export function obtainCoordinates(url){
    //const regex = /\-?[0-9]{2}\.[0-9]{5,7}!/g
    const regex = /(?<=@)(.+?)(?=,1)/g
    const coordinates = url.match(regex)
    const latLon = coordinates[0].split(',')

    const lat = latLon[0]
    const lon = latLon[1]

    return({
        'lon': lon,
        'lat': lat
    })
}

export default {obtainCoordinates}