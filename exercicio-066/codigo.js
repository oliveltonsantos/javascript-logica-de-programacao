const inputNumero = document.getElementById('numero')
const btnCalcular = document.querySelector('button.btnCalcular')
const btnRecomecar = document.querySelector('button.btnRecomecar')
const resposta = document.querySelector('div.resposta')


function calcular() {
    const numero = Number(inputNumero.value)

    if (isNaN(numero)) {
        alert('Insira um número válido.')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }

    for (let i = 1; i <= 10; i++) {
        const multiplicacao = numero * i
        resposta.innerHTML += `<p>${numero} x ${i} = ${multiplicacao}</p>`
    }

    inputNumero.disabled = true
    btnCalcular.style.display = 'none'
    btnRecomecar.style.display = 'inline-block'
}


function recomecar() {
    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnCalcular.style.display = 'inline-block'
    btnRecomecar.style.display = 'none'

    resposta.innerHTML = ''
}