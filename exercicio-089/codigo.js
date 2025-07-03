const inputBorda = document.getElementById('borda')
const inputMensagem = document.getElementById('mensagem')
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


    gerador(bordaRecebida, mensagemRecebida)

}


function gerador(bordaPassada, mensagemPassada) {

    if (bordaPassada === 1) {
        resposta.innerHTML = `
            <p>+-------=======------+</p>
                ${mensagemPassada}
            <p>+-------=======------+</p>
        `
    } else if (bordaPassada === 2) {
        resposta.innerHTML = `
            <p>~~~~~~~~:::::::~~~~~~~</p>
                ${mensagemPassada}
            <p>~~~~~~~~:::::::~~~~~~~</p>
        `
    } else {
        resposta.innerHTML = `
            <p><<<<<<<<------->>>>>>></p>
                ${mensagemPassada}
            <p><<<<<<<<------->>>>>>>/p>
        `
    }

}