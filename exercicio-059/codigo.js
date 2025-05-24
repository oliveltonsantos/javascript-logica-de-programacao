const inputSexo = document.getElementById('sexo')
const inputIdade = document.getElementById('idade')
const resposta = document.querySelector('div.resposta')


let listaSexo = []
let listaIdade = []

let parar = false



function adicionar() {
    const sexo = inputSexo.value
    const idade = Number(inputIdade.value)

    if (sexo == 'FIM' || sexo == 'fim') {
        parar = true
    }

    if (!parar) {

        listaSexo.push(sexo)
        listaIdade.push(idade)

        resposta.innerHTML = `
            <p>Sexo adicionado: ${listaSexo.join(' | ')}</p>
            <p>Idade adicionada: ${listaIdade.join(' | ')}</p>
        `
    } else {

         let maiorIdade = listaIdade[0]

        for (let contador = 1; contador < listaIdade.length; contador++) {
            if (listaIdade[contador] > maiorIdade) {
                maiorIdade = listaIdade[contador]
            }
        }


        resposta.innerHTML = `
            <p>Maior idade: ${maiorIdade}</p>
        
        `
    }

    inputSexo.value = ''
    inputIdade.value = ''
    inputSexo.focus()

}