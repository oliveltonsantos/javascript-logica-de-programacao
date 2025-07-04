const inputBorda = document.getElementById('borda')
const inputMensagem = document.getElementById('mensagem')
const inputRepeticao = document.getElementById('repeticao')
const btnMensagemGerada = document.querySelector('button.btnMensagemGerada')
const btnNovaMensagem = document.querySelector('button.btnNovaMensagem')
const resposta = document.querySelector('div.resposta')

function mensagemGerada() {
    const bordaDigitada = inputBorda.value
    let bordaRecebida = Number(bordaDigitada)

    if (bordaDigitada === '' || isNaN(bordaRecebida) || bordaRecebida != 1 && bordaRecebida != 2 && bordaRecebida != 3) {
        alert('Insira apenas o número equivalente a borda desejada.')
        inputBorda.value = ''
        inputBorda.focus()
        return
    }

    const mensagemRecebida = inputMensagem.value

    if (mensagemRecebida.trim() === '') {
        alert('Escreva uma mensagem para prosseguir.')
        inputMensagem.focus()
        return
    }

    const repeticaoDigitada = inputRepeticao.value
    const repeticaoRecebida = Number(repeticaoDigitada)

    if (repeticaoDigitada === '' || isNaN(repeticaoRecebida) || repeticaoRecebida <= 0) {
        alert('Digite uma quantidade de repetições maior que zero.')
        inputRepeticao.value = ''
        inputRepeticao.focus()
        return
    }

    // Passando parâmetros para a função
    gerador(bordaRecebida, mensagemRecebida, repeticaoRecebida)

    inputBorda.disabled = true
    inputMensagem.disabled = true
    inputRepeticao.disabled = true

    btnMensagemGerada.style.display = 'none'
    btnNovaMensagem.style.display = 'inline-block'
}

function gerador(bordaPassada, mensagemPassada, repeticaoPassada) {

    let corpoMensagem = ''

    for (let contador = 0; contador < repeticaoPassada; contador++) {
        corpoMensagem += `<p>${mensagemPassada}</p>`
    }

    let borda

    if (bordaPassada === 1) {
        borda = `+-------=======------+`
    } else if (bordaPassada === 2) {
        borda = `~~~~~~~~:::::::~~~~~~~`
    } else {
        borda = `<<<<<<<<------->>>>>>>`
    }

    resposta.innerHTML = `
         <p>${borda}</p>
        ${corpoMensagem}
        <p>${borda}</p>
    `
}

function mensagemNova() {
    inputBorda.disabled = false
    inputMensagem.disabled = false
    inputRepeticao.disabled = false
    inputBorda.value = ''
    inputMensagem.value = ''
    inputRepeticao.value = ''
    inputBorda.focus()

    btnMensagemGerada.style.display = 'inline-block'
    btnNovaMensagem.style.display = 'none'
    resposta.innerHTML = ''
}