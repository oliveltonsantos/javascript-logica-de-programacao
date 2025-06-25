function verificar() {
    var txtAno = document.getElementById('txtano')
    var res = document.querySelector('div.res')

    var stringAno = txtAno.value
    var ano = Number(stringAno)

    if (isNaN(ano) || ano <= 0) {
        window.alert('Insira um valor válido.')
        return
    }

    if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
        res.innerHTML = '<p>É um ano bissexto.</p>'
    } else {
        res.innerHTML = '<p>Não é um ano bissexto.</p>'
    }
}