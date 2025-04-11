function conversao() {
    var dis = document.getElementById('txtdis')
    var res = document.querySelector('div.res')
    var km = dis.value / 1000
    var hm = dis.value / 100
    var dam = dis.value / 10
    var dm = dis.value * 10
    var cm = dis.value * 100
    var mm = dis.value * 1000

    if (dis.value == '') {
        window.alert('Insira uma distância!')
    } else {
        res.innerHTML = `<p>A distância de ${dis.value} metros corresponde a:</p>
        <p>${km} km</p>
        <p>${hm} Hm</p>
        <p>${dam} Dam</p>
        <p>${dm} Dm</p>
        <p>${cm} Cm</p>
        <p>${mm} Mm</p> `
    }
}