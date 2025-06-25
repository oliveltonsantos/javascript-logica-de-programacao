const inputQuantidadeNumeros = document.getElementById('quantidadeNumeros')
const btnVisualizar = document.querySelector('button.btnVisualisar')
const btnRecomecar = document.querySelector('button.btnRecomecar')
const resposta = document.querySelector('div.resposta')

function visualizar() {
    const quantidadeNumeros = Number(inputQuantidadeNumeros.value)

    if (isNaN(quantidadeNumeros)) {
        alert('Digite um valor válido.')
        inputQuantidadeNumeros.value = ''
        inputQuantidadeNumeros.focus()
        return
    }

    let n1 = 1
    let n2 = 1

    resposta.innerHTML += `Sequência: ${n1} , ${n2} , `

    for (let contador = 3; contador <= quantidadeNumeros; contador++) {

        let proximoNumero = n1 + n2
        n1 = n2
        n2 = proximoNumero

        // Se o contador estiver no último indíce a vírgula não é adicionada.
        if (contador === quantidadeNumeros) {
            resposta.innerHTML += `${proximoNumero}...`
        } else {
            resposta.innerHTML += `${proximoNumero} , `
        }

    }

    inputQuantidadeNumeros.disabled = true

    btnVisualizar.style.display = 'none'
    btnRecomecar.style.display = 'inline-block'

}


function recomecar() {
    inputQuantidadeNumeros.disabled = false
    inputQuantidadeNumeros.value = ''
    inputQuantidadeNumeros.focus()

    btnVisualizar.style.display = 'inline-block'
    btnRecomecar.style.display = 'none'

    resposta.innerHTML = ''
}

