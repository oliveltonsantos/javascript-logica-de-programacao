function calculo() {
    var txtCigarros = document.getElementById('txtcigarros')
    var txtAnos = document.getElementById('txtanos')
    var res = document.querySelector('div.res')

    var cigarrosString = txtCigarros.value
    var anosString = txtAnos.value

    // Verificação antes de converter
    if (cigarrosString === '' || anosString === '') {
        window.alert('Primeiro insira os dados!')
        return // Evita lógicas quebradas: sem o return, o código continua mesmo após erro.
    }

    // Conversão de string para números
    var cigarros = Number(cigarrosString)
    var anosFumados = Number(anosString)

    if (cigarros <= 0 || anosFumados <= 0) {
        window.alert('Insira valores maiores do zero!')
        return // Evita lógicas quebradas: sem o return, o código continua mesmo após erro.
    }

    var diasFumando = anosFumados * 365

    var minutosPerdidosPorDia = cigarros * 10

    var minutosTotaisPerdidos = minutosPerdidosPorDia * diasFumando

    var diasDeVidaPerdidos = minutosTotaisPerdidos / 1440 // 1 dia = 1440 minutos

    res.innerHTML = `<p>Você perdeu aproximadamente ${diasDeVidaPerdidos.toFixed(2)} dias de vida ao fumar por ${anosFumados} anos.</p>`

}