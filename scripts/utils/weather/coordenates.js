export function obtainCoordinates(url){
    let regex = /\-?[0-9]{2}\.[0-9]{5,7}!/g
    let coordinates = url.match(regex)

    return({
        'lon': coordinates[0].slice(0,-1),
        'lat': coordinates[1].slice(0,-1)
    })
}

export default {obtainCoordinates}