const inputTermos = document.getElementById('termos')
const btnGerarSequencia = document.querySelector('button.btnGerarSequencia')
const btnNovaSequencia = document.querySelector('button.btnNovaSequencia')
const resposta = document.querySelector('div.resposta')

function gerarSequencia() {
    const termosDigitado = inputTermos.value
    const termoRecebido = Number(termosDigitado)

    if (termosDigitado === '' || isNaN(termoRecebido) || termoRecebido <= 0) {
        alert('Digite um valor maior que zero.')
        inputTermos.value = ''
        inputTermos.focus()
        return
    }

    inputTermos.disabled = true
    btnGerarSequencia.style.display = 'none'
    btnNovaSequencia.style.display = 'inline-block'

    fibonacci(termoRecebido)
}

function fibonacci(termoPassado) {

    const sequenciaFibonacci = []

    if (termoPassado >= 1) sequenciaFibonacci.push(1)
    if (termoPassado >= 2) sequenciaFibonacci.push(1)

    let termo1 = 1
    let termo2 = 1

    for (contador = 3; contador <= termoPassado; contador++) {

        const termo3 = termo1 + termo2
        termo1 = termo2
        termo2 = termo3

        sequenciaFibonacci.push(termo3)
    }

    resposta.innerHTML += `<p>Lista: ${sequenciaFibonacci.join(' >> ')} >> FIM</p>`

}

function novaSequencia() {

    inputTermos.disabled = false
    inputTermos.value = ''
    inputTermos.focus()

    btnGerarSequencia.style.display = 'inline-block'
    btnNovaSequencia.style.display = 'none'
    resposta.innerHTML = ''
}