function adivinhar() {
    const jogador = Number(document.getElementById('jogador').value)
    const resposta = document.querySelector('div.resposta')

    if (isNaN(jogador) || jogador < 1 || jogador > 5) {
        alert('Digite um número entre 1 e 5.')
        return
    }

    let numeros = [1, 2, 3, 4, 5]

    let sorteio = numeros[Math.floor(Math.random() * numeros.length)]

    let resultado = ''

    if (jogador === sorteio) {
        resultado = `Você acertou! A IA escolheu: ${sorteio}`
    } else {
        resultado = `Você não acertou. A IA escolheu: ${sorteio}`
    }

    resposta.innerHTML = `<p>${resultado}</p>`
}

function jogarNovamente() {
    const jogador = document.getElementById('jogador')
    const resposta = document.querySelector('div.resposta')

    jogador.value = ''
    jogador.focus()
    resposta.innerHTML = ''

}

