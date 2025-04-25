function verificar() {
    var txtNumero = document.getElementById('txtnumero')
    var res = document.querySelector('div.res')

    var stringNumero = txtNumero.value
    var numero = Number(stringNumero)

    if (isNaN(numero)) {
        window.alert('Insira um número válido.')
        return
    }

    var numeroVerificado = numero % 2

    if (numeroVerificado == 0) {
        res.innerHTML = '<p>Número par.</p>'
    } else {
        res.innerHTML = '<p>Número ímpar.</p>'
    }
}