const resposta = document.querySelector('div.resposta')

let listaNumeros = []

function gerar() {

    listaNumeros.length = 0 // Limpa o array antes de começar

    let inicio = 5
    let fim = 50

    while (inicio <= fim) {
        listaNumeros.push(inicio)
        inicio += 5
    }

    const respostaFormatada = listaNumeros.map((valor, indice) => `[${indice}] - ${valor}`).join(' 👉 ')

    resposta.innerHTML = respostaFormatada

}




