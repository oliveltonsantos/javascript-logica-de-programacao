const inputNota1 = document.getElementById('nota1')
const inputNota2 = document.getElementById('nota2')
const btnResultado = document.querySelector('button.btnResultado')
const btnNovoCalculo = document.querySelector('button.btnNovoCalculo')
const resposta = document.querySelector('div.resposta')

function media(nota1Passada, nota2Passada) {
    return (nota1Passada + nota2Passada) / 2
}

function resultado() {
    const nota1Digitada = inputNota1.value
    const nota1Recebida = Number(nota1Digitada)

    if (nota1Digitada === '' || isNaN(nota1Recebida)) {
        alert('Digite uma nota válida.')
        inputNota1.value = ''
        inputNota1.focus()
        return
    }

    const nota2Digitada = inputNota2.value
    const nota2Recebida = Number(nota2Digitada)

    if (nota2Digitada === '' || isNaN(nota2Recebida)) {
        alert('Insira uma nota válida.')
        inputNota2.value = ''
        inputNota2.focus()
        return
    }

    const resultadoMedia = media(nota1Recebida, nota2Recebida).toFixed(2)

    resposta.innerHTML = `<p>A nota média de ${nota1Recebida} e ${nota2Recebida} = ${resultadoMedia}</p>`

    inputNota1.disabled = true
    inputNota2.disabled = true

    btnResultado.style.display = 'none'
    btnNovoCalculo.style.display = 'inline-block'

}

function novoCalculo() {
    inputNota1.disabled = false
    inputNota2.disabled = false
    inputNota1.value = ''
    inputNota2.value = ''
    inputNota1.focus()

    btnResultado.style.display = 'inline-block'
    btnNovoCalculo.style.display = 'none'
    resposta.innerHTML = ''
}