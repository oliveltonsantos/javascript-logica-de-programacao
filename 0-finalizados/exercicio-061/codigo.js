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
        alert('Insira apenas números.')
        inputInicio.value = ''
        inputFim.value = ''
        inputPassos.value = ''
        inputInicio.focus()
        return
    }

    if (passos <= 0) {
        alert('O número "0" não é válido neste campo.')
        inputPassos.value = ''
        inputPassos.focus()
        return
    }

    do {
        resposta.innerHTML += `${inicio} > `
        inicio += passos

    } while (inicio <= fim)

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
    resposta.innerHTML = ''
    inputInicio.focus()

    btnContar.style.display = 'inline-block'
    btnRecomecar.style.display = 'none'

}



