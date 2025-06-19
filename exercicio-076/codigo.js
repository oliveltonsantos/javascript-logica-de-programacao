const resposta = document.querySelector('div.resposta')

let listaNumeros = []


function sortearNumeros() {
    return Math.floor(Math.random() * 100) + 1
}


function gerar() {

    listaNumeros.length = 0

    for (let contador = 0; contador < 7; contador++) {
        let numero = sortearNumeros()
        listaNumeros.push(numero)
    }

    const respostaFormatada = listaNumeros
        .map((valor, indice) => `<p>[${indice}] - ${valor}</p>`)
        .join('')

    resposta.innerHTML = respostaFormatada

}