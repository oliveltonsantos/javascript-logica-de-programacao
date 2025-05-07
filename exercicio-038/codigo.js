const inputNumero = document.getElementById('numero')
const resposta = document.querySelector('div.resposta')


function contar() {
    let numero = Number(inputNumero.value)

    if (isNaN(numero) || numero < 6 || numero > 11) {
        alert('Insira valores válidos.')
        return
    }

    while (numero <= 11) {
        resposta.innerHTML += `${numero} > `
        numero++
    }

    resposta.innerHTML += 'Fim da contagem!'
}

function limpar() {
    inputNumero.value = ''
    resposta.innerHTML = ''
    inputNumero.focus()
}