const inptutNumero = document.getElementById('numero')
const btnAdicionar = document.querySelector('button.btnAdicionar')
const btnRecomecar = document.querySelector('button.btnRecomecar')
let resposta = document.querySelector('div.resposta')


let listaNumeros = []

function adicionar() {

    const numero = Number(inptutNumero.value)

    listaNumeros.push(numero)

    resposta.innerHTML = `Quantidade de números adicionados: ${listaNumeros.length}`

    if (listaNumeros.length > 5) {
        resposta.innerHTML += `<p>Números adicionados: ${listaNumeros.join(' | ')}</p>`

        resposta.innerHTML += `Lista: `

        for (let contador = 0; contador < listaNumeros.length; contador++) {
            if (listaNumeros[contador] % 10 == 0) {
                resposta.innerHTML += `[${contador}] - ${listaNumeros[contador]} 👉 `
            }

        }
    }

    inptutNumero.value = ''
    inptutNumero.focus()

}