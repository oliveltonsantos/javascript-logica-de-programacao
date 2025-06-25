const inputSexo = document.getElementById('sexo')
const inputIdade = document.getElementById('idade')

// Atalho para adicionar valores pressionando o 'ENTER'
inputIdade.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionar()
    }
})

const btnAdicionar = document.querySelector('button.btnAdicionar')
const btnCadastrar = document.querySelector('button.btnCadastrar')
const resposta = document.querySelector('div.resposta')

// Arrays para armazenar o sexo e a idade
let listaSexo = []
let listaIdade = []

// Variável para sinalizar FLAG
let parar = false

let quantidadeHomens = 0
let somaIdadeHomens = 0
let idadeMediaHomens = 0

function adicionar() {
    const sexo = inputSexo.value
    const idade = Number(inputIdade.value)

    if (sexo.trim() === '' || sexo !== 'F' && sexo !== 'f' && sexo !== 'M' && sexo !== 'm' && sexo !== '0') {
        alert('Digite "F" para "Sexo feminino" | "M" para "Sexo masculino"')
        inputSexo.value = ''
        inputSexo.focus()
        return
    }

    if (isNaN(idade) || idade < 0) {
        alert('Insira uma idade válida.')
        inputIdade.value = ''
        inputIdade.focus()
        return
    }

    if (sexo === '0') {
        parar = true
        inputSexo.disabled = true
        inputIdade.disabled = true
        btnAdicionar.style.display = 'none'
        btnCadastrar.style.display = 'inline-block'
    }

    if (!parar) {

        // Adiciona os valores no fim dos arrays
        listaSexo.push(sexo)
        listaIdade.push(idade)

        resposta.innerHTML = `
            <p>Sexo adicionado: ${listaSexo.join(' | ')}</p>
            <p>Idade adicionada: ${listaIdade.join(' | ')}</p>
        `

        if (sexo == 'M' || sexo == 'm') {
            quantidadeHomens += 1
            somaIdadeHomens += idade
            idadeMediaHomens = somaIdadeHomens / quantidadeHomens

        }

    } else {

        // A variável abaixo vai receber o primeiro valor digitado pelo usuário, ou seja, o primeiro valor é a maior e a menor idade inserida no primeiro cadastro
        let maiorIdade = listaIdade[0]

        // Por isso, este contador começa a partir do índice 1, pois ele irá fazer as novas análises tendo ele como ponto de partida
        for (let contador = 1; contador < listaIdade.length; contador++) {
            if (listaIdade[contador] > maiorIdade) {
                maiorIdade = listaIdade[contador]
            }
        }

        // Inicializa com null, ou seja, nenhum valor definido ainda. Isso permite identificar depois se nenhuma mulher foi cadastrada (útil para evitar erros).
        let mulherMaisJovem = null

        for (let contador = 0; contador < listaIdade.length; contador++) {
            // toLowerCase() transforma F ou f em minúsculo, garantindo que funcione com qualquer uma das duas letras.
            if (listaSexo[contador].toLowerCase() === 'f') {
                if (mulherMaisJovem === null || listaIdade[contador] < mulherMaisJovem) {
                    mulherMaisJovem = listaIdade[contador]
                }
            }
        }

        resposta.innerHTML += `
            <h2>Informações do cadastro:</h2>
            <p>Maior idade: ${maiorIdade}</p>
            <p>Quantidade de homens: ${quantidadeHomens}</p>
            <p>Idade média dos homens: ${idadeMediaHomens.toFixed(1)}</p>
            <p>Idade da mulher mais jovem: ${mulherMaisJovem ?? 'Nenhuma mulher cadastrada'}</p>     
        `
    }

    inputSexo.value = ''
    inputIdade.value = ''
    inputSexo.focus()

}


function cadastrar() {
    // Limpa os valores dos arrays abaixo
    listaSexo.length = 0
    listaIdade.length = 0

    // Reseta o valor de FLAG
    parar = false

    inputSexo.disabled = false
    inputIdade.disabled = false
    inputSexo.value = ''
    inputIdade.value = ''
    inputSexo.focus()

    resposta.innerHTML = ''
    maiorIdade = 0
    quantidadeHomens = 0
    somaIdadeHomens = 0
    idadeMediaHomens = 0
    mulherMaisJovem = 0

    btnAdicionar.style.display = 'inline-block'
    btnCadastrar.style.display = 'none'

}