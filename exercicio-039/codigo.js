const inputNumero = document.getElementById('numero')
const resposta = document.querySelector('div.resposta')

function contar() {
    let numero = Number(inputNumero.value)

    if (isNaN(numero) || numero < 3 || numero > 10) {
        alert('Insira valores válidos.')
        return
    }

    do {
        resposta.innerHTML += `${numero} > `
        numero-- // Isso é igual a numero = numero - 1
    } while (numero >= 3)

    resposta.innerHTML += 'Acabou!'

}

function limpar() {
    inputNumero.value = ''
    resposta.innerHTML = ''
    inputNumero.focus()
}

