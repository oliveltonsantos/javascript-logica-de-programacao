function comparar() {
    const inputValor1 = document.getElementById('valor1')
    const inputValor2 = document.getElementById('valor2')
    const res = document.querySelector('div.res')

    const stringValor1 = inputValor1.value
    const stringValor2 = inputValor2.value

    const valor1 = Number(stringValor1)
    const valor2 = Number(stringValor2)

    if (isNaN(valor1) || isNaN(valor2) || valor1 <= 0 || valor2 <= 0) {
        alert('Insira valores válidos.')
        return
    }

    if (valor1 > valor2) {
        res.innerHTML = '<p>O primeiro valor é o maior.</p>'
    } else if (valor2 > valor1) {
        res.innerHTML = '<p>O segundo valor é o maior.</p>'
    } else {
        res.innerHTML = '<p>Não existe valor maior, os dois são iguais.</p>'
    }
}