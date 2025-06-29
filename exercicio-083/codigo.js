const resposta = document.querySelector('div.resposta')

let listaNumeros = []

function gerar() {

    listaNumeros.length = 0

    for (let contador = 0; contador < 20; contador++) {

        let numeroAleatorio = Math.floor(Math.random() * 99) + 1

        listaNumeros.push(numeroAleatorio)
    }

    resposta.innerHTML = `<p>Lista aleatória: ${listaNumeros.join(' | ')}</p>`

    for (let indiceAtual = 0; indiceAtual < 20; indiceAtual++) {

        for (let indiceComparado = indiceAtual + 1; indiceComparado < 20; indiceComparado++) {
            if (listaNumeros[indiceAtual] > listaNumeros[indiceComparado]) {
                let valorTemporario = listaNumeros[indiceAtual]
                listaNumeros[indiceAtual] = listaNumeros[indiceComparado]
                listaNumeros[indiceComparado] = valorTemporario
            }
        }
    }

    resposta.innerHTML += `<p>Lista crescente: ${listaNumeros.join(' | ')}</p>`

}