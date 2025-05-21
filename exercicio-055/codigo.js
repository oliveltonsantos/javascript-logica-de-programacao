const inputNumero = document.getElementById('numero')

// Atalho para adicionar valores apertando o "ENTER"
inputNumero.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        jogar()
    }
})

const btnJogar = document.querySelector('button.btnJogar')
const btnRecomecar = document.querySelector('button.btnRecomecar')
const resposta = document.querySelector('div.resposta')

// Array que vai receber os números do usuário
let tentativasJogador = []

let numeroSecreto = sortearNumero()


// Sorteia um número de 1 a 10
function sortearNumero() {
    return Math.floor(Math.random() * 10) + 1
}


function jogar() {
    const jogador = Number(inputNumero.value)

    if (isNaN(jogador) || jogador <= 0 || jogador > 10) {
        alert('Insira números válidos entre 1 e 10.')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }

    // Adiciona os números digitados pelo usuário no final do array "tentativasJogador = []"
    tentativasJogador.push(jogador)

    resposta.innerHTML = `<p>Tentativas: ${tentativasJogador.join(' , ')}</p>
                          <p>-----------------------------------------------------</p>`

    if (jogador === numeroSecreto) {
        resposta.innerHTML += `<p>✅ Você acertou o número ${numeroSecreto}!</p>`
        btnJogar.style.display = 'none' // Esconde o botão "Jogar"
        btnRecomecar.style.display = 'inline-block' // Mostra o botão "Recomeçar"
        inputNumero.disabled = true // Desabilita o campo para inserir o número
        return
    }

    if (tentativasJogador.length >= 4) {
        resposta.innerHTML += `<p>❌ Suas tentativas acabaram. O número era ${numeroSecreto}.</p>`
        btnJogar.style.display = 'none'
        btnRecomecar.style.display = 'inline-block'
        inputNumero.disabled = true
    } else {
        resposta.innerHTML += `<p>Tente de novo!</p>`
    }

    inputNumero.value = ''
    inputNumero.focus()
}

function recomecar() {
    tentativasJogador.length = 0 // Limpa o array que armazena os números digitados pelo usuário
    numeroSecreto = sortearNumero() // Sorteia um novo número secreto para reiniciar o jogo
    resposta.innerHTML = ''
    inputNumero.value = ''
    inputNumero.disabled = false // Habilita o campo para inserir o número
    inputNumero.focus()
    btnJogar.style.display = 'inline-block' // Mostra o botão "Jogar"
    btnRecomecar.style.display = 'none' // Esconde o botão "Recomeçar"
}
