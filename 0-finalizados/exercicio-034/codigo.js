const inputPeso = document.getElementById('peso')
const inputAltura = document.getElementById('altura')
const divResposta = document.querySelector('div.resposta')
const btnLimpar = document.getElementById('btnLimpar')

function analisar() {
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Insira valores válidos.')
        return
    }

    const imc = peso / (altura * altura)
    let classificacao = ''

    if (imc < 18.5) {
        classificacao = 'abaixo de 18.5: Abaixo do peso'
    } else if (imc <= 25) {
        classificacao = 'entre 18.5 e 25: Peso ideal'
    } else if (imc <= 30) {
        classificacao = 'entre 25 e 30: Sobrepeso'
    } else if (imc <= 40) {
        classificacao = 'entre 30 e 40: Obesidade'
    } else {
        classificacao = 'acima de 40: Obseidade mórbida'
    }

    divResposta.innerHTML = `<p>Seu IMC: <strong>${imc.toFixed(2)}</strong></p>
                            <p>Classificação: ${classificacao}</p>`

    // Exibe o botão de limpar
    btnLimpar.style.display = 'inline-block'
}

function limparResultado() {
    peso.value = ''
    altura.value = ''
    divResposta.innerHTML = ''
    peso.focus()

    // Esconde o botão novamente
    btnLimpar.style.display = 'none'
}


