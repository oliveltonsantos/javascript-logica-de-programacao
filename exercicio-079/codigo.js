const inputNumero = document.getElementById('numero')

// Atalho para inserir números com a tecla "ENTER"
inputNumero.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionar()
    }
})


const btnAdicionar = document.querySelector('button.btnAdicionar')
const btnRecomecar = document.querySelector('button.btnRecomecar')
const resposta = document.querySelector('div.resposta')

let listaNumeros = []

function adicionar() {

    const numeroDigitado = inputNumero.value
    const numero = Number(numeroDigitado)

    if (numeroDigitado === '' || isNaN(numero)) {
        alert('Insira um número válido.')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }

    listaNumeros.push(numero)

    resposta.innerHTML = `<p>Quantidade de números adicionados: ${listaNumeros.length}</p>`

    if (listaNumeros.length > 9) {

        resposta.innerHTML += `<p>Números adicionados: ${listaNumeros.join(' | ')}</p>`

        const numerosPares = listaNumeros
            .map((valor, indice) => ({ indice, valor }))
            .filter(item => item.valor % 2 === 0)
            .map(item => `[${item.indice}] - ${item.valor}`)
            .join(' 👉 ')

        if (numerosPares.length === 0) {
            resposta.innerHTML += 'Não foi encontrado nenhum número par.'
        } else {
            resposta.innerHTML += `<p>Números pares: ${numerosPares}</p>`
        }

        inputNumero.disabled = true
        btnAdicionar.style.display = 'none'
        btnRecomecar.style.display = 'inline-block'

    }

    inputNumero.value = ''
    inputNumero.focus()

}


function recomecar() {
    listaNumeros.length = 0

    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnAdicionar.style.display = 'inline-block'
    btnRecomecar.style.display = 'none'

    resposta.innerHTML = ''

}