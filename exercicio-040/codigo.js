const inputInicial = document.getElementById('inicial')
const inputFinal = document.getElementById('final')
const inputPassos = document.getElementById('passos')
const resposta = document.querySelector('div.resposta')

function contar() {
    // Zera o conteúdo da resposta antes de exibir o novo resultado
    resposta.innerHTML = ''

    let inicial = Number(inputInicial.value)
    let final = Number(inputFinal.value)
    const passos = Number(inputPassos.value)

    if (isNaN(inicial) || isNaN(final) || isNaN(passos)) {
        alert('Insira valores válidos.')
        return
    }

    if (passos <= 0) {
        alert('O valor dos passos deve ser maior que zero.')
        return
    }

    while (inicial <= final) {
        resposta.innerHTML += `${inicial} > `
        inicial += passos // É igual a inicial = inicial + passos
    }

    resposta.innerHTML += 'Acabou!'

}

function limpar() {
    inputInicial.value = ''
    inputFinal.value = ''
    inputPassos.value = ''
    resposta.innerHTML = ''
    inputInicial.focus()
}