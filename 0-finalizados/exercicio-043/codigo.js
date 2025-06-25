const inputFinal = document.getElementById('final')
const inputInicial = document.getElementById('inicial')
const resposta = document.querySelector('div.resposta')

function contar() {

    // Evita acumular novas respostas caso o usuário mude os valores
    resposta.innerHTML = ''

    let numeroFinal = Number(inputFinal.value)
    let numeroInicial = Number(inputInicial.value)

    if (isNaN(numeroFinal) || isNaN(numeroFinal) || numeroFinal > 30 || numeroInicial <= 0) {
        alert('Insira um número válido.')
        return
    }


    while (numeroFinal >= numeroInicial) {
        if (numeroFinal % 4 == 0) {
            resposta.innerHTML += `[${numeroFinal}] > `
            numeroFinal-- // isso é igual a numeroFinal = numeroFinal - 1
        } else {
            resposta.innerHTML += `${numeroFinal} > `
            numeroFinal--
        }
    }

    resposta.innerHTML += 'Acabou!'
}

function limpar() {
    inputFinal.value = ''
    inputInicial.value = ''
    resposta.innerHTML = ''
    inputFinal.focus()
}


