function verificar() {
    var inputVelocidade = document.getElementById('txtvel')
    var res = document.querySelector('div.res')

    var velString = inputVelocidade.value

    if (velString.trim() === '') {
        window.alert('Insira a velocidade abaixo!')
        return
    }

    var velocidade = Number(velString)

    if (velocidade <= 0) {
        window.alert('Insira um valor maior que zero!')
        return
    }

    if (velocidade > 80) {
        var valorMulta = (velocidade - 80) * 5
        res.innerHTML = `<p>Você foi multado por ultrapassar o limite de 80 km/h. O valor da sua multa é: ${valorMulta.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>`
    } else {
        res.innerHTML = '<p>Continue andando na linha meu chapa!</p>'
    }
}

