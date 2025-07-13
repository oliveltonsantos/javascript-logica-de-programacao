const inputNumero = document.getElementById('numero')

// Quando o "ENTER" é pressionado ele adiciona um número
inputNumero.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionar()
    }
})

const btnAdicionar = document.querySelector('button.btnAdicionar')
const btnAnalisar = document.querySelector('button.btnAnalisar')
const btnCadastrar = document.querySelector('button.btnCadastrar')
const resposta = document.querySelector('div.resposta')

// Array que armazena os números
let listaNumeros = []

function adicionar() {
    const numero = Number(inputNumero.value)

    if (isNaN(numero)) {
        alert('Insira um número válido.')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }

    // Adiciona os números no final do array
    listaNumeros.push(numero)

    resposta.innerHTML = `<p>Números adicionados: ${listaNumeros.join(' | ')}</p>`

    inputNumero.value = ''
    inputNumero.focus()

}


function analisar() {

    let contador = 0
    let soma = 0
    let menorNumero = listaNumeros[0]
    let numerosPares = 0

    do {
        soma += listaNumeros[contador]

        if (listaNumeros[contador] < menorNumero) {
            menorNumero = listaNumeros[contador]
        }

        if (listaNumeros[contador] % 2 == 0) {
            numerosPares++
        }

        contador++
    } while (contador < listaNumeros.length)

    const media = soma / listaNumeros.length

    resposta.innerHTML += `
        <h2>Resultado da análise:</h2>
        <p>Soma das idades: ${soma}</p>
        <p>Menor valor: ${menorNumero}</p>
        <p>Média: ${media.toFixed(1)}</p>
        <p>Números pares: ${numerosPares}</p>
    `

    inputNumero.disabled = true

    btnAdicionar.style.display = 'none'
    btnAnalisar.style.display = 'none'
    btnCadastrar.style.display = 'inline-block'
}


function cadastrar() {
    // Limpa os números do array
    listaNumeros.length = 0

    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnAdicionar.style.display = 'inline-block'
    btnAnalisar.style.display = 'inline-block'
    btnCadastrar.style.display = 'none'

    resposta.innerHTML = ''

}