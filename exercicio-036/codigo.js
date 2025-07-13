const inputHoras = document.getElementById('horas')
const resposta = document.querySelector('div.resposta')

function calcular() {
    let horas = Number(inputHoras.value)

    if (isNaN(horas) || horas <= 0) {
        alert('Insira valores válidos.')
        return
    }

    let pontos = 0

    if (horas <= 10) {
        pontos = horas * 2
    } else if (horas <= 20) {
        pontos = horas * 5
    } else {
        pontos = horas * 10
    }

    const valorRecebido = pontos * 0.05

    resposta.innerHTML = `<p>Total de pontos: ${pontos} | Valor: ${valorRecebido.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>`

}