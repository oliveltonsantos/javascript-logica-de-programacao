const inputInicio = document.getElementById('inicio')
const inputFim = document.getElementById('fim')
const inputPassos = document.getElementById('passos')
const resposta = document.querySelector('div.resposta')

function contar() {

    // Limpa a resposta anterior caso o usuário clique no botão contar novamente
    resposta.innerHTML = ''

    let inicio = Number(inputInicio.value)
    const fim = Number(inputFim.value)
    const passos = Number(inputPassos.value)

    if (isNaN(inicio) || isNaN(fim) || isNaN(passos)
        || inicio <= 0 || fim <= 0 || passos <= 0) {
        alert('Insira valores válidos.')
        return
    }

    while (inicio <= fim) {
        resposta.innerHTML += `${inicio} > `
        inicio += passos // é igual a inicio = inicio + passos
    }

    resposta.innerHTML += "Acabou!"

}

function limpar() {
    inputInicio.value = ''
    inputFim.value = ''
    inputPassos.value = ''
    resposta.innerHTML = ''
    inputInicio.focus()
}

