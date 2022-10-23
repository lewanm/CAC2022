//lo estoy usando en home.js directamente sin importarlo de aca.

export default function getSlideshow(data){

    
    const labels = `
    <div class="container slides">
    <a href="${data[0].eventPage}">
      <img class="slide-img" src="resources/images/${data[0].image}" alt="${data[0].imageAlt}">
    </a>
    <div class="img-txt">
      ${data[0].eventName}
    </div>
    </div>
    `


    return(labels)
}
