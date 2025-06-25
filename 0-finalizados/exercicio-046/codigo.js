const inputInicio = document.getElementById('inicio')
const inputFim = document.getElementById('fim')
const inputPassos = document.getElementById('passos')
const resposta = document.querySelector('div.resposta')

function calcular() {

    resposta.innerHTML = '' // Limpa a resposta, evitando que várias respostas se acumulem

    let inicio = Number(inputInicio.value)
    const fim = Number(inputFim.value)
    const passos = Number(inputPassos.value)

    if (isNaN(inicio) || isNaN(fim) || isNaN(passos) || passos <= 0) {
        alert('Insira valores válidos.')
    }

    let soma = 0
    let exibicao = ''

    while (inicio <= fim) {
        soma += inicio // Adiciona o valor atual de "inicio" à variável "soma", acumulando a soma dos números.
        exibicao += inicio // Adiciona o número atual à string que vai mostrar a conta, por exemplo: 1 + 3 + 5 + ...

        // Só adiciona o sinal de "+" se "inicio + passos" ainda for menor ou igual ao "fim".
        if (inicio + passos <= fim) {
            exibicao += ' + '
        }
        inicio += passos // Aumenta o número atual
    }

    resposta.innerHTML += `<p>${exibicao} = ${soma}</p>`

}

function limpar() {
    inputInicio.value = ''
    inputFim.value = ''
    inputPassos.value = ''
    resposta.innerHTML = ''
    inputInicio.focus()
}

