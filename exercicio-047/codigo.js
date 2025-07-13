const inputFim = document.getElementById('fim')
const inputInicio = document.getElementById('inicio')
const inputPassos = document.getElementById('passos')
const resposta = document.querySelector('div.resposta')

function calcular() {

    resposta.innerHTML = ''

    let fim = Number(inputFim.value)
    const inicio = Number(inputInicio.value)
    const passos = Number(inputPassos.value)

    if (isNaN(fim) || isNaN(inicio) || isNaN(passos) || passos <= 0) {
        alert('Insira valores válidos.')
        return
    }

    let soma = 0
    let exibicao = ''

    while (fim >= inicio) {
        soma += fim
        exibicao += fim
        if (fim - passos >= inicio) {
            exibicao += ' + '
        }
        fim -= passos
    }

    resposta.innerHTML += `${exibicao} = ${soma}`
}

function limpar() {
    inputFim.value = ''
    inputInicio.value = ''
    inputPassos.value = ''
    resposta.innerHTML = ''
    inputFim.focus()
}

