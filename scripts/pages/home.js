import getSlideshow from "../components/home/getSlideshow.js"


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

document.getElementById("slide-container").innerHTML = getSlideshow(imagesData)