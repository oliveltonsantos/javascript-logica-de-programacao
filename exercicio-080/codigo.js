const inputNumero = document.getElementById('numero')
const resposta = document.querySelector('div.resposta')

let listaNumeros = []
let respostaFormatada

function verificar() {

    const numeroDigitado = inputNumero.value
    let numero = Number(numeroDigitado)

    for (contador = 0; contador < 30; contador++) {
        let sorteio = Math.floor(Math.random() * 15) + 1

        listaNumeros.push(sorteio)

        if (listaNumeros[contador] === numero) {
            respostaFormatada = `${contador} - ${listaNumeros[contador]}`
        }

    }

    resposta.innerHTML += `<p>Números sorteados: ${listaNumeros.join(' | ')}</p>
                        <p>Número encontrada nas posições: ${respostaFormatada}</p>

`

}