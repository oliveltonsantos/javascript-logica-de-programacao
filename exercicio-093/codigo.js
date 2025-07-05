const inputInicial = document.getElementById('inicial')
const inputFinal = document.getElementById('final')
const inputPasso = document.getElementById('passo')
const btnContar = document.querySelector('button.btnContar')
const btnNovaContagem = document.querySelector('button.btnNovaContagem')
const resposta = document.querySelector('div.resposta')

function iniciarContagem() {
    const inicialDigitado = inputInicial.value
    const inicialRecebido = Number(inicialDigitado)

    if (inicialDigitado === '' || isNaN(inicialRecebido)) {
        alert('Digite um valor válido.')
        inputInicial.value = ''
        inputInicial.focus()
        return
    }

    const finalDigitado = inputFinal.value
    const finalRecebido = Number(finalDigitado)

    if (finalDigitado === '' || isNaN(finalRecebido)) {
        alert('Digite um valor válido.')
        inputFinal.value = ''
        inputFinal.focus()
        return
    }

    const passoDigitado = inputPasso.value
    const passoRecebido = Number(passoDigitado)

    if (passoDigitado === '' || isNaN(passoRecebido) || passoRecebido <= 0) {
        alert('Digite um valor maior que zero.')
        inputPasso.value = ''
        inputPasso.focus()
        return
    }

    inputInicial.disabled = true
    inputFinal.disabled = true
    inputPasso.disabled = true

    btnContar.style.display = 'none'
    btnNovaContagem.style.display = 'inline-block'

    contador(inicialRecebido, finalRecebido, passoRecebido)

}

function contador(inicialPassado, finalPassado, passoPassado) {

    let listaNumeros = []

    for (let i = inicialPassado; i <= finalPassado; i += passoPassado) {
        listaNumeros.push(i)
    }

    resposta.innerHTML += `<p>Lista: ${listaNumeros.join(' >> ')} >> FIM</p>`
}

function novaContagem() {
    inputInicial.disabled = false
    inputFinal.disabled = false
    inputPasso.disabled = false
    inputInicial.value = ''
    inputFinal.value = ''
    inputPasso.value = ''
    inputInicial.focus()

    btnContar.style.display = 'inline-block'
    btnNovaContagem.style.display = 'none'
    resposta.innerHTML = ''

}
