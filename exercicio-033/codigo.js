function analisar() {
    const valorCasa = Number(document.getElementById('valorCasa').value)
    const salario = Number(document.getElementById('salario').value)
    const anos = Number(document.getElementById('anos').value)
    const resposta = document.querySelector('div.resposta')

    if (isNaN(valorCasa) || isNaN(salario) || isNaN(anos) || valorCasa <= 0 || salario <= 0 || anos <= 0) {
        alert('Insira dados válidos.')
        return
    }

    const valorPrestacao = valorCasa / (anos * 12)
    const salario30 = (salario * 30) / 100

    if (valorPrestacao <= salario30) {
        resposta.innerHTML = `<p>Empréstimo aprovado!</p>
            <p>O valor mensal da sua prestação será de ${valorPrestacao.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>`
    } else {
        resposta.innerHTML = `<p>Infelizmente seu empréstimo foi negado. A parcela mensal é igual a ${valorPrestacao.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
        <p>Este valor excede os 30% do seu salário que é ${salario30.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}. Este seria o valor máximo que você poderia pagar mensalmente.</p>`
    }
}

function limparAnalise() {
    const valorCasa = document.getElementById('valorCasa')
    const salario = document.getElementById('salario')
    const anos = document.getElementById('anos')
    const resposta = document.querySelector('div.resposta')

    valorCasa.value = ''
    salario.value = ''
    anos.value = ''
    resposta.innerHTML = ''
    valorCasa.focus()
}

