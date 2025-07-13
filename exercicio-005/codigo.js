function somar() {
    var n1 = document.getElementById('txtn1')
    var n2 = document.getElementById('txtn2')
    var media = (Number(n1.value) + Number(n2.value)) / 2
    var res = document.querySelector('div.res')

    if (n1.value == 0 || n2.value == 0) {
        window.alert('Insira as notas.')
    } else {
        res.innerHTML = `<p>A média entre ${n1.value} e ${n2.value} é igual a ${media}</p>`
    }
}