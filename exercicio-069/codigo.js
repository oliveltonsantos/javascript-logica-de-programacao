const inputTermo = document.getElementById('termo')
const inputRazao = document.getElementById('razao')

// Cria um atalho para adicionar valores usando a tecla "ENTER"
inputRazao.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        contar()
    }
})

const btnContar = document.querySelector('button.btnContar')
const btnRecomecar = document.querySelector('button.btnRecomecar')
const resposta = document.querySelector('div.resposta')

function contar() {
    let primeiroTermo = Number(inputTermo.value)
    const razaoPA = Number(inputRazao.value)

    if (isNaN(primeiroTermo) || isNaN(razaoPA)) {
        alert('Insira o valor válido.')
        inputTermo.value = ''
        inputRazao.value = ''
        inputTermo.focus()
        return
    }

    let somaValoresPA = 0

    for (let contador = 0; contador < 10; contador++) {
        // Se o contador estiver no último indíce que é [9] a vírgula não é adicionada
        if (contador === 9) {
            resposta.innerHTML += `${primeiroTermo}...`
        } else {
            resposta.innerHTML += `${primeiroTermo} , `
        }

        /* Fórmula da PA para descobrir os próximos números: 
            termo1 + r = termo2
            termo2 + r = termo3
            termo3 + r = termo4

            "r" significa razão, ou seja, a quantidade de passos
        */
        somaValoresPA += primeiroTermo
        primeiroTermo += razaoPA
    }

    resposta.innerHTML += `<p>Soma dos valores: ${somaValoresPA}<p>`

    inputTermo.disabled = true
    inputRazao.disabled = true

    btnContar.style.display = 'none'
    btnRecomecar.style.display = 'inline-block'

}


function recomecar() {
    inputTermo.disabled = false
    inputRazao.disabled = false

    inputTermo.value = ''
    inputRazao.value = ''
    inputTermo.focus()

    btnContar.style.display = 'inline-block'
    btnRecomecar.style.display = 'none'

    resposta.innerHTML = ''
}