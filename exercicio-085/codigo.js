const inputNome = document.getElementById('nome')
const inputSexo = document.getElementById('sexo')
const inputSalario = document.getElementById('salario')

inputSalario.addEventListener('keydown', function (event) {
    // Insere dados ao pressionar "ENTER"
    if (event.key === 'Enter') {
        adicionar()
    }
})

const btnAdicionar = document.querySelector('button.btnAdicionar')
const btnCadastrar = document.querySelector('button.btnCadastrar')
const resposta = document.querySelector('div.resposta')

// Arrays para guardar os dados
let listaNome = []
let listaSexo = []
let listaSalario = []

function adicionar() {
    const nome = inputNome.value
    const sexo = inputSexo.value

    // Validações de nome e sexo
    if (nome === '' || sexo === '') {
        alert('Preencha os campos de "Nome" e "Salário" abaixo.')
        inputNome.focus()
        return
    }

    const salarioDigitado = inputSalario.value
    const salario = Number(salarioDigitado)

    // Validação de salário
    if (salarioDigitado === '' || isNaN(salario)) {
        alert('Digite um valor válido no campo "Salário".')
        inputSalario.value = ''
        inputSalario.focus()
        return
    }

    // Adiciona os dados ao array
    listaNome.push(nome)
    listaSexo.push(sexo)
    listaSalario.push(salario)

    resposta.innerHTML = `${listaNome.length} tantos funcionários adicionados.`

    // Lista de inputs
    inputNome.value = ''
    inputSexo.value = ''
    inputSalario.value = ''
    inputNome.focus()

    // Análise final após cadastrar os 5
    if (listaNome.length > 4) {
        const mulheresMaisR$5000 = listaSexo
            .map((valor, indice) => ({ indice, valor }))
            .filter(item => item.valor === 'F' || item.valor === 'f')
            .filter(item => listaSalario[item.indice] > 5000)
            .map(item => `${listaNome[item.indice]} => R$${listaSalario[item.indice]},00`)
            .join('<br>')

        resposta.innerHTML = `
            <p>Mulheres que recebem mais de R$5.000,00:<p>
            <p>${mulheresMaisR$5000}<p>
        `

        // Desativa os inputs
        inputNome.disabled = true
        inputSexo.disabled = true
        inputSalario.disabled = true

        btnAdicionar.style.display = 'none'
        btnCadastrar.style.display = 'inline-block'
    }

}

function cadastrar() {
    // Reseta os dados
    listaNome.length = 0
    listaSexo.length = 0
    listaSalario.length = 0

    inputNome.disabled = false
    inputSexo.disabled = false
    inputSalario.disabled = false

    inputNome.value = ''
    inputSexo.value = ''
    inputSalario.value = ''
    inputNome.focus()

    btnAdicionar.style.display = 'inline-block'
    btnCadastrar.style.display = 'none'
    resposta.innerHTML = ''
}