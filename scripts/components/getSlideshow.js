export default function getSlideshow(data){

    let finalString = 
    `
    <div id="slides" class="ms-slides" data-delay="8000" data-transition="600">
        <div class="ms-slides__inner" >
        
    `
    for (let i in data){
        finalString += `<img src="/resources/images/${data[i].imageName}" alt=${data[i].alt}>`
    }

    finalString+=

        `</div>

        <ol class="ms-slides__indicators"></ol>
        <!-- Show Next and Previous Buttons -->
        <a href="#" class="ms-slides__next-button"></a>
        <a href="#" class="ms-slides__prev-button"></a>
    </div>`

    return(finalString)
}



/* 
<img src="/resources/images/img3.jpg" alt="dandelion">
<img src="/resources/images/img4.jpg" alt="ladybug">
<img src="/resources/images/img2.jpg" alt="beetle"> */