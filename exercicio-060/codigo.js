const inputNome = document.getElementById('nome')
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

// Arrays para armazenar as informações
let listaNome = []
let listaSexo = []
let listaIdade = []

// Variável para sinalizar FLAG
let parar = false

function adicionar() {
    const nome = inputNome.value
    const sexo = inputSexo.value
    const idade = Number(inputIdade.value)

    // O "/\d/.test(nome)" é uma expressão regular para bloquear números
    if (nome.trim() === '' || /\d/.test(nome)) {
        // O número "0" é permitido neste caso para indicar a finalização do cadastro
        if (nome !== '0') {
            alert('Insira um nome válido (sem números).')
            inputNome.value = ''
            inputNome.focus()
            return
        }
    }

    if (sexo.trim() === '' || sexo != 'F' && sexo != 'f' && sexo != 'M' && sexo != 'm' && sexo != '0') {
        alert('Digite "F" para "Sexo Feminino" | "M" para "Sexo Masculino"')
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

    if (nome === '0') {
        parar = true
    }

    if (!parar) {
        listaNome.push(nome)
        listaSexo.push(sexo)
        listaIdade.push(idade)

        resposta.innerHTML = `
            <p>Nomes: ${listaNome.join(' | ')}<p>
            <p>Sexo: ${listaSexo.join(' | ')}<p>
            <p>Idade: ${listaIdade.join(' | ')}<p>
        `

        inputNome.value = ''
        inputSexo.value = ''
        inputIdade.value = ''
        inputNome.focus()

    } else {

        let somaIdades = 0
        let maiorIdadeGrupo = listaIdade[0]
        let pessoaMaisVelha = listaNome[0]

        for (let contador = 0; contador < listaIdade.length; contador++) {
            somaIdades += listaIdade[contador]

            if (listaIdade[contador] > maiorIdadeGrupo) {
                maiorIdadeGrupo = listaIdade[contador]
                pessoaMaisVelha = listaNome[contador]
            }
        }

        const idadeMediaGrupo = somaIdades / listaIdade.length

        let idadeMulherJovem = null
        let nomeMulherJovem = listaNome[0]
        let mulheresMenos18 = 0
        let homensMais30 = 0

        for (let contador = 0; contador < listaIdade.length; contador++) {
            if (listaSexo[contador].toLowerCase() === 'f') {
                if (idadeMulherJovem === null || listaIdade[contador] < idadeMulherJovem) {
                    idadeMulherJovem = listaIdade[contador]
                    nomeMulherJovem = listaNome[contador]
                }

                if (listaIdade[contador] < 18) {
                    mulheresMenos18++
                }
            } else if (listaIdade[contador] > 30) {
                homensMais30++

            }
        }

        resposta.innerHTML += `
            <h2>Informações do cadastro</h2>
            <p>Idade média do grupo: ${idadeMediaGrupo.toFixed(1)}</p>
            <p>Pessoa mais velha: ${pessoaMaisVelha} tem ${maiorIdadeGrupo} anos.</p>
            <p>Mulher mais jovem: ${nomeMulherJovem} tem ${idadeMulherJovem} anos.</p>
            <p>Mulheres com menos 18 anos: ${mulheresMenos18} mulheres.</p>
            <p>Homens com mais de 30 anos: ${homensMais30} homens.</p>
        `

        inputNome.disabled = true
        inputSexo.disabled = true
        inputIdade.disabled = true
        btnAdicionar.style.display = 'none'
        btnCadastrar.style.display = 'inline-block'
    }
}

function cadastrar() {
    // Limpa os valores dos arrays
    listaNome.length = 0
    listaSexo.length = 0
    listaIdade.length = 0

    // Reseta o valor de FLAG
    parar = false

    inputNome.disabled = false
    inputSexo.disabled = false
    inputIdade.disabled = false

    btnAdicionar.style.display = 'inline-block'
    btnCadastrar.style.display = 'none'

    inputNome.value = ''
    inputSexo.value = ''
    inputIdade.value = ''
    inputNome.focus()
    resposta.innerHTML = ''

}