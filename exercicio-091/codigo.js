const inputNumero1 = document.getElementById('numero1')
const inputNumero2 = document.getElementById('numero2')
const btnAnalisar = document.querySelector('button.btnAnalisar')
const btnNovaAnalise = document.querySelector('button.btnNovaAnalise')
const resposta = document.querySelector('div.resposta')

function analisar() {
    const numero1Digitado = inputNumero1.value
    const numero2Digitado = inputNumero2.value

    const numero1Recebido = Number(numero1Digitado)
    const numero2Recebido = Number(numero2Digitado)

    if (numero1Digitado === '' || isNaN(numero1Recebido)) {
        alert('Insira um número válido.')
        inputNumero1.value = ''
        inputNumero1.focus()
        return
    }

    if (numero2Digitado === '' || isNaN(numero2Recebido)) {
        alert('Insira um número válido.')
        inputNumero2.value = ''
        inputNumero2.focus()
        return
    }

    maior(numero1Recebido, numero2Recebido)

    inputNumero1.disabled = true
    inputNumero2.disabled = true

    btnAnalisar.style.display = 'none'
    btnNovaAnalise.style.display = 'inline-block'

}

function maior(numero1Passado, numero2Passado) {

    if (numero1Passado > numero2Passado) {
        resposta.innerHTML = `<p>O número ${numero1Passado} é maior do que o ${numero2Passado}.</p>`
    } else if (numero2Passado > numero1Passado) {
        resposta.innerHTML = `<p>O número ${numero2Passado} é maior do que o ${numero1Passado}.</p>`
    } else {
        resposta.innerHTML = '<p>Os dois números são iguais.</p>'
    }
}

function novaAnalise() {
    inputNumero1.disabled = false
    inputNumero2.disabled = false
    inputNumero1.value = ''
    inputNumero2.value = ''
    inputNumero1.focus()

    btnAnalisar.style.display = 'inline-block'
    btnNovaAnalise.style.display = 'none'

    resposta.innerHTML = ''
}