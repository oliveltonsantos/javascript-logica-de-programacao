const inputNota1 = document.getElementById('nota1')
const inputNota2 = document.getElementById('nota2')
const btnAnalisar = document.querySelector('button.btnAnalisar')
const btnNovaAnalise = document.querySelector('button.btnNovaAnalise')
const resposta = document.querySelector('div.resposta')

function analisar() {
    const nota1Digitada = inputNota1.value
    const nota1Convertida = Number(nota1Digitada)

    if (nota1Digitada === '' || isNaN(nota1Convertida)) {
        alert('Insira um valor válido.')
        inputNota1.value = ''
        inputNota1.focus()
        return
    }

    const nota2Digitada = inputNota2.value
    const nota2Convertida = Number(nota2Digitada)

    if (nota2Digitada === '' || isNaN(nota2Convertida)) {
        alert('Insira um valor válido.')
        inputNota2.value = ''
        inputNota2.focus()
        return
    }

    const resultadoMedia = media(nota1Convertida, nota2Convertida).toFixed(2)
    const resultadoSituacao = situacao(resultadoMedia)

    resposta.innerHTML = `
        <p>Nota média: ${resultadoMedia}<p>
        <p>Situação: ${resultadoSituacao}</p>
    `

    inputNota1.disabled = true
    inputNota2.disabled = true

    btnAnalisar.style.display = 'none'
    btnNovaAnalise.style.display = 'inline-block'
}

function media(nota1Passada, nota2Passada) {
    const mediaCalculo = (nota1Passada + nota2Passada) / 2
    return mediaCalculo
}

function situacao(mediaCalculoPassada) {
    if (mediaCalculoPassada < 5) {
        return 'REPROVADO'
    } else if (mediaCalculoPassada >= 5 && mediaCalculoPassada < 7) {
        return 'RECUPERAÇÃO'
    } else {
        return 'APROVADO'
    }
}

function novaAnalise() {
    inputNota1.disabled = false
    inputNota2.disabled = false
    inputNota1.value = ''
    inputNota2.value = ''
    inputNota1.focus()

    btnAnalisar.style.display = 'inline-block'
    btnNovaAnalise.style.display = 'none'

    resposta.innerHTML = ''
}




