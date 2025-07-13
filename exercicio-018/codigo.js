function verificar() {
    var inputAno = document.getElementById('txtidade')
    var res = document.querySelector('div.res')

    var stringAno = inputAno.value

    if (stringAno.trim() === '') {
        window.alert('Insira a idade abaixo!')
        return
    }

    var anoNascimento = Number(stringAno)

    if (anoNascimento <= 0) {
        window.alert('Insira um valor maior que zero.')
        return
    }

    // new Date() pega a hora e data do dispositivo do usuário
    // getFullYear() retorna apenas o ano
    var anoAtual = new Date().getFullYear()

    var calculoIdade = anoAtual - anoNascimento

    if (calculoIdade >= 18 && calculoIdade < 70) {
        res.innerHTML = `<p>Sua idade é ${calculoIdade} anos. O voto é obrigatório</p>`
    } else if (calculoIdade >= 16 || calculoIdade > 70) {
        res.innerHTML = `<p>Sua idade é ${calculoIdade} anos. Você tem idade para votar, mas o voto não é obrigatório.</p>`
    } else {
        res.innerHTML = `<p>Sua idade é ${calculoIdade} anos. Você não precisa votar.</p>`
    }
}

