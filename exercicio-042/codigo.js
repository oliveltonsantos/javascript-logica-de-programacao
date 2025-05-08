const inputNumero = document.getElementById('numero')
const resposta = document.querySelector('div.resposta')

function contar() {

    // Isso evita que novas contagens sejam concatenadas com o resultado anterior
    resposta.innerHTML = ''

    let numeroEscolhido = Number(inputNumero.value)

    if (isNaN(numeroEscolhido) || numeroEscolhido <= 0) {
        alert('Insira um número maior que zero.')
        return
    }

    let numeroInicial = 1

    do {
        resposta.innerHTML += `${numeroInicial} > `
        numeroInicial++ // é igual a numeroInicial = numeroInicial + 1
    } while (numeroInicial <= numeroEscolhido)

    resposta.innerHTML += 'Acabou!'
}

function limpar() {
    inputNumero.value = ''
    resposta.innerHTML = ''
    inputNumero.focus()
}