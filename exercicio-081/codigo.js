const inputIdade = document.getElementById('idade')
const btnAdicionar = document.querySelector('button.btnAdicionar')
const btnCadastrar = document.querySelector('button.btnCadastrar')
const resposta = document.querySelector('div.resposta')

let listaIdades = []


function adicionar() {
    const idadeDigitada = inputIdade.value
    const idade = Number(idadeDigitada)

    if (idadeDigitada === '' || isNaN(idade)) {
        alert('Insira um número válido no campo.')
        inputIdade.value = ''
        inputIdade.focus()
        return
    }

    if (idade <= 0) {
        alert('Insira uma idade maior que zero.')
        inputIdade.value = ''
        inputIdade.focus()
        return
    } 

    listaIdades.push(idade)

    resposta.innerHTML = `${listaIdades.length} idades adicionadas.`

    if (listaIdades.length >= 8) {

    let somaIdades = 0
    let maiorIdade = 0
    let maiorIdadePosicao = 0

    for (let contador = 0; contador < listaIdades.length; contador++) {
        somaIdades = somaIdades + listaIdades[contador]

        if (listaIdades[contador] > maiorIdade) {
            maiorIdade = listaIdades[contador]
            maiorIdadePosicao = contador
        }
    }

     const idadeMais25 = listaIdades
        .map((valor, indice) => ({indice, valor}))
        .filter(item => item.valor > 25)
         .map(item => `[${item.indice}]`)
        .join(' 👉 ')

    
    const idadeMedia = somaIdades / listaIdades.length

    resposta.innerHTML = `
        <p>Soma das idades: ${somaIdades} anos.</p>
        <p>Idade média: ${idadeMedia} ano(s).</p>
        <p>Idades maiores que 25 (indíce): ${idadeMais25}</p>
        <p>Maior idade: ${maiorIdade} anos.</p>
        <p>Indíce da maior idade: ${maiorIdadePosicao}</p>
    `

    inputIdade.disabled = true

    btnAdicionar.style.display = 'none'
    btnCadastrar.style.display = 'inline-block'

    }

}


function cadastrar() {
    listaIdades.length = 0

    inputIdade.disabled = false
    inputIdade.value = ''
    inputIdade.focus()

    btnAdicionar.style.display = 'inline-block'
    btnCadastrar.style.display = 'none'

    resposta.innerHTML = ''
}