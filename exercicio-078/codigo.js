const inptutNumero = document.getElementById('numero')

// Atalho: permitir Enter para adicionar
inptutNumero.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionar()
    }
})

const btnAdicionar = document.querySelector('button.btnAdicionar')
const btnRecomecar = document.querySelector('button.btnRecomecar')
let resposta = document.querySelector('div.resposta')

let listaNumeros = []


function adicionar() {

    const valorDigitado = inptutNumero.value

    if (valorDigitado === '' || isNaN(Number(valorDigitado))) {
        alert('Insira apenas números.')
        inptutNumero.value = ''
        inptutNumero.focus()
        return
    }

    listaNumeros.push(valorDigitado)

    resposta.innerHTML = `Quantidade de números adicionados: ${listaNumeros.length}`

    if (listaNumeros.length > 14) {

        inptutNumero.disabled = true
        btnAdicionar.style.display = 'none'
        btnRecomecar.style.display = 'inline-block'

        resposta.innerHTML += `<p>Números adicionados: ${listaNumeros.join(' | ')}</p>`

        const multiplosDe10 = listaNumeros
            .map((valor, indice) => ({ indice, valor }))
            .filter(item => item.valor % 10 === 0)
            .map(item => `[${item.indice}] - ${item.valor}`)
            .join(' 👉 ')

        if (multiplosDe10.length === 0) {
            resposta.innerHTML += 'Nenhum múltiplo de 10 foi encontrado.'
        } else {
            resposta.innerHTML += `<p>Múltiplos de 10: ${multiplosDe10}</p>`
        }

    }

    inptutNumero.value = ''
    inptutNumero.focus()

}


function recomecar() {

    listaNumeros.length = 0

    inptutNumero.disabled = false
    inptutNumero.value = ''
    inptutNumero.focus()

    btnAdicionar.style.display = 'inline-block'
    btnRecomecar.style.display = 'none'

    resposta.innerHTML = ''

}