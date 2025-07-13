function calcular() {
    const nome = document.getElementById('nomeFuncionario').value.trim()
    const salario = Number(document.getElementById('salario').value)
    const anos = Number(document.getElementById('anos').value)
    const resposta = document.querySelector('div.resposta')

    if (nome === '' || isNaN(salario) || isNaN(anos)) {
        alert('Insira dados válidos.')
        return
    }

    let reajuste = 0
    let tabela = ''

    if (anos < 3) {
        reajuste = 3
        tabela = 'Até 3 anos de empresa: aumento de 3%'
    } else if (anos <= 10) {
        reajuste = 12.5
        tabela = 'Entre 3 e 10 anos: aumento de 12.5%'
    } else {
        reajuste = 20
        tabela = '10 anos ou mais: aumento de 20%'
    }

    const salarioReajustado = salario + (salario * reajuste / 100)

    resposta.innerHTML = `<p>Funcionário: ${nome}</p> 
                        <p>Reajuste salarial: ${salarioReajustado.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                        <p>Informação de reajuste: ${tabela}
                        `
}