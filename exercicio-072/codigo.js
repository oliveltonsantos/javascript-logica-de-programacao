const resposta = document.querySelector('div.resposta')

let listaNumeros = []

function gerar() {

let inicio = 5
let fim = 50

while (inicio <= fim) {
        
    listaNumeros.push(inicio)
        inicio = inicio + 5


}

resposta.innerHTML = `Lista de números: ${listaNumeros.join(' | ')}`

}




