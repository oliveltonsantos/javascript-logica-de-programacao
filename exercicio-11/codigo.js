function calculo() {
    var txtA = document.getElementById('txta')
    var txtB = document.getElementById('txtb')
    var txtC = document.getElementById('txtc')

    var A = Number(txtA.value)
    var B = Number(txtB.value)
    var C = Number(txtC.value)

    var res = document.querySelector('div.res')

    if (txtA.value == '' || txtB.value == '' || txtC.value == '') {
        window.alert('Insira os valores abaixo para calcular!')
    } else {
        var delta = (B ** 2) - (4 * A * C)
        res.innerHTML = `O valor de Delta é igual a ${delta}`
    }

}