const inputIdade = document.getElementById('idade')

// Atalho para adicionar valores apertando o "ENTER"
inputIdade.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionar()
    }
})

const btnAdicionar = document.querySelector('button.btnAdicionar')
const btnCadastrar = document.querySelector('button.btnCadastrar')
const resposta = document.querySelector('div.resposta')

// Array que armazena as idades dos alunos
let idadesAdicionadas = []

// Variável para sinalizar FLAG
let parar = false

let somaIdades = 0
let quantidadeAlunos = 0
let mediaIdades = 0

function adicionar() {

    const idade = Number(inputIdade.value)

    if (isNaN(idade) || idade == '' || idade <= 0) {
        alert('Insira números válidos!')
        inputIdade.value = ''
        inputIdade.focus()
        return
    }

    if (idade === 999) {
        parar = true
        inputIdade.disabled = true
        btnAdicionar.style.display = 'none'
        btnCadastrar.style.display = 'inline-block'
    }

    if (!parar) {
        idadesAdicionadas.push(idade)
        somaIdades += idade
        quantidadeAlunos += 1
        mediaIdades = somaIdades / quantidadeAlunos

        resposta.innerHTML = `<p>Idade adicionadas: ${idadesAdicionadas.join(' | ')}</p>`

    } else {
        resposta.innerHTML = `  
            <h2>Resumo do cadastro:</h2>
            <p>Idade média: ${mediaIdades.toFixed(1)} anos | Total de alunos: ${quantidadeAlunos}</p>
        `
    }

    inputIdade.value = ''
    inputIdade.focus()

}


function cadastrar() {
    idadesAdicionadas.length = 0 // Limpa as idades anteriores do array 

    parar = false // Reseta a FLAG

    somaIdades = 0
    quantidadeAlunos = 0
    mediaIdades = 0

    resposta.innerHTML = ''
    inputIdade.disabled = false
    inputIdade.value = ''
    inputIdade.focus()

    btnCadastrar.style.display = 'none'
    btnAdicionar.style.display = 'inline-block'
}