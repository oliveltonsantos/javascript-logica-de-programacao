const inputNumero = document.getElementById('numero')
const btnVerificar = document.querySelector('button.btnVerificar')
const btnRecomecar = document.querySelector('button.btnRecomecar')
const resposta = document.querySelector('div.resposta')

let listaNumeros = []

function verificar() {

    const numeroDigitado = inputNumero.value
    let numeroConvertido = Number(numeroDigitado)

    if (numeroDigitado === '' || isNaN(numeroConvertido)) {
        alert('Insira um número válido.')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }

    let exibicao = ''

    for (contador = 0; contador < 30; contador++) {
        let sorteio = Math.floor(Math.random() * 15) + 1
        listaNumeros.push(sorteio)
    }

    exibicao += `<p>Números sorteados: ${listaNumeros.join(' | ')}</p>`

    const numeroChave = listaNumeros
        .map((valor, indice) => ({ indice, valor }))
        .filter(item => item.valor === numeroConvertido)
        .map(item => `[${item.indice}]`)
        .join(' 👉 ')

    if (numeroChave.length === 0) {
        exibicao += '<p>O número não foi encontrado em nenhuma posição.</p>'
    } else {
        exibicao += `<p>Posições: ${numeroChave}</p>`
    }

    let numeroChaveQuantidade = 0

    for (contador = 0; contador < listaNumeros.length; contador++) {
        if (listaNumeros[contador] === numeroConvertido) {
            numeroChaveQuantidade += 1
        }
    }

    exibicao += `<p>Número ${numeroConvertido} encontrado ${numeroChaveQuantidade} vez(es).</p>`

    resposta.innerHTML = `<p>${exibicao}</p>`

    inputNumero.disabled = true

    btnVerificar.style.display = 'none'
    btnRecomecar.style.display = 'inline-block'

}


function recomecar() {
    listaNumeros.length = 0

    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnVerificar.style.display = 'inline-block'
    btnRecomecar.style.display = 'none'

    resposta.innerHTML = ''

}