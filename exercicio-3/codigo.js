function Verificar() {
    var nomef = window.document.getElementById('txtnomef')

    var salf = window.document.getElementById('txtsalf')

    var res = window.document.querySelector('div.msg')

    if (nomef.value == 0 || salf.value == 0) {
        window.alert('Insira as informações solicitadas!')
    } else {
        res.innerHTML = `<p>O(A) funcionário(a) ${nomef.value} teve um salário de R$${salf.value} em Junho.</p>`
    }
}