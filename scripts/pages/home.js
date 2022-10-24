/* import getSlideshow from "../components/home/getSlideshow.js" */

//ya que esto no lo traigo de un endpoint y es hardcodeado, tiene que tener las imagenes en la carpeta
//resources -> images

const eventData = [
    evento1 = {
        'eventName':"Festival del asado",
        'eventPage':'evento1.html',
        'image' : "asado.webp",
        'imageAlt' : 'placeholder alt'
    },
    evento2 = {
        'eventName':"Tokyo Game Show",
        'eventPage':'evento2.html',
        'image' : "tgs.jpeg",
        'imageAlt' : 'placeholder alt'
    },
    evento3 = {
        'eventName':"Feliz cumple Planetario!",
        'eventPage':'evento3.html',
        'image' : "planetario.jpg",
        'imageAlt' : 'placeholder alt'
    },
    evento4 = {
        'eventName':"Haloween 2022",
        'eventPage':'evento4.html',
        'image' : "haloween.jpg",
        'imageAlt' : 'placeholder alt'
    },
    evento5 = {
        'eventName':"Evento ejemplo",
        'eventPage':'evento1.html',
        'image' : "imagen1.png",
        'imageAlt' : 'placeholder alt'
    },
]

//Tuve problemas para utilizar un script separado e importarlo, ya que al declararlo en el HTML como type="module"
//este tardaba en cargar y cargaba primero el otro script, por lo tanto me indicaba que lo de este no existia.
//tendria que haber hecho la otra funcion asincrona, pero por tema de tiempo decidi dejarlo asi.
const slideShow = (data) => {

    let events = ""

    for (let i = 0; i < 3 ; i++){
        events += `<div class="container slides">
    <a href="${data[i].eventPage}">
        <img class="slide-img" src="resources/images/events/${data[i].image}" alt="${data[i].imageAlt}">
    </a>
    <div class="img-txt">
          ${data[i].eventName}
    </div>
</div>
        `
    }

    events += `<button class="slide-button  display-left " onclick="plusDivs(-1)">&#10094;</button>
    <button class="slide-button  display-right " onclick="plusDivs(1)">&#10095;</button>`
    return events
}

const eventGalery = (data) => {

    let events = ""

    for (let i = 0; i < 4 ; i++){
        events += `
        <div class="event">
            <a href="${data[i].eventPage}">
                <img src="/resources/images/events/${data[i].image}" alt="${data[i].imageAlt}">
                <p class="tittle">${data[i].eventName}</p>
            </a>
        </div>
        `
    }
    return events
}



document.getElementsByClassName('general-slide-container')[0].innerHTML = slideShow(eventData)
document.getElementsByClassName('events-container')[0].innerHTML = eventGalery(eventData)

