function calcular() {
    var sexoFeminino = document.getElementById('sexofeminino')
    var inputNomeCliente = document.getElementById('nomecliente')
    var inputValorCompra = document.getElementById('valorcompra')
    var res = document.querySelector('div.res')

    var sexoFemininoSelecionado = sexoFeminino.value


    var stringNomeCliente = inputNomeCliente.value

    var stringValorCompra = inputValorCompra.value
    var valorCompra = Number(stringValorCompra)

    if (stringNomeCliente.trim() === '' || valorCompra === '' || valorCompra <= 0) {
        alert('Insira seu nome e valores da compra.')
    }

    if (sexoFemininoSelecionado) {
        var descontoMulher = (valorCompra * 13) / 100
        var precoFinalMulher = valorCompra - descontoMulher
        res.innerHTML = `${stringNomeCliente} o valor a ser pago com 13% de desconto é ${precoFinalMulher.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})}`
    } else {
        var descontoHomem = (valorCompra )
    }
}

