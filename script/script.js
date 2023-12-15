setInterval(() => {
    const elementoHora = document.querySelector('#hora')
    const elementoMinuto = document.querySelector('#minuto')
    const elementoSegundo = document.querySelector('#segundo')
    const elementoPeriodo = document.querySelector('#ampm') // pegando o ampm não o periodo em si

    const circuloHora = document.querySelector('#hh')
    const circuloMinuto = document.querySelector('#mm')
    const circuloSegundo = document.querySelector('#ss')

    const diaAtual = document.querySelector('#diaAtual')

    let horaDot = document.querySelector('.hora-dot')
    let minutoDot = document.querySelector('.minuto-dot')
    let segundoDot = document.querySelector('.segundo-dot')


    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let periodo = h >= 12 ? "PM" : "AM"

    // conversao de 24 para 12
    if (h > 12) {
        h = h - 12
    }

    // adicionando 0 a esquerda
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    elementoHora.innerHTML = h
    elementoMinuto.innerHTML = m
    elementoSegundo.innerHTML = s
    elementoPeriodo.innerHTML = periodo

    circuloHora.style.strokeDashoffset = 440 - (440 * h) / 12
    circuloMinuto.style.strokeDashoffset = 440 - (440 * m) / 60
    circuloSegundo.style.strokeDashoffset = 440 - (440 * s) / 60

    horaDot.style.transform = `rotate(${h * 30}deg)`
    minutoDot.style.transform = `rotate(${m * 6}deg)`
    segundoDot.style.transform = `rotate(${s * 6}deg)`

    let dia = new Date().getDate()
    let mes = new Date().getMonth() + 1
    let ano = new Date().getFullYear()

    switch (mes) {
        case 1:
            mes = 'Janeiro'
            break;
        case 2:
            mes = 'Fevereiro'
            break;
        case 3:
            mes = 'Março'
            break;
        case 4:
            mes = 'Abril'
            break;
        case 5:
            mes = 'Maio'
            break;
        case 6:
            mes = 'Junho'
            break;
        case 7:
            mes = 'Julho'
            break;
        case 8:
            mes = 'Agosto'
            break;
        case 9:
            mes = 'Setembro'
            break;
        case 10:
            mes = 'Outubro'
            break;
        case 11:
            mes = 'Novembro'
            break;
        case 12:
            mes = 'Dezembro'
            break;

        default:
            break;
    }
    console.log(dia)
    diaAtual.innerHTML = `${dia} de ${mes} de ${ano}`
}, 1000);