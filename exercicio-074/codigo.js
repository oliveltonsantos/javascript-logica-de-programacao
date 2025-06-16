const resposta = document.querySelector('div.resposta')

let listaNumeros = []

function gerar() {

    for (let contador = 0; contador < 10; contador++) {

        if (contador % 2 == 0) {
            listaNumeros.push(5)
        } else {
            listaNumeros.push(3)
        }

    }

    const respostaFormatada = listaNumeros.map((valor, indice) => `[${indice}] - ${valor}`).join(' 👉 ')

    resposta.innerHTML = respostaFormatada

}