const inputNota = document.getElementById('nota')

// Adiciona dados apertando "ENTER"
inputNota.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionar()
    }
})

const btnAdicionar = document.querySelector('button.btnAdicionar')
const btnCadastrar = document.querySelector('button.btnCadastrar')
const resposta = document.querySelector('div.resposta')

let listaNotas = []

function adicionar() {

    const notaDigitada = inputNota.value
    const nota = Number(notaDigitada)

    if (notaDigitada === '' || isNaN(nota)) {
        alert('Digite um valor válido.')
        inputNota.value = ''
        inputNota.focus()
        return
    }

    listaNotas.push(nota)

    resposta.innerHTML = `<p>${listaNotas.length} notas adicionadas.<p>`

    inputNota.value = ''
    inputNota.focus()

    if (listaNotas.length > 9) {

        let somaNotas = 0
        let acimaDaMedia = 0
        let maiorNota = 0

        for (let contador = 0; contador < 10; contador++) {
            somaNotas += listaNotas[contador]

            if (listaNotas[contador] > maiorNota) {
                maiorNota = listaNotas[contador]
            }
        }

        const posicaoMaiorNota = listaNotas
            .map((valor, indice) => ({ indice, valor }))
            .filter(item => item.valor === maiorNota)
            .map(item => `[${item.indice}]`)
            .join(' 👉 ')

        const notaMedia = somaNotas / listaNotas.length

        for (let contador = 0; contador < 10; contador++) {
            if (listaNotas[contador] > notaMedia) {
                acimaDaMedia = acimaDaMedia + 1
            }
        }

        resposta.innerHTML = `
            <p>Notas adicionadas: ${listaNotas.join(' | ')}</p>
            <p>Nota média: ${notaMedia}</p>
            <p>Alunos acima da média: ${acimaDaMedia} aluno(s).</p>
            <p>Maior nota: ${maiorNota}</p>
            <p>Posição da maior nota: ${posicaoMaiorNota}</p>
        `

        inputNota.disabled = true
        btnAdicionar.style.display = 'none'
        btnCadastrar.style.display = 'inline-block'

    }

}


function cadastrar() {
    listaNotas.length = 0

    inputNota.disabled = false
    inputNota.value = ''
    inputNota.focus()

    btnAdicionar.style.display = 'inline-block'
    btnCadastrar.style.display = 'none'

    resposta.innerHTML = ''
}