export default function Info(){

    const labels = `
    <div class="contact">
        <label for="name">Nombre:</label>
        <input size="30" type="text" name="name"placeholder="Ingrese su nombre aqui..."> 

        <label for="email">Email:</label>
        <input type="email" name="email" placeholder="Ingrese su dirección aqui...">
        
        <label for="phone">Telefono:</label>
        <input type="tel" name="phone"placeholder="ingrese su telefono aqui ...."> 
    </div>
    `

    return(labels)
}