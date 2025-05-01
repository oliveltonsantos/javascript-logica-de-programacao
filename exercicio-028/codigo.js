function analisar() {
    const largura = Number(document.getElementById('larguraTerreno').value)
    const comprimento = Number(document.getElementById('comprimentoTerreno').value)

    const resposta = document.querySelector('div.resposta')

    if (isNaN(largura) || isNaN(comprimento) || largura <= 0 || comprimento <= 0) {
        alert('Insira dados válidos.')
        return
    }

    const area = largura * comprimento
    let classificacao = ''

    if (area < 100) {
        classificacao = 'TERRENO POPULAR'
    } else if (area <= 500) {
        classificacao = 'TERRENO MASTER'
    } else {
        classificacao = 'TERRENO VIP'
    }

    resposta.innerHTML = `<p>Área: ${area.toFixed(2)} m2 | ${classificacao}</p>`
}

