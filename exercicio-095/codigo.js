const inputValor1 = document.getElementById('valor1')
const inputValor2 = document.getElementById('valor2')
const btnSomador = document.querySelector('button.btnSomador')
const btnNovaSoma = document.querySelector('button.btnNovaSoma')
const resposta = document.querySelector('div.resposta')

function somador(valor1, valor2) {
    return valor1 + valor2
}

function resultado() {
    const valor1Digitado = inputValor1.value
    const valor1Recebido = Number(valor1Digitado)

    if (valor1Digitado === '' || isNaN(valor1Recebido)) {
        alert('Insira um valor válido.')
        inputValor1.value = ''
        inputValor1.focus()
        return
    }

    const valor2Digitado = inputValor2.value
    const valor2Recebido = Number(valor2Digitado)

    if (valor2Digitado === '' || isNaN(valor2Recebido)) {
        alert('Insira um valor válido.')
        inputValor2.value = ''
        inputValor2.focus()
        return
    }

    const resultadoSoma = somador(valor1Recebido, valor2Recebido)

    resposta.innerHTML = `<p>A soma de ${valor1Recebido} + ${valor2Recebido} = ${resultadoSoma}</p>`

    inputValor1.disabled = true
    inputValor2.disabled = true
    btnSomador.style.display = 'none'
    btnNovaSoma.style.display = 'inline-block'

}

function novaSoma() {
    inputValor1.disabled = false
    inputValor2.disabled = false
    inputValor1.value = ''
    inputValor2.value = ''
    inputValor1.focus()

    btnSomador.style.display = 'inline-block'
    btnNovaSoma.style.display = 'none'
    resposta.innerHTML = ''
}