function jogar() {
    const jogadorHumano = document.querySelector('input[name="jogador"]:checked')

    if (!jogadorHumano) {
        alert('Escolha sua jogada!')
        return
    }

    const jogadas = ['Pedra', 'Papel', 'Tesoura']
    const jogadorIA = jogadas[Math.floor(Math.random() * jogadas.length)]
    const escolhaHumano = jogadorHumano.value // certifique-se de definir value="Pedra", etc., no HTML

    let resultado = ''

    if (escolhaHumano === jogadorIA) {
        resultado = 'Empate! Tente de novo.'
    } else if (
        (escolhaHumano === 'Pedra' && jogadorIA === 'Tesoura') ||
        (escolhaHumano === 'Tesoura' && jogadorIA === 'Papel') ||
        (escolhaHumano === 'Papel' && jogadorIA === 'Pedra')
    ) {
        resultado = 'Você GANHOU!'
    } else {
        resultado = 'Você PERDEU!'
    }

    resposta.innerHTML = `<p>${resultado}</p>
                          <p>A IA jogou <strong>${jogadorIA}</strong></p>`

}

// Toda vez que um input radio for selecionado a resposta some

const radios = document.querySelectorAll('input[name="jogador"]')

const resposta = document.querySelector('div.resposta')

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        resposta.innerHTML = ''
    })
})

