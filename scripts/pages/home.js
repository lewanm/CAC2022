import getSlideshow from "../components/getSlideshow.js"


//ya que esto no lo traigo de un endpoint y es hardcodeado, tiene que tener las imagenes en la carpeta
//resources -> images

const imagesData = [
    {
        'imageName' : 'image1.png',
        'alt' : 'placeholder alt'
    },
    {
        'imageName' : 'image2.png',
            'alt' : 'placeholder alt'
        },
    {
        'imageName' : 'image3.png',
        'alt' : 'placeholder alt'
    },
]

const a = document.getElementById("slide-container")
a.innerHTML = getSlideshow(imagesData)