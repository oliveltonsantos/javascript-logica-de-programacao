const inputModelo = document.getElementsByName('modeloCarro')
const inputDiasAlugados = document.getElementById('diasAlugados')
const inputKmPercorridos = document.getElementById('kmPercorridos')
const btnLimpar = document.querySelector('button.btnLimpar')
const resposta = document.querySelector('div.resposta')

function calcular() {
    const dias = Number(inputDiasAlugados.value)
    const km = Number(inputKmPercorridos.value)

    if (isNaN(dias) || isNaN(km) || dias <= 0 || km <= 0) {
        alert('Insira valores válidos.')
        return
    }

    let valorAluguel = 0
    let valorKm = 0

    if (inputModelo[0].checked) {
        // Carro popular
        valorAluguel = dias * 90
        valorKm = km <= 100 ? km * 0.20 : km * 0.10 // operador ternário
    } else {
        valorAluguel = dias * 150
        valorKm = km <= 200 ? km * 0.30 : km * 0.25 // operador ternário
    }

    const total = valorAluguel + valorKm

    resposta.innerHTML = `<p>O total a ser pago é ${total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>`

    // Exibe o botão de limpar
    btnLimpar.style.display = 'inline-block'
}

function limparResultado() {
    inputDiasAlugados.value = ''
    inputKmPercorridos.value = ''
    resposta.innerHTML = ''
    inputModelo[0].checked = true // Resetar a seleção. Use false, se quiser desmarcar tudo.
    inputDiasAlugados.focus()

    // Escode o botão de limpar
    btnLimpar.style.display = 'none'
}