export default function image(data){
    return(`
        <img 
            src=${data.url}
            alt=${data.alt}>`
            )
}