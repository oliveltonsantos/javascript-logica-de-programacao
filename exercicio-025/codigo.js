function verificar() {
    var inputSegmento1 = document.getElementById('segmento1')
    var inputSegmento2 = document.getElementById('segmento2')
    var inputSegmento3 = document.getElementById('segmento3')

    var res = document.querySelector('div.res')

    var StringSegmento1 = inputSegmento1.value
    var StringSegmento2 = inputSegmento2.value
    var StringSegmento3 = inputSegmento3.value

    var segmento1 = Number(StringSegmento1)
    var segmento2 = Number(StringSegmento2)
    var segmento3 = Number(StringSegmento3)

    if (isNaN(segmento1) || isNaN(segmento2) || isNaN(segmento3) || segmento1 <= 0 || segmento2 <= 0 || segmento3 <= 0) {
        alert('Insira valores válidos.')
    }

    if (segmento1 < segmento2 + segmento3 && segmento2 < segmento1 + segmento3 && segmento3 < segmento1 + segmento2) {
        res.innerHTML = '<p>As medidas formam um triâgulo.</p>'
    } else {
        res.innerHTML = '<p>As medidas não formam um triângulo.</p>'
    }
}