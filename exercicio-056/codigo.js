const inputNumeros = document.getElementById('numeros')

// Atalho para adicionar valores apertando o "ENTER"
inputNumeros.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        adicionar()
    }
})

const btnAdicionar = document.querySelector('button.btnAdicionar')
const btnRecomecar = document.querySelector('button.btnRecomecar')
const resposta = document.querySelector('div.resposta')

// Array que guarda os números inseridos pelo usuário
let numerosAdicionados = []

let soma = 0
let parar = false // Variável para sinalizar FLAG

function adicionar() {
    const numeros = Number(inputNumeros.value)

    if (isNaN(numeros) || numeros == '') {
        alert('Insira um número válido.')
        inputNumeros.focus()
        return
    }

    if (numeros === 1111) {
        parar = true
    }

    // O "!parar" significa "se ainda não é hora de parar” ou pode usar também "parar === false"
    if (!parar) {
        numerosAdicionados.push(numeros)
        soma = soma + numeros
        resposta.innerHTML = `<p>Números adicionados: ${numerosAdicionados.join(' , ')}</p>`
    } else {
        resposta.innerHTML += `Soma total: ${soma}`
        inputNumeros.disabled = true // Desabilita o campo para inserir o número
        btnAdicionar.style.display = 'none'
        btnRecomecar.style.display = 'inline-block'
    }

    inputNumeros.value = ''
    inputNumeros.focus()

}


function recomecar() {
    numerosAdicionados.length = 0 // Limpa o array que armazena os números digitados pelo usuário
    soma = 0
    parar = false
    inputNumeros.disabled = false
    inputNumeros.focus()
    resposta.innerHTML = ''
    btnAdicionar.style.display = 'inline-block'
    btnRecomecar.style.display = 'none'
}