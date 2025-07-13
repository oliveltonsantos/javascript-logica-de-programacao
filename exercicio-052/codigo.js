const inputIdades = document.getElementById('idade')

// Atalho: permitir Enter para adicionar
inputIdades.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionarIdades()
    }
})

const btnLimpar = document.querySelector('button.btnLimpar')
const resposta = document.querySelector('div.resposta')

// Array que irá guardar as idades
let listaIdades = []


function adicionarIdades() {
    const idade = Number(inputIdades.value)

    if (isNaN(idade) || idade <= 0) {
        alert('Insira uma idade válida.')
        inputIdades.value = ''
        inputIdades.focus()
        return
    }

    if (listaIdades.length >= 10) {
        alert('Você já adicionou 10 idades! Clique em "Analisar"')
        inputIdades.value = ''
        return
    }

    // Adiciona cada idade no array
    listaIdades.push(idade)

    // O join(' , ') adiciona uma vírgula entre as idades
    resposta.innerHTML = `<p>Idades adicionadas: ${listaIdades.join(' , ')}</p>`

    inputIdades.value = ''
    inputIdades.focus()

}


function analisarIdades() {
    if (listaIdades.length < 10) {
        alert('Adicione primeiro as 10 idades!')
        inputIdades.focus()
        return
    }

    let somaIdades = 0
    let maioresDe18 = 0
    let menoresDe5 = 0

    let maiorIdade = listaIdades[0] // Inicializa a variável com o primeiro valor do array.

    for (let contador = 0; contador < listaIdades.length; contador++) {
        somaIdades += listaIdades[contador]

        if (listaIdades[contador] > 18) {
            maioresDe18++ // idade18 = idade18 + 1
        }

        if (listaIdades[contador] < 5) {
            menoresDe5++ // idade5 = idade5 + 1
        }

        // Verifica se a idade atual é maior do que a idade maior anterior
        if (listaIdades[contador] > maiorIdade) {
            maiorIdade = listaIdades[contador]
        }

    }

    const mediaIdades = (somaIdades / listaIdades.length).toFixed(1)

    resposta.innerHTML = `  <p>Média: ${mediaIdades} anos.</p>
                            <p>Mais de 18 anos: ${maioresDe18} pessoas.</p>
                            <p>Menos de 5 anos: ${menoresDe5} pessoas.</p>
                            <p>Maior idade: ${maiorIdade} anos.</p>
    `

    // Mostra o botão "Limpar"
    btnLimpar.style.display = 'inline-block'

}


function limpar() {
    listaIdades.length = 0 // Limpa os números anteriores guardados no array
    inputIdades.value = ''
    resposta.innerHTML = ''
    inputIdades.focus()

    // Esconde o botão "Limpar"
    btnLimpar.style.display = 'none'

}