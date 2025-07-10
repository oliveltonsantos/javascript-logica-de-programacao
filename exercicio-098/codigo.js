const inputNumero1 = document.getElementById('numero1')
const inputNumero2 = document.getElementById('numero2')
const btnResultado = document.querySelector('button.btnResultado')
const btnNovaSoma = document.querySelector('button.btnNovaSoma')
const resposta = document.querySelector('div.resposta')

function superSomador(numero1Passado, numero2Passado) {

    // Garante que o número1 seja sempre o menor
    if (numero1Passado > numero2Passado) {
        let troca = numero1Passado
        numero1Passado = numero2Passado
        numero2Passado = troca
    }

    const listaNumeros = []

    let somaTotal = 0

    for (let contador = numero1Passado; contador <= numero2Passado; contador++) {
        listaNumeros.push(contador)
        somaTotal += contador
    }

    return `
        <p>Sequência: ${listaNumeros.join(' > ')} > FIM!</p>
        <p>Soma dos valores: ${somaTotal}</p>
    `
}

function resultado() {
    const numero1Digitado = inputNumero1.value
    const numero1Convertido = Number(numero1Digitado)

    if (numero1Digitado === '' || isNaN(numero1Convertido)) {
        alert('Digite um número válido.')
        inputNumero1.value = ''
        inputNumero1.focus()
        return
    }

    const numero2Digitado = inputNumero2.value
    const numero2Convertido = Number(numero2Digitado)

    if (numero2Digitado === '' || isNaN(numero2Convertido)) {
        alert('Digite um número válido.')
        inputNumero2.value = ''
        inputNumero2.focus()
        return
    }

    const resultadoRecebido = superSomador(numero1Convertido, numero2Convertido)

    resposta.innerHTML = resultadoRecebido

    inputNumero1.disabled = true
    inputNumero2.disabled = true

    btnResultado.style.display = 'none'
    btnNovaSoma.style.display = 'inline-block'

}

function novaSoma() {
    inputNumero1.disabled = false
    inputNumero2.disabled = false
    inputNumero1.value = ''
    inputNumero2.value = ''
    inputNumero1.focus()

    btnResultado.style.display = 'inline-block'
    btnNovaSoma.style.display = 'none'

    resposta.innerHTML = ''
}


