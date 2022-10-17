import Info from '../components/info.js'
import ReasonDetail from '../components/options.js'
import Reason from '../components/reason.js'
import Comment from '../components/comment.js'
import SendBtn from '../components/send-button.js'

//import {obtainRadioValue,createOption,modifySelection} from '../utils/formFunctions.js'


function modifySelectiona(){
    console.log("Hola!")
}

/* import {} from '../utils/date.js'

const imgData = {
    'url' : "https://upload.wikimedia.org/wikipedia/commons/d/db/Abasto_de_Buenos_Aires.jpg",
    'alt' : "placeholder event image"
} */


document.getElementById("info").innerHTML= Info()
document.getElementById("reason").innerHTML= Reason()
document.getElementById("reason-detail").innerHTML= ReasonDetail()
document.getElementById("comment").innerHTML= Comment()
document.getElementById("send-button").innerHTML= SendBtn()

