function calculo() {
    txtkm = document.getElementById('txtdistancia')
    txtdias = document.getElementById('txtdias')
    var km = Number(txtkm.value)
    var dias = Number(txtdias.value)
    var res = document.querySelector('div.res')

    if (txtkm.value == '' || txtkm.value <= 0 || txtdias.value == '' || txtdias.value <= 0) {
        window.alert('Insira os dados corretamente!')
    } else {
        precoTotal = (dias * 90) + (km * 0.20)
        res.innerHTML = `<p>O valor total a ser pago é ${precoTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}<p>`
    }
}