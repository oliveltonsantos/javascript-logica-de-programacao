const resposta = document.querySelector('div.resposta')

let listaNumeros = []

function gerar() {

    for (let contador = 0; contador < 20; contador++) {

        let numerosAleatorios = Math.floor(Math.random() * 99) + 1

        listaNumeros.push(numerosAleatorios)

        resposta.innerHTML = `<p>Lista aleatória: ${listaNumeros.join(' | ')}</p>`

    }

    for (let contador = 0; contador < 20; contador++) {
        for (contador2 = contador + 1; contador2 < 20; contador2++) {
            if (listaNumeros[contador] > listaNumeros[contador2]) {
                let valorTemporario = listaNumeros[contador]
                listaNumeros[contador] = listaNumeros[contador2]
                listaNumeros[contador2] = valorTemporario
            }
        }
    }

    resposta.innerHTML += `<p>Lista crescente: ${listaNumeros.join(' | ')}</p>`

}