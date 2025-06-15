const resposta = document.querySelector('div.resposta')

const listaNumeros = []

function gerador() {

    listaNumeros.length = 0 // Limpa o array antes de começar

    const inicio = 0

    for (let fim = 9; fim >= inicio; fim--) {
        listaNumeros.push(fim)
    }

    resposta.innerHTML = `Lista de números: ${listaNumeros.join(' | ')}`

}