function calcular() {
    var txtsalario = document.getElementById('txtsal')
    salario = Number(txtsalario.value)
    var res = document.querySelector('div.res')

    if (txtsalario.value == '' || txtsalario.value <= 0) {
        window.alert('Insira o salário primeiro!')
    } else {
        var novoSalario = salario + (salario * 15 / 100)
        res.innerHTML = `<p>O salário com 15% de aumento será de ${novoSalario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}<p>`
    }
}