function resultado() {
    var num = document.getElementById('txtnum')
    var res = document.getElementById('res')

    var ant = Number(num.value) - 1
    var suc = Number(num.value) + 1

    if (num.value == '') {
        window.alert('Insira um valor!')
    } else {
        res.innerHTML = `<p>Antecessor: ${ant} | Sucessor: ${suc}</p>`
    }
}