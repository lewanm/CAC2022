/* import getSlideshow from "../components/home/getSlideshow.js" */

//ya que esto no lo traigo de un endpoint y es hardcodeado, tiene que tener las imagenes en la carpeta
//resources -> images


let evento1,evento2,evento3,evento4

const eventData = [
    evento1 = {
        'eventName':"Evento del Abasto UwU",
        'eventPage':'eventoEj1.html',
        'image' : 'image1.png',
        'imageAlt' : 'placeholder alt'
    },
    evento2 = {
        'eventName':"Evento del Jardin Japones",
        'eventPage':'eventoEj1.html',
        'image' : 'image2.png',
        'imageAlt' : 'placeholder alt'
    },
    evento3 = {
        'eventName':"Evento del Planetario",
        'eventPage':'eventoEj1.html',
        'image' : 'image3.png',
        'imageAlt' : 'placeholder alt'
    },
    evento4 = {
        'eventName':"Evento Calamuchita",
        'eventPage':'eventoEj1.html',
        'image' : 'image2.png',
        'imageAlt' : 'placeholder alt'
    },
    evento5 = {
        'eventName':"Evento Calamuchita",
        'eventPage':'eventoEj1.html',
        'image' : 'image2.png',
        'imageAlt' : 'placeholder alt'
    },
]

//Tuve problemas para utilizar un script separado e importarlo, ya que al declararlo en el HTML como type="module"
//este tardaba en cargar y cargaba primero el otro script, por lo tanto me indicaba que lo de este no existia.
//tendria que haber hecho la otra funcion asincrona, pero por tema de tiempo decidi dejarlo asi.
const slideShow = (data) => {

    let events = ""

    for (let i = 3; i < data.length; i++){
        events += `<div class="container slides">
    <a href="${data[i].eventPage}">
        <img class="slide-img" src="resources/images/${data[i].image}" alt="${data[i].imageAlt}">
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

    for (let data of eventData){
        events += `
        <div class="event">
            <a href="${data.eventPage}">
                <img src="/resources/images/${data.image}" alt="${data.imageAlt}">
                <p class="tittle">${data.eventName}</p>
            </a>
        </div>
        `
    }
    return events
}



document.getElementsByClassName('general-slide-container')[0].innerHTML = slideShow(eventData)
document.getElementsByClassName('events-container')[0].innerHTML = eventGalery(eventData)

