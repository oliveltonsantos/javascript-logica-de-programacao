const inputMensagem = document.getElementById('mensagem')
const inputQuantidade = document.getElementById('quantidade')
const btnMensagemGerada = document.querySelector('button.btnMensagemGerada')
const btnNovaMensagem = document.querySelector('button.btnNovaMensagem')
const resposta = document.querySelector('div.resposta')

function MensagemGerada() {
    const mensagemDigitada = inputMensagem.value

    if (mensagemDigitada.trim() === '') {
        alert('Digite sua mensagem primeiro.')
        inputMensagem.value = ''
        inputMensagem.focus()
        return
    }

    const quantidadeDigitada = inputQuantidade.value
    const quantidade = Number(quantidadeDigitada)

    if (quantidadeDigitada === '' || isNaN(quantidade) || quantidade <= 0) {
        alert('Digite um valor maior que zero.')
        inputQuantidade.value = ''
        inputQuantidade.focus()
        return
    }

    // Passando a mensagem digitada e a quantidade de vezes para a função "gerador()"
    gerador(mensagemDigitada, quantidade)

    inputMensagem.disabled = true
    inputQuantidade.disabled = true

    btnMensagemGerada.style.display = 'none'
    btnNovaMensagem.style.display = 'inline-block'

}

function gerador(mensagem, quantidade) {

    resposta.innerHTML += `<p>+-------=======------+</p>`

    for (let contador = 0; contador < quantidade; contador++) {
        resposta.innerHTML += `<p>${mensagem}</p>`
    }

    resposta.innerHTML += `<p>+-------=======------+</p>`
}

function novaMensagem() {
    inputMensagem.disabled = false
    inputQuantidade.disabled = false
    inputMensagem.value = ''
    inputQuantidade.value = ''
    inputMensagem.focus()

    btnMensagemGerada.style.display = 'inline-block'
    btnNovaMensagem.style.display = 'none'
    resposta.innerHTML = ''
}