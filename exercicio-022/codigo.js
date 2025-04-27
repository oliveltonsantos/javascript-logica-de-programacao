function verificar() {
    var txtAno = document.getElementById('txtano')
    var res = document.querySelector('div.res')

    var stringAnoNascimento = txtAno.value
    var anoNascimento = Number(stringAnoNascimento)

    if (isNaN(anoNascimento) || anoNascimento <= 0) {
        alert('Insira um valor válido!')
        return
    }

    var anoAtual = new Date().getFullYear()

    var idade = anoAtual - anoNascimento

    if (idade < 18) {
        let idadeMenor18 = 18 - idade
        res.innerHTML = `<p>Idade: ${idade} anos | Falta ${idadeMenor18} ano(s) para o alistamento.</p>`
    } else if (idade > 18) {
        let idadeMaior18 = idade - 18
        res.innerHTML = `<p>Idade: ${idade} anos | Já se passou ${idadeMaior18} ano(s) do alistamento.</p>`
    } else {
        res.innerHTML = `<p>Idade: ${idade} anos | Seja bem-vindo, soldado!</p>`
    }
}