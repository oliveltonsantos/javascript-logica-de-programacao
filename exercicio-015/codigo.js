function calculo() {
    var txtDias = document.getElementById('txtdias')

    var dias = Number(txtDias.value)

    var res = document.querySelector('div#res')

    if (txtDias.value == '') {
        window.alert('Digite os dias corretamente!')

    } else if (dias <= 0) {
        window.alert('Deixa de ser besta!')
    } else {
        salario = dias * (8 * 25)
        res.innerHTML = `<p>O funcionário irá receber neste mês ${salario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>`
    }
}

function limpar() {
    var txtDias = document.getElementById('txtdias')
    var res = document.querySelector('div#res')

    txtDias.value = ''
    res.innerHTML = ''
    txtDias.focus() // foca de novo no campo de entrada
}