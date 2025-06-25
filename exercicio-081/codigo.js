const inputIdade = document.getElementById('idade')

// Atalho para adicionar dados apertando "ENTER"
inputIdade.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionar()
    }
})

const btnAdicionar = document.querySelector('button.btnAdicionar')
const btnCadastrar = document.querySelector('button.btnCadastrar')
const resposta = document.querySelector('div.resposta')

let listaIdades = []


function adicionar() {
    const idadeDigitada = inputIdade.value
    const idade = Number(idadeDigitada)

    // Validação de valores
    if (idadeDigitada === '' || isNaN(idade)) {
        alert('Insira um número válido no campo.')
        inputIdade.value = ''
        inputIdade.focus()
        return
    }

    if (idade <= 0) {
        alert('Insira uma idade maior que zero.')
        inputIdade.value = ''
        inputIdade.focus()
        return
    }

    // Adiciona números ao array e mostra para o usuário
    listaIdades.push(idade)
    resposta.innerHTML = `${listaIdades.length} idades adicionadas.`

    inputIdade.value = ''
    inputIdade.focus()

    // Análise dos números
    if (listaIdades.length >= 8) {

        let somaIdades = 0
        let maiorIdade = 0
        let maiorIdadePosicao = 0

        for (let contador = 0; contador < listaIdades.length; contador++) {
            somaIdades = somaIdades + listaIdades[contador]

            if (listaIdades[contador] > maiorIdade) {
                maiorIdade = listaIdades[contador]
                maiorIdadePosicao = contador
            }
        }

        const idadeMais25 = listaIdades
            .map((valor, indice) => ({ indice, valor }))
            .filter(item => item.valor > 25)
            .map(item => `[${item.indice}]`)
            .join(' 👉 ')

        let respostaIdadeMais25 = ''

        if (idadeMais25.length === 0) {
            respostaIdadeMais25 = 'Não foi cadastrada nenhuma idade maior que 25.'
        } else {
            respostaIdadeMais25 = `${idadeMais25}`
        }

        const idadeMedia = somaIdades / listaIdades.length

        // Retorno da análise
        resposta.innerHTML = `
        <p>Idade média: ${idadeMedia} ano(s).</p>
        <p>Idades maiores que 25 (indíce): ${respostaIdadeMais25}</p>
        <p>Maior idade: ${maiorIdade} anos.</p>
        <p>Indíce da maior idade: ${maiorIdadePosicao}</p>
    `

        inputIdade.disabled = true

        btnAdicionar.style.display = 'none'
        btnCadastrar.style.display = 'inline-block'

    }

}


function cadastrar() {
    listaIdades.length = 0

    inputIdade.disabled = false
    inputIdade.value = ''
    inputIdade.focus()

    btnAdicionar.style.display = 'inline-block'
    btnCadastrar.style.display = 'none'

    resposta.innerHTML = ''
}