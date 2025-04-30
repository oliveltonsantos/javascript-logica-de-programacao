function analisar() {
    const larguraTerreno = document.getElementById('larguraTerreno')
    const comprimentoTerreno = document.getElementById('comprimentoTerreno')

    const resposta = document.querySelector('div.resposta')

    const stringLarguraTerreno = larguraTerreno.value
    const stringComprimentoTerreno = comprimentoTerreno.value

    const larguraTerrenoConversao = Number(stringLarguraTerreno)
    const comprimentoTerrenoConversao = Number(stringComprimentoTerreno)

    if (isNaN(larguraTerrenoConversao) || isNaN(comprimentoTerrenoConversao) || larguraTerrenoConversao <= 0 || comprimentoTerrenoConversao <= 0) {
        alert('Insira dados válidos.')
        return
    }

    const areaTerreno = larguraTerrenoConversao * comprimentoTerrenoConversao

    if (areaTerreno < 100) {
        resposta.innerHTML = `<p>Área: ${areaTerreno} m2 | TERRENO POPULAR</p>`
    } else if (areaTerreno >= 100 && areaTerreno <= 500) {
        resposta.innerHTML = `<p>Área: ${areaTerreno} m2 | TERRENO MASTER</p>`
    } else {
        resposta.innerHTML = `<p>Área: ${areaTerreno} | TERRENO VIP</p>`
    }
}