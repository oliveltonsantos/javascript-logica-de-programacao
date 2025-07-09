const inputNumero1 = document.getElementById('numero1')
const inputNumero2 = document.getElementById('numero2')
const inputNumero3 = document.getElementById('numero3')
const btnAnalise = document.querySelector('button.btnAnalise')
const btnNovaAnalise = document.querySelector('button.btnNovaAnalise')
const resposta = document.querySelector('div.resposta')

function maior(numero1Passado, numero2Passado, numero3Passado) {
    if (numero1Passado === numero2Passado && numero2Passado === numero3Passado) {
        return '<p>Todos os números são iguais.</p>'
    }

    let maiorNumero = numero1Passado
    if (numero2Passado > maiorNumero) maiorNumero = numero2Passado
    if (numero3Passado > maiorNumero) maiorNumero = numero3Passado

    return `<p>O maior número é ${maiorNumero}.</p>`
}

function verAnalise() {
    const numero1Digitado = inputNumero1.value
    const numero1Recebido = Number(numero1Digitado)

    if (numero1Digitado === '' || isNaN(numero1Recebido)) {
        alert('Digite um número válido.')
        inputNumero1.value = ''
        inputNumero1.focus()
        return
    }

    const numero2Digitado = inputNumero2.value
    const numero2Recebido = Number(numero2Digitado)

    if (numero2Digitado === '' || isNaN(numero2Recebido)) {
        alert('Insira um número válido.')
        inputNumero2.value = ''
        inputNumero2.focus()
        return
    }

    const numero3Digitado = inputNumero3.value
    const numero3Recebido = Number(numero3Digitado)

    if (numero3Digitado === '' || isNaN(numero3Recebido)) {
        alert('Insira um número válido.')
        inputNumero3.value = ''
        inputNumero3.focus()
        return
    }

    const resultadoAnalise = maior(numero1Recebido, numero2Recebido, numero3Recebido)

    resposta.innerHTML = resultadoAnalise

    inputNumero1.disabled = true
    inputNumero2.disabled = true
    inputNumero3.disabled = true

    btnAnalise.style.display = 'none'
    btnNovaAnalise.style.display = 'inline-block'

}

function novaAnalise() {
    inputNumero1.disabled = false
    inputNumero2.disabled = false
    inputNumero3.disabled = false

    inputNumero1.value = ''
    inputNumero2.value = ''
    inputNumero3.value = ''
    inputNumero1.focus()

    btnAnalise.style.display = 'inline-block'
    btnNovaAnalise.style.display = 'none'

    resposta.innerHTML = ''
}

