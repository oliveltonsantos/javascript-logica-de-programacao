const inputFim = document.getElementById('fim')
const inputInicio = document.getElementById('inicio')
const inputPassos = document.getElementById('passos')
const btnContar = document.querySelector('button.btnContar')
const btnRecomecar = document.querySelector('button.btnRecomecar')
const resposta = document.querySelector('div.resposta')

function contar() {
    const fim = Number(inputFim.value)
    const inicio = Number(inputInicio.value)
    const passos = Number(inputPassos.value)

    if (isNaN(fim) || isNaN(inicio) || isNaN(passos)) {
        alert('Insira valores válidos.')
        return
    }

    if (passos <= 0) {
        alert('Insira um número maior que zero.')
        inputPassos.value = ''
        inputPassos.focus()
        return
    }

    for (let f = fim; f >= inicio; f -= passos) {
        resposta.innerHTML += `${f} ➡️ `
    }
    resposta.innerHTML += 'Acabou!'

    inputFim.disabled = true
    inputInicio.disabled = true
    inputPassos.disabled = true

    btnContar.style.display = 'none'
    btnRecomecar.style.display = 'inline-block'

}


function recomecar() {
    inputFim.disabled = false
    inputInicio.disabled = false
    inputPassos.disabled = false

    inputFim.value = ''
    inputInicio.value = ''
    inputPassos.value = ''
    inputFim.focus()
    resposta.innerHTML = ''

    btnContar.style.display = 'inline-block'
    btnRecomecar.style.display = 'none'

}