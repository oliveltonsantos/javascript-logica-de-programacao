function analisar() {
    const segmento1 = Number(document.getElementById('segmento1').value)
    const segmento2 = Number(document.getElementById('segmento2').value)
    const segmento3 = Number(document.getElementById('segmento3').value)

    const resposta = document.querySelector('div.resposta')

    if (isNaN(segmento1) || isNaN(segmento2) || isNaN(segmento3) || segmento1 <= 0 || segmento2 <= 0 || segmento3 <= 0) {
        alert('Insira dados válidos')
        return
    }

    if (segmento1 < segmento2 + segmento3 && segmento2 < segmento1 + segmento3 && segmento3 < segmento1 + segmento2) {
        resposta.innerHTML = '<p>É possível formar um triângulo.</p>'

        let classificacao = ''

        if (segmento1 == segmento2 && segmento2 == segmento3 && segmento3 == segmento1) {
            // EQUILÁTERO: todos os lados iguais
            classificacao = "Equilátero"
        } else if (segmento1 == segmento2 || segmento1 == segmento3 || segmento2 == segmento3) {
            // ISÓSCELES: dois lados iguais
            classificacao = 'Isósceles'
        } else {
            // ESCALENO: todos os lados diferentes
            classificacao = 'Escaleno'
        }
        resposta.innerHTML += `<p>Tipo: ${classificacao}<p>`
    } else {
        resposta.innerHTML = '<p>Não é possível formar um triângulo.</p>'
    }
}