const inputInicio = document.getElementById('inicio')
const inputFim = document.getElementById('fim')
const inputPassos = document.getElementById('passos')
const btnContar = document.querySelector('button.btnContar')
const btnRecomecar = document.querySelector('button.btnRecomecar')
const resposta = document.querySelector('div.resposta')


function contar() {
    let inicio = Number(inputInicio.value)
    const fim = Number(inputFim.value)
    const passos = Number(inputPassos.value)

    if (isNaN(inicio) || isNaN(fim) || isNaN(passos)) {
        alert('Insira um número válido.')
        return
    }

    if (passos <= 0) {
        alert('Insira um valor maior que zero em "Passos".')
        inputPassos.value = ''
        inputPassos.focus()
        return
    }

    for (let i = inicio; i <= fim; i += passos) {
        resposta.innerHTML += `${i} > `
    }

    resposta.innerHTML += 'Acabou!'

    inputInicio.disabled = true
    inputFim.disabled = true
    inputPassos.disabled = true

    btnContar.style.display = 'none'
    btnRecomecar.style.display = 'inline-block'

}


function recomecar() {

    inputInicio.disabled = false
    inputFim.disabled = false
    inputPassos.disabled = false

    inputInicio.value = ''
    inputFim.value = ''
    inputPassos.value = ''
    inputInicio.focus()
    resposta.innerHTML = ''

    btnContar.style.display = 'inline-block'
    btnRecomecar.style.display = 'none'
}

