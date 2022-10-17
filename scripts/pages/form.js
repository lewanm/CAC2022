import Info from '../components/info.js'
import ReasonDetail from '../components/reasonDetail.js'
import Reason from '../components/reason.js'
import Comment from '../components/comment.js'
import SendBtn from '../components/send-button.js'

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

