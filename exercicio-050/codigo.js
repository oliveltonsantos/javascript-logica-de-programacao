const resposta = document.querySelector('div.resposta')

function sortear() {

    let contador = 0

    // Array que irá receber os números para mostrar para o usuário
    let exibicao = []

    let maior5 = 0
    let divisivel3 = 0

    while (contador < 20) {
        let numeros = Math.floor(Math.random() * 11) // sorteia entre 0 e 10
        exibicao.push(numeros) // Adiciona os números a um array chamado "exibicao"    

        if (numeros > 5) {
            maior5++
        } else if (numeros % 3 == 0 && numeros != 0) {
            divisivel3++
        }

        contador++
    }

    resposta.innerHTML = `<p>Números sorteados: ${exibicao.join(' , ')}</p>`

    resposta.innerHTML += `<p>Maiores que 5: ${maior5} números</p>
                            Divisível por 3: ${divisivel3} números</p>`

}







