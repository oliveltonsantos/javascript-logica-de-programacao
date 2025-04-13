function calcular() {
    var txtValor = document.getElementById('txtvalor')

    var valor = Number(txtValor.value)

    var res = document.querySelector('div.res')

    if (txtValor.value == '' || txtValor.value <= 0) {
        window.alert('Insira o valor primeiro!')
    } else {

        var promocao = valor - (valor * 5 / 100)

        res.innerHTML = `O valor total da sua compra com 5% de desconto será de ${promocao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    }
}