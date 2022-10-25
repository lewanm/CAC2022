const placeholderMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16144500.3022037!2d-0.3674602622818771!3d8.92335865983596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1ses-419!2sar!4v1664568818174!5m2!1ses-419!2sar"

export default function map(data){
    return(
        `
        <iframe class="map"
        src="${data.url ? data.url : placeholderMap }" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <div class="address-container">
        <p class="address-name">${data.lugar}</p>
        <p class="address">Dirección: ${data.direccion}, ${data.localidad} </p>
        </div>`
    )
}
