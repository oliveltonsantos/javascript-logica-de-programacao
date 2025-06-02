const inputSexo = document.getElementById('sexo')
const inputPeso = document.getElementById('peso')

// Atalho para adicionar os dados quanto pressionar "ENTER"
inputPeso.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionar()
    }
})

const btnAdicionar = document.querySelector('button.btnAdicionar')
const btnAnalisar = document.querySelector('button.btnAnalisar')
const btnCadastrar = document.querySelector('button.btnCadastrar')
const resposta = document.querySelector('div.resposta')

// Arrays para armazenar os dados
const listaSexo = []
const listaPeso = []

function adicionar() {
    const sexo = inputSexo.value
    const peso = Number(inputPeso.value)

    if (sexo.trim() === '' || sexo != 'F' && sexo != 'f' && sexo != 'M' && sexo != 'm') {
        alert('Digite "F" para "Sexo Feminino" | "M" para "Sexo Masculino"')
        inputSexo.value = ''
        inputSexo.focus()
        return
    }

    if (isNaN(peso) || peso <= 0) {
        alert('Insira um peso maior que zero.')
        inputPeso.value = ''
        inputPeso.focus()
        return
    }

    if (listaSexo.length >= 8 || listaPeso.length >= 8) {
        alert('Você já adicionou 8 pessoas. Clique em "Analisar"')
        return
    }

    // Adiciona o sexo e peso no fim de cada array
    listaSexo.push(sexo)
    listaPeso.push(peso)

    resposta.innerHTML = `
        <p>Sexo adicionado: ${listaSexo.join(' | ')}</p>
        <p>Peso adicionado: ${listaPeso.join(' | ')}</p>
    `
    inputSexo.value = ''
    inputPeso.value = ''
    inputSexo.focus()
}


function analisar() {

    if (listaSexo.length < 8 || listaPeso.length < 8) {
        alert('Adicione 8 pessoas para fazer a análise.')
        inputSexo.focus()
        return
    }

    let numeroMulheres = 0
    let somaPesoMulheres = 0
    let homensMais100Kg = 0
    let maiorPesoHomens = listaPeso[0]

    for (let contador = 0; contador < listaSexo.length; contador++) {
        if (listaSexo[contador] === 'f' || listaSexo[contador] === 'F') {
            numeroMulheres++
            somaPesoMulheres += listaPeso[contador]
        } else {
            if (listaPeso[contador] > 100) {
                homensMais100Kg++
                if (listaPeso[contador] > maiorPesoHomens) {
                    maiorPesoHomens = listaPeso[contador]
                }

            }
        }
    }

    let mediaPesoMulheres

    if (numeroMulheres > 0) {
        mediaPesoMulheres = somaPesoMulheres / numeroMulheres
    } else {
        mediaPesoMulheres = 'Nenhuma mulher cadastrada.'
    }

    resposta.innerHTML += `
        <h2>Análise</h2>
        <p>Quantidade de mulheres: ${numeroMulheres}<p/>
        <p>Peso médio das mulheres: ${mediaPesoMulheres.toFixed(1)}<p/>
        <p>Homens com mais de 100 KG: ${homensMais100Kg}</p>
        <p>Maior peso entre os homens: ${maiorPesoHomens} KG</p>
    `

    inputSexo.disabled = true
    inputPeso.disabled = true

    btnAdicionar.style.display = 'none'
    btnAnalisar.style.display = 'none'
    btnCadastrar.style.display = 'inline-block'

}


function cadastrar() {
    // Limpa os arrays
    listaSexo.length = 0
    listaPeso.length = 0

    inputSexo.disabled = false
    inputPeso.disabled = false
    inputSexo.value = ''
    inputPeso.value = ''
    inputSexo.focus()

    btnAdicionar.style.display = 'inline-block'
    btnAnalisar.style.display = 'inline-block'
    btnCadastrar.style.display = 'none'

    resposta.innerHTML = ''

}