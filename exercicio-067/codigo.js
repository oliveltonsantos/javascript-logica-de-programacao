const inputNumero = document.getElementById('numero')
const btnContar = document.querySelector('button.btnContar')
const btnRecomecar = document.querySelector('button.btnRecomecar')
const resposta = document.querySelector('div.resposta')

function contar() {
    const numero = Number(inputNumero.value)

    if (isNaN(numero) || numero <= 0) {
        alert('Insira um número válido.')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }

    resposta.innerHTML = 'Contagem: '

    for (let i = 0; i <= numero; i++) {
        if (i === numero) {
            resposta.innerHTML += `${i} `
        } else {
            resposta.innerHTML += `${i} , `
        }
    }
    resposta.innerHTML += ' > Acabou!'

    inputNumero.disabled = true
    btnContar.style.display = 'none'
    btnRecomecar.style.display = 'inline-block'
}


function recomecar() {
    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()
    resposta.innerHTML = ''
    btnContar.style.display = 'inline-block'
    btnRecomecar.style.display = 'none'
}