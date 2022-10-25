/* import getSlideshow from "../components/home/getSlideshow.js" */

//ya que esto no lo traigo de un endpoint y es hardcodeado, tiene que tener las imagenes en la carpeta
//resources -> images

const eventData = [
    halloween = {
        'eventName':"Halloween 2022",
        'eventPage':'halloween.html',
        'image' : "halloween.jpg",
        'imageAlt' : 'placeholder alt'
    },
    divorcio = {
        'eventName':"El divorcio",
        'eventPage':'divorcio.html',
        'image' : "divorcio.jpg",
        'imageAlt' : 'placeholder alt'
    },
    aspicia = {
        'eventName':"Aspicia",
        'eventPage':'aspicia.html',
        'image' : "aspicia.jpg",
        'imageAlt' : 'placeholder alt'
    },
    asado = {
        'eventName':"Festival del asado",
        'eventPage':'asado.html',
        'image' : "asado.webp",
        'imageAlt' : 'placeholder alt'
    },
    tgs = {
        'eventName':"Tokyo Game Show",
        'eventPage':'tokyo-game-show.html',
        'image' : "tgs.jpeg",
        'imageAlt' : 'placeholder alt'
    },
    planetario = {
        'eventName':"Feliz cumple Planetario!",
        'eventPage':'planetario.html',
        'image' : "planetario.jpg",
        'imageAlt' : 'placeholder alt'
    },
    revuelto = {
        'eventName':"Soy Rada: Revuelto",
        'eventPage':'revuelto.html',
        'image' : "revuelto.jpg",
        'imageAlt' : 'placeholder alt'
    },
    pailoneta = {
        'eventName':"La Pailoneta del Humor",
        'eventPage':'paiolenta.html',
        'image' : "pailoneta.jpg",
        'imageAlt' : 'placeholder alt'
    },
    gestos = {
        'eventName':"Los Gestos Bárbaros",
        'eventPage':'gestos.html',
        'image' : "gestos.jpg",
        'imageAlt' : 'placeholder alt'
    },
]

//Tuve problemas para utilizar un script separado e importarlo, ya que al declararlo en el HTML como type="module"
//este tardaba en cargar y cargaba primero el otro script, por lo tanto me indicaba que lo de este no existia.
//tendria que haber hecho la otra funcion asincrona, pero por tema de tiempo decidi dejarlo asi.
const slideShow = (data,cantidad) => {

    let events = ""

    for (let i = 0; i < cantidad ; i++){
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

const eventGalery = (data,desde,cuantas) => {

    let events = ""

    for (let i = desde; i < desde + cuantas ; i++){
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


const cantidadSlide = 3;
const primeraImagen = 3;
const cantidadImagenes = 4;
document.getElementsByClassName('general-slide-container')[0].innerHTML = slideShow(eventData,cantidadSlide)
document.getElementsByClassName('events-container')[0].innerHTML = eventGalery(eventData,primeraImagen,cantidadImagenes)

