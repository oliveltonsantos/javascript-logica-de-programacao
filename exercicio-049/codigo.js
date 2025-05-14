const numerosAdicionados = []
const inputNumeros = document.getElementById('numeros')

// Botão só aparece quando clicar em "Analisar"
const btnLimpar = document.querySelector('button.btnLimpar')

// Atalho: permite "Enter" para adicionar
inputNumeros.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionarNumeros()
    }
})

const resposta = document.querySelector('div.resposta')

function adicionarNumeros() {
    const valor = Number(inputNumeros.value)

    if (isNaN(valor) || inputNumeros.value === '') {
        alert('Insira números válidos.')
        inputNumeros.focus()
        return
    }

    if (numerosAdicionados.length >= 6) {
        alert('Você já adicionou os 6 números.')
        return
    }

    numerosAdicionados.push(valor)
    resposta.innerHTML = `<p>Números adicionados: ${numerosAdicionados.join(' , ')}</p>`

    inputNumeros.value = ''
    inputNumeros.focus()

}

function analisarNumeros() {

    if (numerosAdicionados.length < 6) {
        alert('Adicione primeiro os 6 números.')
        return
    }

    let numerosPares = 0
    let numerosImpares = 0

    for (let contador = 0; contador < numerosAdicionados.length; contador++) {
        if (numerosAdicionados[contador] % 2 === 0) {
            numerosPares = numerosPares + 1
        } else {
            numerosImpares = numerosImpares + 1
        }
    }

    resposta.innerHTML = `<p>Quantidade de números: ${numerosPares} pares | ${numerosImpares} ímpares</p>`

    // Torna o botão visível para o usuário
    btnLimpar.style.display = 'inline-block'

}

function limpar() {

    // Quando o usuário recomeça a adicionar novos números este botão desaparece
    btnLimpar.style.display = 'none'

    // Limpa os números do array após a contagem, permitindo que o usuário adicione uma nova sequência de números
    numerosAdicionados.length = 0

    resposta.innerHTML = ''
    inputNumeros.value = ''
    inputNumeros.focus()
}