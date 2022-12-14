export function formateDate(date){
    date = new Date(date)
    const year = date.getFullYear()
    const month = ("0"+(date.getMonth() + 1 )).slice(-2)
    const day = ("0"+(date.getDate())).slice(-2)

    return `${year}-${month}-${day}`
}

export function getDate(days){
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + days )
    return tomorrow.toISOString()
}

export default {formateDate, getDate}