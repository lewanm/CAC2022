export default function Info(){

    const labels = `
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name"placeholder="Ingrese su nombre aqui..."> 

        <label for="email">Email:</label>
        <input type="email" id="mail" name="email" placeholder="Ingrese su dirección aqui...">
        
        <label for="phone">Telefono:</label>
        <input type="tel" id="phone" name="phone"placeholder="ingrese su telefono aqui ...."> 
    `

    return(labels)
}