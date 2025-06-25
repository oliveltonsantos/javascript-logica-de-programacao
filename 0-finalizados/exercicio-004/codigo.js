function somar() {
    var n1 = window.document.getElementById('txtn1')
    var n2 = window.document.getElementById('txtn2')
    var resp = window.document.querySelector('div.res')
    var soma = Number(n1.value) + Number(n2.value)

    if (n1.value == 0 || n2.value == 0) {
        window.alert('Insira os valores abaixo!')
    } else {
        resp.innerHTML = `<p>A soma de ${n1.value} e ${n2.value} é ${soma}.</p>`
    }
}