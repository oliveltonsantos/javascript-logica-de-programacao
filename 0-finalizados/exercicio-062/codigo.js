const inputIdade = document.getElementById('idade')

// Quando a tecla "ENTER" é pressionada a idade é adicionada
inputIdade.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionar()
    }
})

const btnAdicionar = document.querySelector('button.btnAdicionar')
const btnAnalisar = document.querySelector('button.btnAnalisar')
const btnCadastrar = document.querySelector('button.btnCadastrar')

const resposta = document.querySelector('div.resposta')

// Array que armazena as idades
let listaIdades = []

function adicionar() {
    const idade = Number(inputIdade.value)

    if (isNaN(idade) || idade <= 0) {
        alert('Adicione um idade válida.')
        inputIdade.value = ''
        inputIdade.focus()
        return
    }

    // Adiciona as idades no final do array
    listaIdades.push(idade)

    resposta.innerHTML = `<p>Idades adicionadas: ${listaIdades.join(' | ')}</p>`

    inputIdade.value = ''
    inputIdade.focus()
}


function analisar() {

    let contador = 0
    let quantidadeIdades = 0
    let soma = 0
    let idadeAcima21 = 0

    do {
        quantidadeIdades = quantidadeIdades + 1
        soma += listaIdades[contador]
        if (listaIdades[contador] > 21) {
            idadeAcima21++
        }
        contador++
    } while (contador < listaIdades.length)

    const media = soma / quantidadeIdades

    resposta.innerHTML += `
    <h2>Resultado da análise:</h2>
    <p>Total de idades: ${quantidadeIdades} idades.</p>
    <p>Idade média: ${media.toFixed(1)}</p>
    <p>Idade acima de 21: ${idadeAcima21} pessoas</p>
`

    inputIdade.disabled = true

    btnAdicionar.style.display = 'none'
    btnAnalisar.style.display = 'none'
    btnCadastrar.style.display = 'inline-block'

}


function cadastrar() {
    // Limpa as idades do array
    listaIdades.length = 0

    inputIdade.disabled = false
    inputIdade.value = ''
    inputIdade.focus()

    btnAdicionar.style.display = 'inline-block'
    btnAnalisar.style.display = 'inline-block'
    btnCadastrar.style.display = 'none'

    resposta.innerHTML = ''

}