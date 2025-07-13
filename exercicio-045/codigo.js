const inputInicio = document.getElementById('inicio')
const inputFim = document.getElementById('fim')
const inputPassos = document.getElementById('passos')
const resposta = document.querySelector('div.resposta')

function contar() {

    // Limpa a resposta anterior caso o usuário clique apenas em "Contar"
    resposta.innerHTML = ''

    let inicio = Number(inputInicio.value)
    const fim = Number(inputFim.value)
    const passos = Number(inputPassos.value)

    if (
        isNaN(inicio) || isNaN(fim) || isNaN(passos) || passos <= 0) {
        alert('Insira um valor válido.')
        return
    }

    if (inicio < fim) {
        while (inicio <= fim) {
            resposta.innerHTML += `${inicio} > `
            inicio += passos // inicio = inicio + passos
        }
    } else {
        while (inicio >= fim) {
            resposta.innerHTML += `${inicio} > `
            inicio -= passos // inicio = inicio - passos
        }
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



