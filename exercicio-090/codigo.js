const inputValor1 = document.getElementById('valor1')
const inputValor2 = document.getElementById('valor2')
const btnResultado = document.querySelector('button.btnResultado')
const btnNovaSoma = document.querySelector('button.btnNovaSoma')
const resposta = document.querySelector('div.resposta')

function resultado() {
    const valor1Recebido = inputValor1.value
    const valor2Recebido = inputValor2.value
    const valor1 = Number(valor1Recebido)
    const valor2 = Number(valor2Recebido)

    if (valor1Recebido === '' || valor2Recebido === '' || isNaN(valor1) || isNaN(valor2)) {
        alert('Insira um valor válido nos campos abaixo.')
        inputValor1.value = ''
        inputValor2.value = ''
        inputValor1.focus()
        inputValor1.focus()
        return
    }

    somador(valor1, valor2)

    inputValor1.disabled = true
    inputValor2.disabled = true

    btnResultado.style.display = 'none'
    btnNovaSoma.style.display = 'inline-block'

}

function somador(valor1Passado, valor2Passado) {
    const soma = valor1Passado + valor2Passado
    resposta.innerHTML = `<p>A soma de ${valor1Passado} + ${valor2Passado} = ${soma}</p>`
}

function novaSoma() {
    inputValor1.disabled = false
    inputValor2.disabled = false
    inputValor1.value = ''
    inputValor2.value = ''
    inputValor1.focus()

    btnResultado.style.display = 'inline-block'
    btnNovaSoma.style.display = 'none'

    resposta.innerHTML = ''
}