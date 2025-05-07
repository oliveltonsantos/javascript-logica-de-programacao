const sexoFuncionario = document.getElementsByName('sexoFuncionario')
const inputSalario = document.getElementById('salario')
const inputAnos = document.getElementById('anos')
const resposta = document.querySelector('div.resposta')

function calcular() {
    const salario = Number(inputSalario.value)
    const anos = Number(inputAnos.value)

    if (isNaN(salario) || isNaN(anos) || salario <= 0 || anos <= 0) {
        alert('Insira dados válidos.')
        return
    }

    let porcentagem = 0

    if (sexoFuncionario[0].checked) {
        if (anos < 15) {
            porcentagem = 5
        } else if (anos <= 20) {
            porcentagem = 12
        } else {
            porcentagem = 23
        }
    } else {
        if (anos < 20) {
            porcentagem = 3
        } else if (anos <= 30) {
            porcentagem = 13
        } else {
            porcentagem = 25
        }
    }

    const novoSalario = (salario) + (salario * porcentagem / 100)

    resposta.innerHTML = `<p>Novo salário: ${novoSalario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>`
}


