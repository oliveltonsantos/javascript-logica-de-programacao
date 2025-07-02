const inputMensagem = document.getElementById('mensagem')
const btnAtivarMensagem = document.querySelector('button.btnAtivarMensagem')
const btnNovaMensagem = document.querySelector('button.btnNovaMensagem')
const resposta = document.querySelector('div.resposta')

function gerador(mensagem) {
    resposta.innerHTML =
        `
        <p>+-------=======------+</p>
                ${mensagem}
        <p>+-------=======------+</p>
    `
}

function ativarMensagem() {
    const mensagemDigitada = inputMensagem.value

    if (mensagemDigitada.trim() === '') {
        alert('Digite primeiro uma mensagem.')
        inputMensagem.focus()
        return
    }

    gerador(mensagemDigitada)

    inputMensagem.disabled = true
    btnAtivarMensagem.style.display = 'none'
    btnNovaMensagem.style.display = 'inline-block'

}

function novaMensagem() {
    inputMensagem.disabled = false
    inputMensagem.value = ''
    inputMensagem.focus()

    btnAtivarMensagem.style.display = 'inline-block'
    btnNovaMensagem.style.display = 'none'
    resposta.innerHTML = ''
}
