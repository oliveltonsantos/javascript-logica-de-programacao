const inputBase = document.getElementById('base')
const inputExpoente = document.getElementById('expoente')
const btnResultado = document.querySelector('button.btnResultado')
const btnNovoCalculo = document.querySelector('button.btnNovoCalculo')
const resposta = document.querySelector('div.resposta')

function resultado() {
    const baseDigitada = inputBase.value
    const baseConvertida = Number(baseDigitada)

    if (baseDigitada === '' || isNaN(baseConvertida)) {
        alert('Insira um número válido.')
        inputBase.value = ''
        inputBase.focus()
        return
    }

    const expoenteDigitado = inputExpoente.value
    const expoenteConvertido = Number(expoenteDigitado)

    if (expoenteDigitado === '' || isNaN(expoenteConvertido)) {
        alert('Insira um número válido.')
        inputExpoente.value = ''
        inputExpoente.focus()
        return
    }

    const resultado = potencia(baseConvertida, expoenteConvertido)

    resposta.innerHTML = `<p>A potência de ${baseConvertida} e ${expoenteConvertido} = ${resultado}</p>`

    inputBase.disabled = true
    inputExpoente.disabled = true

    btnResultado.style.display = 'none'
    btnNovoCalculo.style.display = 'inline-block'

}

function potencia(basePassada, expoentePassado) {
    return basePassada ** expoentePassado

}

function novoCalculo() {
    inputBase.disabled = false
    inputExpoente.disabled = false
    inputBase.value = ''
    inputExpoente.value = ''
    inputBase.focus()

    btnResultado.style.display = 'inline-block'
    btnNovoCalculo.style.display = 'none'

    resposta.innerHTML = ''
}