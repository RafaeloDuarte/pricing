export function translateMonth(month) {
    let monthTranslated = ''
    const monthToTranslate = month.substring(0, month.indexOf(' '))
    switch (monthToTranslate) {
        case 'January': return 'Janeiro'
        case 'February': return 'Fevereiro'
        case 'March': return 'Março'
        case 'April': return 'Abril'
        case 'May': return 'Maio'
        case 'June': return 'Junho'
        case 'July': return 'Julho'
        case 'August': return 'Agosto'
        case 'September': return 'Setembro'
        case 'October': return 'Outubro'
        case 'November': return 'Novembro'
        case 'December': return 'Dezembro'
    }
    return monthTranslated
}

export function translateDay(day) {
    let dayTranslated = ''
    const dayToTranslate = day
    switch (dayToTranslate) {
        case 'Mo': return 'Se'
        case 'Tu': return 'Te'
        case 'We': return 'Qua'
        case 'Th': return 'Qui'
        case 'Fr': return 'Sex'
        case 'Sa': return 'Sab'
        case 'Su': return 'Dom'
    }
    return dayTranslated
}