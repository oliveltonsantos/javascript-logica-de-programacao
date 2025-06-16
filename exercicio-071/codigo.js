const inputNumero = document.getElementById('numero')
const mensagem = document.querySelector('div.mensagem')
const btnAdicionar = document.querySelector('button.btnAdicionar')
const btnMensagem = document.querySelector('button.btnMensagem')
const btnRecomecar = document.querySelector('button.btnRecomecar')

let listaNumeros = []

function adicionar() {
    const valorNumero = inputNumero.value

    if (valorNumero === '') {
        alert('Insira o número 999 abaixo.')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }

    const numero = Number(valorNumero)

    if (isNaN(numero) || numero != 999) {
        alert('Insira o número 999 abaixo.')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }

    listaNumeros.push(numero)

    mensagem.innerHTML = listaNumeros.map((valor, indice) => `[${indice}] - ${valor}`).join(' 👉 ')

    inputNumero.value = ''
    inputNumero.focus()

    if (listaNumeros.length === 8) {
        inputNumero.disabled = true
        btnAdicionar.style.display = 'none'
        btnRecomecar.style.display = 'inline-block'
        mensagem.innerHTML = 'Stay hungry. Stay foolish. 🤡'
        return
    }

}


function recomecar() {
    listaNumeros.length = 0

    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnAdicionar.style.display = 'inline-block'
    btnRecomecar.style.display = 'none'

    mensagem.innerHTML = ''
}