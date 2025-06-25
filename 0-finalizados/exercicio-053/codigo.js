const inputIdade = document.getElementById('idade')

const inputSexo = document.getElementById('sexo')

// Atalho: permitir Enter para adicionar
inputSexo.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionar()
    }
})

const btnLimpar = document.querySelector('button.btnLimpar')
const resposta = document.querySelector('div.resposta')

// Arrays para armazenar a idade e sexo
let listaIdades = []
let listaSexo = []


function adicionar() {
    let idade = Number(inputIdade.value)
    let sexo = Number(inputSexo.value)

    if (isNaN(idade) || isNaN(sexo) || idade <= 0) {
        alert('Insira números válidos.')
        inputIdade.value = ''
        inputIdade.focus()
        return
    }

    if (sexo <= 0 || sexo >= 3) {
        alert('Utilize: 1 - Sexo feminino | 2 - Sexo masculino')
        inputSexo.value = ''
        inputSexo.focus()
        return
    }

    if (listaIdades.length >= 5 || listaSexo.length >= 5) {
        alert('Você já adicionou 5 pessoas. Clique em "Analisar."')
        return
    }

    // O "push()" adiciona os valores digitados ao final dos arrays
    listaIdades.push(idade)
    listaSexo.push(sexo)

    resposta.innerHTML = `<p>Idade: ${listaIdades.join(' , ')}</p>
                            <p>Sexo: ${listaSexo.join(' , ')}</p>
    `

    inputIdade.value = ''
    inputSexo.value = ''
    inputIdade.focus()

}


function analisar() {
    if (listaIdades.length < 5 || listaSexo.length < 5) {
        alert('Primeiro adicione 5 pessoas para ver o resultado.')
        return
    }

    let somaIdadeGrupo = 0

    let quantidadeHomens = 0
    let somaIdadeHomens = 0

    let quantidadeMulheres = 0
    let mulheresMais20 = 0

    for (let contador = 0; contador < listaIdades.length; contador++) {
        somaIdadeGrupo = somaIdadeGrupo + listaIdades[contador]

        if (listaSexo[contador] === 1) {
            quantidadeMulheres++ // quantidadeMulheres = quantidadeMulheres + 1
            if (listaIdades[contador] > 20) {
                mulheresMais20 = mulheresMais20 + 1
            }
        }

        if (listaSexo[contador] === 2) {
            quantidadeHomens++ // quantidadeHomens = quantidadeHomens + 1
            somaIdadeHomens = somaIdadeHomens + listaIdades[contador]
        }

    }

    let mediaIdadeGrupo = (somaIdadeGrupo / listaIdades.length).toFixed(1)
    let mediaIdadeHomens = (somaIdadeHomens / quantidadeHomens).toFixed(1)


    resposta.innerHTML = `<p>Idade média do grupo: ${mediaIdadeGrupo}</p>
                        <p>Mulheres: ${quantidadeMulheres} | Mulheres com +20 anos: ${mulheresMais20}</p>
                        <p>Homens: ${quantidadeHomens} | Idade média dos homens: ${mediaIdadeHomens}</p>`

    // Mostra o botão "Limpar"
    btnLimpar.style.display = 'inline-block'

}


function limpar() {

    // Limpa o valores adicionados nos arrays    
    listaIdades.length = 0
    listaSexo.length = 0

    resposta.innerHTML = ''
    inputIdade.value = ''
    inputSexo.value = ''
    inputIdade.focus()

    // Esconde o botão "Limpar"
    btnLimpar.style.display = 'none'

}