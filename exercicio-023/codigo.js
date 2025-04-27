function calcular() {
    var sexoFeminino = document.getElementById('sexofeminino').checked
    var inputNomeCliente = document.getElementById('nomecliente')
    var inputValorCompra = document.getElementById('valorcompra')
    var res = document.querySelector('div.res')

    var stringNomeCliente = inputNomeCliente.value

    var stringValorCompra = inputValorCompra.value
    var valorCompra = Number(stringValorCompra)

    if (stringNomeCliente.trim() === '' || isNaN(valorCompra) || valorCompra <= 0) {
        alert('Insira seu nome e valores da compra.')
        return
    }

    if (sexoFeminino) {
        let descontoMulher = (valorCompra * 13) / 100
        let precoFinalMulher = valorCompra - descontoMulher
        res.innerHTML = `<p>${stringNomeCliente}, o valor a ser pago com <strong>13%</strong> de desconto é <strong>${precoFinalMulher.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong></p>`
    } else {
        let descontoHomem = (valorCompra * 5) / 100
        let precoFinalHomem = valorCompra - descontoHomem
        res.innerHTML = `<p>${stringNomeCliente}, o valor a ser pago com <strong>5%</strong> de desconto é <strong>${precoFinalHomem.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong></p>`
    }
}

