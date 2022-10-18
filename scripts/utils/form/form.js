const form = document.getElementById('form')
const name = document.getElementById('name')
const mail = document.getElementById('mail')
const phone = document.getElementById('phone')
const reason = document.getElementById('reason-detail')
const comment = document.getElementById('comment')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()    
})

function checkInputs(){
    const nameValue = name.value.trim()
    const mailValue = mail.value.trim()
    const reasonValue = reason.value
    const commentValue = comment.value.trim()
    const phoneValue = phone.value.trim()

    const inputs = [name,mail,reason]
    let data
    let message = "falta agregar:"

    for(i of inputs){
        i.classList.remove('error')
    }

    if (!nameValue || nameValue === '') {
        name.className = "error"
        message += "\nnombre"
    }
    if (!mailValue || mailValue === '') {
        mail.className = 'error'
        message += "\nmail"
    }
    if (reasonValue == 'null') {
        reason.className = 'error'
        message += "\nmotivo"
    }
    if (!commentValue || commentValue === '') {
        comment.className = 'error'
        message += "\ncomentario"
    }
    
    

    if(message == "falta agregar:"){
        message = "Enviado correctamente"
        data ={
            'name':nameValue,
            'mail':mailValue,
            'phone':phoneValue,
            'reason':reasonValue,
            'comment':commentValue,
        }
    }   
    alert(message)
    console.log(data)

}
