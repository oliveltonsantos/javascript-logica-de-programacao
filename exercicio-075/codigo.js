const inputQuantidade = document.getElementById('quantidade')
const btnRecomecar = document.querySelector('button.btnRecomecar')
const resposta = document.querySelector('div.resposta')

let listaNumeros = []

function gerar() {

    const quantidade = Number(inputQuantidade.value)

    if (isNaN(quantidade)) {
        alert('Insira um valor válido.')
        inputQuantidade.value = ''
        inputQuantidade.focus()
        return
    }

    if (quantidade <= 0) {
        alert('Insira uma quantidade maior que zero.')
        inputQuantidade.value = ''
        inputQuantidade.focus()
        return
    }

    for (contador = 0; contador < quantidade; contador++) {

        if (contador === 0 || contador === 1) {
            listaNumeros.push(1)
        } else {
            // o último número da lista até agora
            const ultimo = listaNumeros[contador - 1]
            // o número que veio antes do último
            const penultimo = listaNumeros[contador - 2]
            listaNumeros.push(ultimo + penultimo)
        }

    }

    const respostaFormatada = listaNumeros.map((valor, indice) => `[${indice}] - ${valor}`).join(' 👉 ')

    resposta.innerHTML = respostaFormatada

    btnRecomecar.style.display = 'inline-block'

}


function recomecar() {
    listaNumeros.length = 0
    inputQuantidade.value = ''
    inputQuantidade.focus()
    btnRecomecar.style.display = 'none'
    resposta.innerHTML = ''
}