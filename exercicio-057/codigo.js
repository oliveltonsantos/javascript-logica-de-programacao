const inputSalario = document.getElementById('salario')

const inputSexo = document.getElementById('sexo')

// Atalho para adicionar valores apertando o "ENTER"
inputSexo.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionar()
    }
})

const btnAdicionar = document.querySelector('button.btnAdicionar')
const btnRecomecar = document.querySelector('button.btnRecomecar')

const resposta = document.querySelector('div.resposta')

// Arrays que vão receber o salario e o sexo
let salarioAdicionado = []
let sexoAdicionado = []

// Variável para sinalizar FLAG
let parar = false

let salarioHomens = 0
let salarioMulheres = 0

function adicionar() {
    const salario = Number(inputSalario.value)
    const sexo = inputSexo.value

    if (isNaN(salario) || salario < 0) {
        alert('Insira valores válidos!')
        inputSalario.value = ''
        inputSalario.focus()
        return
    }

    if (sexo.trim() === '' || sexo !== 'F' && sexo !== 'f' && sexo !== 'M' && sexo !== 'm' && sexo !== '0') {
        alert('Insira "F" para "Sexo Feminino" | "M" para "Sexo Masculino"')
        inputSexo.value = ''
        inputSexo.focus()
        return
    }

    if (salario === 0) {
        parar = true
        inputSalario.disabled = true
        inputSexo.disabled = true
        btnAdicionar.style.display = 'none'
        btnRecomecar.style.display = 'inline-block'
    }

    if (!parar) {

        // Adiciona o salário e o sexo no final de cada array
        salarioAdicionado.push(salario)
        sexoAdicionado.push(sexo)

        // Aplicação do "toLocaleString()" em cada salário do array para ficar assim "R$ 1.000,00 | R$ 1.500,00"
        resposta.innerHTML = `
                            <p>Salário adicionado: ${salarioAdicionado.map(salario => salario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })).join(' | ')}</p>
                            <p>Sexo adicionado: ${sexoAdicionado.join(' | ')}</p>
    `

        if (sexo === 'F' || sexo === 'f') {
            salarioMulheres = salarioMulheres + salario
        } else {
            salarioHomens = salarioHomens + salario
        }

    } else {
        resposta.innerHTML += `
                    <hr>
                    <p><strong>Resumo final:</strong></p>
                    <p>Salário total das mulheres: ${salarioMulheres.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                    <p>Salário total dos homens: ${salarioHomens.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>`

    }

    inputSalario.value = ''
    inputSexo.value = ''
    inputSalario.focus()

}


function recomecar() {
    // Limpa o salário e o sexo dos arrays
    salarioAdicionado.length = 0
    sexoAdicionado.length = 0

    // Reseta o FLAG
    parar = false

    salarioHomens = 0
    salarioMulheres = 0

    inputSalario.disabled = false
    inputSexo.disabled = false

    inputSalario.value = ''
    inputSexo.value = ''
    resposta.innerHTML = ''
    inputSalario.focus()

    btnRecomecar.style.display = 'none'
    btnAdicionar.style.display = 'inline-block'
}