function verificar() {
    const inputNota1 = document.getElementById('nota1')
    const inputNota2 = document.getElementById('nota2')
    const res = document.querySelector('div.res')

    const stringNota1 = inputNota1.value
    const stringNota2 = inputNota2.value

    const nota1 = Number(stringNota1)
    const nota2 = Number(stringNota2)

    if (isNaN(nota1) || isNaN(nota2) || nota1 <= 0 || nota2 <= 0) {
        alert('Insira dados válidos.')
        return
    }

    var media = (nota1 + nota2) / 2

    if (media <= 4.9) {
        res.innerHTML = `<p>Média: ${media} => Média até 4.9: REPROVADO</p>`
    } else if (media >= 5 && media <= 6.9) {
        res.innerHTML = `<p>Média: ${media} => Média entre 5.0 e 6.9: RECUPERAÇÃO</p>`
    } else {
        res.innerHTML = `<p>Média: ${media} => Média 7.0 ou superior: APROVADO</p>`
    }
}