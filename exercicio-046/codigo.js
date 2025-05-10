const inputInicio = document.getElementById('inicio')
const inputFim = document.getElementById('fim')
const inputPassos = document.getElementById('passos')
const resposta = document.querySelector('div.resposta')

function calcular() {
    let inicio = Number(inputInicio.value)
    let fim = Number(inputFim.value)
    let passos = Number(inputPassos.value)

    if (isNaN(inicio) || isNaN(fim) || isNaN(passos) || passos <= 0) {
        alert('Insira valores válidos.')
    }

    let soma = 0
    let exibicao = ''

    while (inicio <= fim) {
        soma += inicio // soma = soma + inicio => soma o número atual
        exibicao += inicio // exibicao = exibicao + inicio
        if (inicio + passos <= fim) {
            exibicao += ' + ' // exibicao = exibicao + ' + '
        }
        inicio += passos // inicio = inicio + passos => vai para o próximo número
    }

    resposta.innerHTML += `<p>${exibicao} = ${soma}</p>`

}

console.log('Olá!')

