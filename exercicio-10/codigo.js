function calcular() {
    var largura = document.getElementById('txtlargura')
    var larguraNumerica = Number(largura.value)
    var altura = document.getElementById('txtaltura')
    var alturaNumerica = Number(altura.value)
    var res = document.querySelector('div.res')

    if (largura.value == '' || largura.value == 0 || altura.value == '' || altura.value == 0) {
        window.alert('As medidas devem ser inseridas ou não podem ter valor igual a zero.')
    } else {
        var area = alturaNumerica * larguraNumerica
        var tinta = area / 2
        res.innerHTML = `<p>Área total da parede: ${area} metros quadrados.</p>`
        res.innerHTML += `<p>Tinta necessária: ${tinta} litros.</p>`
    }
}