function Verificar() {
    var nomef = window.document.getElementById('txtnomef')

    var salf = window.document.getElementById('txtsalf')

    var res = window.document.querySelector('div.msg')

    res.innerHTML = `<p>O funcionário(a) ${nomef.value} teve um salário de R$${salf.value} em Junho.</p>`

}