const inputNumero1 = document.getElementById('numero1')
const inputNumero2 = document.getElementById('numero2')
const inputNumero3 = document.getElementById('numero3')
const btnAnalise = document.querySelector('button.btnAnalise')
const btnNovaAnalise = document.querySelector('button.btnNovaAnalise')
const resposta = document.querySelector('div.resposta')

function maior(numero1Passado, numero2Passado, numero3Passado) {
    if (numero1Passado > numero2Passado && numero1Passado > numero3Passado) {
        return numero1Passado
    } else if (numero2Passado > numero3Passado) {
        return numero2Passado
    } else {
        return numero3Passado
    }

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

    let resultadoAnalise = maior(numero1Recebido, numero2Recebido, numero3Recebido)

    resposta.innerHTML = `<p>O maior número é o ${resultadoAnalise}</p>`













}

//numero3Passado > numero1Passado || 
        //numero3Passado > numero2Passado ||
        //numero3Passado === numero1Passado ||
        //numero3Passado === numero2Passado