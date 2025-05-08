const inputFinal = document.getElementById('final')
const inputInicial = document.getElementById('inicial')
const inputPassos = document.getElementById('passos')
const resposta = document.querySelector('div.resposta')

function contar() {

    // Isso evita que novas contagens sejam concatenadas com o resultado anterior
    resposta.innerHTML = ''

    let final = Number(inputFinal.value)
    const inicial = Number(inputInicial.value)
    const passos = Number(inputPassos.value)

    if (isNaN(inicial) || isNaN(final) || isNaN(passos) || inicial < 0 || final > 100) {
        alert('Insira números válidos.')
        return
    }

    if (passos <= 0) {
        alert('Insira um número maior que zero no campo "Passos".')
        return
    }

    while (final >= inicial) {
        resposta.innerHTML += `${final} > `
        final -= passos // final = final - passos
    }

    resposta.innerHTML += 'Acabou!'

}

function limpar() {
    inputFinal.value = ''
    inputInicial.value = ''
    inputPassos.value = ''
    resposta.innerHTML = ''
    inputFinal.focus()
}