import Info from '../components/form/info.js'
import ReasonDetail from '../components/form/reasonDetail.js'
import Reason from '../components/form/reason.js'
import Comment from '../components/form/comment.js'
import SendBtn from '../components/form/send-button.js'

const reasonOptions = {
    'first' : 'Consulta',
    'second' : 'Sugerencia',
    'third' : 'Queja'
}

document.getElementById("info-container").innerHTML= Info() 
document.getElementById("reason-container").innerHTML= Reason(reasonOptions) 
document.getElementById("reason-detail-container").innerHTML= ReasonDetail() 
document.getElementById("comment-container").innerHTML= Comment() 
document.getElementById("send-button-container").innerHTML= SendBtn() 

