const inputNome = document.getElementById('nome')
const inputIdade = document.getElementById('idade')

// Adiciona dados quando pressiona "ENTER"
inputIdade.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionar()
    }
})

const btnAdicionar = document.querySelector('button.btnAdicionar')
const btnCadastrar = document.querySelector('button.btnCadastrar')
const resposta = document.querySelector('div.resposta')


let listaNomes = []
let listaIdades = []


function adicionar() {
    const nome = inputNome.value

    if (nome.trim() === '') {
        alert('Insira um nome abaixo.')
        inputNome.focus()
        return
    }

    const idadeDigitada = inputIdade.value
    const idade = Number(idadeDigitada)

    if (idadeDigitada === '' || isNaN(idade)) {
        alert('Insira uma idade válida.')
        inputIdade.value = ''
        inputIdade.focus()
        return
    }

    listaNomes.push(nome)
    listaIdades.push(idade)
    resposta.innerHTML = `${listaNomes.length} pessoas foram adicionadas.`

    inputIdade.value = ''
    inputNome.value = ''
    inputNome.focus()

    if (listaNomes.length > 8) {

        const menoresDeIdade = listaIdades
            .map((valor, indice) => ({ indice, valor }))
            .filter(item => item.valor <= 18)
            .map(item => `${listaNomes[item.indice]} => ${item.valor} anos.`)
            .join('<br>')

        resposta.innerHTML = `
            <p>Pessoas menores de idade:</p>
            <p>${menoresDeIdade}</p>

        `

        inputNome.disabled = true
        inputIdade.disabled = true

        btnAdicionar.style.display = 'none'
        btnCadastrar.style.display = 'inline-block'
    }

}


function cadastrar() {
    listaNomes.length = 0
    listaIdades.length = 0

    inputNome.disabled = false
    inputIdade.disabled = false
    inputNome.value = ''
    inputIdade.value = ''
    inputNome.focus()

    btnAdicionar.style.display = 'inline-block'
    btnCadastrar.style.display = 'none'

    resposta.innerHTML = ''
}


