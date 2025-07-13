function conversao() {

    // Mesmo que o input seja do tipo number, o que você recebe é uma string. Sempre. Mesmo sendo <input type="number">.
    var dinheiro = document.getElementById('txtdin')

    var res = document.querySelector('div.res')

    if (dinheiro.value == '') {
        window.alert('Digite um valor!')
    } else {

        // Conversão de valor de STRING para NÚMERO
        var dinheiroValor = parseFloat(dinheiro.value)

        // PEGA O NOME DO INPUT RADIO
        var inputRadio = document.getElementsByName('radin')

        // O "inputRad[0] indica qual é o input selecionado"
        if (inputRadio[0].checked) {
            var valorReais = dinheiroValor * 3.45
            res.innerHTML = `O valor de ${dinheiroValor.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} é igual a ${valorReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
        } else {
            var valorDolar = dinheiroValor / 3.45
            res.innerHTML = `O valor de ${dinheiroValor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} é igual a ${valorDolar.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
        }
    }
}