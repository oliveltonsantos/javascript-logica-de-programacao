function calcular() {
    var txtNomeAluno = document.getElementById('txtnome')
    var txtNota1 = document.getElementById('txtnota1')
    var txtNota2 = document.getElementById('txtnota2')
    var res = document.getElementById('res')

    var stringNomeAluno = txtNomeAluno.value


    if (stringNomeAluno.trim() === '') {
        window.alert('Insira o nome do aluno!')
        return
    }

    var stringNota1 = txtNota1.value
    var stringNota2 = txtNota2.value

    var nota1 = Number(stringNota1)
    var nota2 = Number(stringNota2)

    // isNaN é uma função verifica se o valor não é um número válido. Exemplo: se o usuário digitar "abc", isNaN("abc") retorna true.

    if (isNaN(nota1) || isNaN(nota2)) {
        window.alert('Insira valores válidos para as notas.')
        return
    }

    var notaMedia = (nota1 + nota2) / 2

    res.innerHTML = `<p>O aluno(a) ${stringNomeAluno} teve nota média de: ${notaMedia}</p>`

    if (notaMedia >= 7) {
        res.innerHTML += "<p>Aluno(a) APROVADO(A)!</p>"
    } else {
        res.innerHTML += '<p>Aluno(a) REPROVADO(A)!</p>'
    }
}