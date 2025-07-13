const inputPeso = document.getElementById('peso')
const inputAltura = document.getElementById('altura')

// Atalho para adicionar valores apertando o "ENTER"
inputAltura.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionar()
    }
})

const btnLimpar = document.querySelector('button.btnLimpar')
const resposta = document.querySelector('div.resposta')

// Arrays que vão guardar o peso e altura
let listaPeso = []
let listaAltura = []


function adicionar() {
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (isNaN(peso) || isNaN(altura)) {
        alert('Insira números válidos nos campos.')
        inputPeso.value = ''
        inputAltura.value = ''
        inputPeso.focus()
        return
    }

    if (peso <= 0) {
        alert('Insira um peso maior que zero.')
        inputPeso.value = ''
        inputPeso.focus()
        return
    }

    if (altura <= 0) {
        alert('Insira uma altura maior que zero.')
        inputAltura.value = ''
        inputAltura.focus()
        return
    }

    if (listaPeso.length >= 7 || listaAltura.length >= 7) {
        alert('Já foram adicionadas 7 pessoas. Clique em "Analisar"')
        return
    }

    // Adiciona o peso e altura ao final de cada array
    listaPeso.push(peso)
    listaAltura.push(altura)

    resposta.innerHTML = `
                            <p>Pesos adicionados: ${listaPeso.join(' | ')}</p>
                            <p>Alturas adicionadas: ${listaAltura.join(' | ')}</p>
                        `

    inputPeso.value = ''
    inputAltura.value = ''
    inputPeso.focus()

}


function analisar() {
    if (listaPeso.length < 7 || listaAltura.length < 7) {
        alert('Adicione primeiro o peso e a altura de 7 pessoas.')
        return
    }


    let alturaGrupo = 0
    let pessoasMais90Kg = 0

    let pessoasMenos1_60Metros = 0
    let pessoasMais100Kg = 0

    for (let contador = 0; contador < listaPeso.length; contador++) {
        alturaGrupo += listaAltura[contador]

        if (listaPeso[contador] > 90) {
            pessoasMais90Kg++
        }

        if (listaPeso[contador] < 50 && listaAltura[contador] < 1.60) {
            pessoasMenos1_60Metros++
        }

        if (listaAltura[contador] > 1.90 && listaPeso[contador] > 100) {
            pessoasMais100Kg++
        }
    }

    const mediaAlturaGrupo = (alturaGrupo / listaAltura.length).toFixed(1)

    resposta.innerHTML = `
                            <p>Altura média do grupo: ${mediaAlturaGrupo} metros.</p>
                            <p>Pessoas com +90KG: ${pessoasMais90Kg} pessoas.</p>
                            <p>Pessoas que pesam -50KG e tem -1.60 metros: ${pessoasMenos1_60Metros} pessoas.</p>
                            <p>Pessoas que medem +1.90m e pesam +100Kg: ${pessoasMais100Kg} pessoas.</p>
    `

    // Mostra o botão "Limpar"
    btnLimpar.style.display = 'inline-block'
}


function limpar() {

    // Limpa a idade e o sexo adicionados nos arrays
    listaPeso.length = 0
    listaAltura.length = 0

    inputPeso.value = ''
    inputAltura.value = ''
    inputPeso.focus()
    resposta.innerHTML = ''

    // Esconde o botão "Limpar"
    btnLimpar.style.display = 'none'

}

