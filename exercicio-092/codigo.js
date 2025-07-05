const inputNumero = document.getElementById('numero')
const btnAnalise = document.querySelector('button.btnAnalisar')
const btnNovaAnalise = document.querySelector('button.btnNovaAnalise')
const resposta = document.querySelector('div.resposta')

function analisar() {
    const numeroDigitado = inputNumero.value
    const numeroRecebido = Number(numeroDigitado)

    if (numeroDigitado === '' || isNaN(numeroRecebido)) {
        alert('Digite um número válido.')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }

    ParOuImpar(numeroRecebido)

    inputNumero.disabled = true

    btnAnalise.style.display = 'none'
    btnNovaAnalise.style.display = 'inline-block'
}

function ParOuImpar(numeroPassado) {
    if (numeroPassado % 2 === 0) {
        resposta.innerHTML = '<p>Este número é par.</p>'
    } else {
        resposta.innerHTML = '<p>Este número é ímpar.</p>'
    }
}

function novaAnalise() {
    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnAnalise.style.display = 'inline-block'
    btnNovaAnalise.style.display = 'none'

    resposta.innerHTML = ''
}