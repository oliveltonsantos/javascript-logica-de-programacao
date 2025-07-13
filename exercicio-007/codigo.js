function resultado() {
    var num = document.getElementById('txtn')
    var res = document.querySelector('div.res')
    var dobro = num.value * 2
    var terca = num.value / 3

    if (num.value == '') {
        window.alert('Insira um número!')
    } else {
        res.innerHTML = `<p>Dobro: ${dobro} | Terça parte: ${terca}</p>`
    }
}