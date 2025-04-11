function conversao() {
    var dinheiro = document.getElementById('txtdin')

    // DEIXAR O VALOR COM DUAS CASAS DECIMAIS
    var dinheiroFor = parseFloat(dinheiro.value).toFixed(2)

    var res = document.querySelector('div.res')

    if (dinheiro.value == '') {
        window.alert('Digite um valor!')
    } else {

        // PEGA O NOME DO INPUT RADIO
        var inputRad = document.getElementsByName('radin')

        // O "inputRad[0] indica qual é o input selecionado"

        if (inputRad[0].checked) {
            var convReais = dinheiroFor * 3.45
            // DEIXAR O VALOR COM DUAS CASAS DECIMAIS
            var convForR = convReais.toFixed(2)
            res.innerHTML = `O valor de U$$${dinheiroFor} é igual a R$${convForR}`
        } else {
            var convDolar = dinheiroFor / 3.45
            // DEIXAR O VALOR COM DUAS CASAS DECIMAIS
            var convForD = convDolar.toFixed(2)
            res.innerHTML = `O valor de R$${dinheiroFor} é igual U$$${convForD}`
        }
    }
}